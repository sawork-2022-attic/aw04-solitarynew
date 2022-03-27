# WebPOS

The demo shows a web POS system , which replaces the in-memory product db in aw03 with a one backed by 京东.


![](jdpos.png)

To run

```shell
mvn clean spring-boot:run
```

Currently, it creates a new session for each user and the session data is stored in an in-memory h2 db. 
And it also fetches a product list from jd.com every time a session begins.

1. Build a docker image for this application and performance a load testing against it.
2. Make this system horizontally scalable by using haproxy and performance a load testing against it.
3. Take care of the **cache missing** problem (you may cache the products from jd.com) and **session sharing** problem (you may use a standalone mysql db or a redis cluster). Performance load testings.

Please **write a report** on the performance differences you notices among the above tasks.

# 实验报告

## 1

> Build a docker image for this application and performance a load testing against it.

### 实验过程

添加maven插件

```xml
<plugin>
	<groupId>com.google.cloud.tools</groupId>
	<artifactId>jib-maven-plugin</artifactId>
	<version>3.2.0</version>
	<configuration>
		<to>
			<image>app-pos</image>
		</to>
	</configuration>
</plugin>
```

运行如下命令生成docker镜像

```shell
mvn compile jib:dockerBuild
```

![image-20220327154551543](README.assets/image-20220327154551543.png)

运行如下三行命令，运行三个分别使用0.5,1,2个CPU的容器

```shell
docker run -d  --name app-pos-0.5 --cpus=0.5 -p 18080:8080 app-pos
docker run -d  --name app-pos-1 --cpus=1 -p 28080:8080 app-pos
docker run -d  --name app-pos-2 --cpus=2 -p 38080:8080 app-pos
```

编写Gatling脚本如下，访问一次主页，添加一个物品：

```java
ScenarioBuilder scn =
	scenario("Test Pos")
		.exec(http("request").get("/"))
		.exec(http("request").get("/add?pid=13284888"));
```

