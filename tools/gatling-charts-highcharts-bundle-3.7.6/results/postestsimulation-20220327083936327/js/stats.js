var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "45",
        "ko": "55"
    },
    "minResponseTime": {
        "total": "257",
        "ok": "14123",
        "ko": "257"
    },
    "maxResponseTime": {
        "total": "60017",
        "ok": "14217",
        "ko": "60017"
    },
    "meanResponseTime": {
        "total": "36391",
        "ok": "14170",
        "ko": "54573"
    },
    "standardDeviation": {
        "total": "23796",
        "ok": "26",
        "ko": "17173"
    },
    "percentiles1": {
        "total": "37109",
        "ok": "14168",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "60002",
        "ok": "14186",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "14213",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "14216",
        "ko": "60011"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 45,
    "percentage": 45
},
    "group4": {
    "name": "failed",
    "count": 55,
    "percentage": 55
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.333",
        "ok": "0.6",
        "ko": "0.733"
    }
},
contents: {
"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "50",
        "ok": "0",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "257",
        "ok": "-",
        "ko": "257"
    },
    "maxResponseTime": {
        "total": "60006",
        "ok": "-",
        "ko": "60006"
    },
    "meanResponseTime": {
        "total": "54029",
        "ok": "-",
        "ko": "54029"
    },
    "standardDeviation": {
        "total": "17921",
        "ok": "-",
        "ko": "17921"
    },
    "percentiles1": {
        "total": "60002",
        "ok": "-",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "60004",
        "ok": "-",
        "ko": "60004"
    },
    "percentiles3": {
        "total": "60005",
        "ok": "-",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "-",
        "ko": "60006"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 50,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.667",
        "ok": "-",
        "ko": "0.667"
    }
}
    },"req_request-2-93baf": {
        type: "REQUEST",
        name: "request_2",
path: "request_2",
pathFormatted: "req_request-2-93baf",
stats: {
    "name": "request_2",
    "numberOfRequests": {
        "total": "50",
        "ok": "45",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "14123",
        "ok": "14123",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60017",
        "ok": "14217",
        "ko": "60017"
    },
    "meanResponseTime": {
        "total": "18753",
        "ok": "14170",
        "ko": "60005"
    },
    "standardDeviation": {
        "total": "13751",
        "ok": "26",
        "ko": "6"
    },
    "percentiles1": {
        "total": "14173",
        "ok": "14168",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "14191",
        "ok": "14186",
        "ko": "60005"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "14213",
        "ko": "60015"
    },
    "percentiles4": {
        "total": "60011",
        "ok": "14216",
        "ko": "60017"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 45,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 5,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.667",
        "ok": "0.6",
        "ko": "0.067"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
