package posTest;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;
import java.time.Duration;

public class PosTestSimulation extends Simulation {

    HttpProtocolBuilder httpProtocol =
            http
                    // Here is the root for all relative URLs
                    .baseUrl("http://127.0.0.1:8080")
                    // Here are the common headers
                    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
                    .doNotTrackHeader("1")
                    .acceptLanguageHeader("en-US,en;q=0.5")
                    .acceptEncodingHeader("gzip, deflate")
                    .userAgentHeader(
                            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0");

    // A scenario is a chain of requests and pauses
    ScenarioBuilder scn =
            scenario("Test Pos")
                    .exec(http("request_1").get("/"))
                    .exec(http("request_2").get("/add?pid=13284888"));

    {
        setUp(scn.injectOpen(atOnceUsers(100)).protocols(httpProtocol));
    }
}
