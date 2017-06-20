System.register(["./alert.service", "./authentication.service", "./user.service", "./library.service", "./book.service"], function (exports_1, context_1) {
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
            function (alert_service_1_1) {
                exportStar_1(alert_service_1_1);
            },
            function (authentication_service_1_1) {
                exportStar_1(authentication_service_1_1);
            },
            function (user_service_1_1) {
                exportStar_1(user_service_1_1);
            },
            function (library_service_1_1) {
                exportStar_1(library_service_1_1);
            },
            function (book_service_1_1) {
                exportStar_1(book_service_1_1);
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=index.js.map