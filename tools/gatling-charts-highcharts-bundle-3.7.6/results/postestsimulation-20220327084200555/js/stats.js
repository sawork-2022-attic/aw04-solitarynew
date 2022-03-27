var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "108",
        "ok": "-",
        "ko": "108"
    },
    "maxResponseTime": {
        "total": "1951",
        "ok": "-",
        "ko": "1951"
    },
    "meanResponseTime": {
        "total": "986",
        "ok": "-",
        "ko": "986"
    },
    "standardDeviation": {
        "total": "382",
        "ok": "-",
        "ko": "382"
    },
    "percentiles1": {
        "total": "1003",
        "ok": "-",
        "ko": "1003"
    },
    "percentiles2": {
        "total": "1152",
        "ok": "-",
        "ko": "1152"
    },
    "percentiles3": {
        "total": "1711",
        "ok": "-",
        "ko": "1711"
    },
    "percentiles4": {
        "total": "1797",
        "ok": "-",
        "ko": "1797"
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
    "count": 100,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "25",
        "ok": "-",
        "ko": "25"
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
        "total": "894",
        "ok": "-",
        "ko": "894"
    },
    "maxResponseTime": {
        "total": "1204",
        "ok": "-",
        "ko": "1204"
    },
    "meanResponseTime": {
        "total": "1025",
        "ok": "-",
        "ko": "1025"
    },
    "standardDeviation": {
        "total": "100",
        "ok": "-",
        "ko": "100"
    },
    "percentiles1": {
        "total": "1030",
        "ok": "-",
        "ko": "1030"
    },
    "percentiles2": {
        "total": "1118",
        "ok": "-",
        "ko": "1118"
    },
    "percentiles3": {
        "total": "1173",
        "ok": "-",
        "ko": "1173"
    },
    "percentiles4": {
        "total": "1193",
        "ok": "-",
        "ko": "1193"
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
        "total": "12.5",
        "ok": "-",
        "ko": "12.5"
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
        "ok": "0",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "108",
        "ok": "-",
        "ko": "108"
    },
    "maxResponseTime": {
        "total": "1951",
        "ok": "-",
        "ko": "1951"
    },
    "meanResponseTime": {
        "total": "946",
        "ok": "-",
        "ko": "946"
    },
    "standardDeviation": {
        "total": "529",
        "ok": "-",
        "ko": "529"
    },
    "percentiles1": {
        "total": "889",
        "ok": "-",
        "ko": "889"
    },
    "percentiles2": {
        "total": "1334",
        "ok": "-",
        "ko": "1334"
    },
    "percentiles3": {
        "total": "1772",
        "ok": "-",
        "ko": "1772"
    },
    "percentiles4": {
        "total": "1875",
        "ok": "-",
        "ko": "1875"
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
        "total": "12.5",
        "ok": "-",
        "ko": "12.5"
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
