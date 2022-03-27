var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "1000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1451",
        "ok": "1451",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "622",
        "ok": "622",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "240",
        "ok": "240",
        "ko": "-"
    },
    "percentiles1": {
        "total": "653",
        "ok": "653",
        "ko": "-"
    },
    "percentiles2": {
        "total": "769",
        "ok": "769",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1101",
        "ok": "1101",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1258",
        "ok": "1258",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 841,
    "percentage": 84
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 144,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 15,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "500",
        "ok": "500",
        "ko": "-"
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
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "125",
        "ok": "125",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1451",
        "ok": "1451",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "640",
        "ok": "640",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "267",
        "ok": "267",
        "ko": "-"
    },
    "percentiles1": {
        "total": "655",
        "ok": "655",
        "ko": "-"
    },
    "percentiles2": {
        "total": "785",
        "ok": "785",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1165",
        "ok": "1165",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1373",
        "ok": "1373",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 392,
    "percentage": 78
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 93,
    "percentage": 19
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 15,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "250",
        "ok": "250",
        "ko": "-"
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
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "939",
        "ok": "939",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "604",
        "ok": "604",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "208",
        "ok": "208",
        "ko": "-"
    },
    "percentiles1": {
        "total": "652",
        "ok": "652",
        "ko": "-"
    },
    "percentiles2": {
        "total": "741",
        "ok": "741",
        "ko": "-"
    },
    "percentiles3": {
        "total": "851",
        "ok": "851",
        "ko": "-"
    },
    "percentiles4": {
        "total": "914",
        "ok": "914",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 449,
    "percentage": 90
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 51,
    "percentage": 10
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
        "total": "250",
        "ok": "250",
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
