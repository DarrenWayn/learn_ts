"use strict";
exports.__esModule = true;
var hitesh = {
    dbId: 22,
    email: "h@h.com",
    userId: 2341,
    githubToken: "github",
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        console.log({ name: name, off: off });
        return 10;
    },
    getRadius: function (test) {
        console.log(test);
        return {
            radius: 1232,
            lang: 995,
            lat: 3423
        };
    }
};
hitesh.email = "h@hc.com";
