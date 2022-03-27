var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "94",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "110",
        "ok": "110",
        "ko": "1067"
    },
    "maxResponseTime": {
        "total": "2210",
        "ok": "2210",
        "ko": "1102"
    },
    "meanResponseTime": {
        "total": "1139",
        "ok": "1143",
        "ko": "1078"
    },
    "standardDeviation": {
        "total": "962",
        "ok": "992",
        "ko": "11"
    },
    "percentiles1": {
        "total": "1068",
        "ok": "1027",
        "ko": "1075"
    },
    "percentiles2": {
        "total": "2173",
        "ok": "2178",
        "ko": "1076"
    },
    "percentiles3": {
        "total": "2207",
        "ok": "2207",
        "ko": "1096"
    },
    "percentiles4": {
        "total": "2209",
        "ok": "2209",
        "ko": "1101"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 44,
    "percentage": 44
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 44,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "count": 6,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.333",
        "ok": "31.333",
        "ko": "2"
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
        "ok": "44",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "1067",
        "ok": "2135",
        "ko": "1067"
    },
    "maxResponseTime": {
        "total": "2210",
        "ok": "2210",
        "ko": "1102"
    },
    "meanResponseTime": {
        "total": "2043",
        "ok": "2175",
        "ko": "1078"
    },
    "standardDeviation": {
        "total": "357",
        "ok": "24",
        "ko": "11"
    },
    "percentiles1": {
        "total": "2174",
        "ok": "2180",
        "ko": "1075"
    },
    "percentiles2": {
        "total": "2183",
        "ok": "2196",
        "ko": "1076"
    },
    "percentiles3": {
        "total": "2209",
        "ok": "2209",
        "ko": "1096"
    },
    "percentiles4": {
        "total": "2210",
        "ok": "2210",
        "ko": "1101"
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
    "count": 44,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "count": 6,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "14.667",
        "ko": "2"
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
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "110",
        "ok": "110",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1068",
        "ok": "1068",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "235",
        "ok": "235",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "297",
        "ok": "297",
        "ko": "-"
    },
    "percentiles1": {
        "total": "127",
        "ok": "127",
        "ko": "-"
    },
    "percentiles2": {
        "total": "135",
        "ok": "135",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1027",
        "ok": "1027",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1067",
        "ok": "1067",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 44,
    "percentage": 88
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6,
    "percentage": 12
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "16.667",
        "ko": "-"
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
