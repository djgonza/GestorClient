System.register(["./auth.guard", "./jwt.guard"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (auth_guard_1_1) {
                exportStar_1(auth_guard_1_1);
            },
            function (jwt_guard_1_1) {
                exportStar_1(jwt_guard_1_1);
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=index.js.map