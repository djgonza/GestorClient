System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AppConfig;
    return {
        setters: [],
        execute: function () {
            AppConfig = (function () {
                function AppConfig() {
                    //public readonly apiUrl = 'http://localhost:4000';
                    this.apiUrl = 'https://gestorrest.herokuapp.com';
                }
                return AppConfig;
            }());
            exports_1("AppConfig", AppConfig);
            ;
        }
    };
});
//# sourceMappingURL=app.config.js.map