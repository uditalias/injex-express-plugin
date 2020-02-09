"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injex_1 = require("injex");
const path = require("path");
const InjexExpressPlugin_1 = require("./InjexExpressPlugin");
(async function () {
    const container = injex_1.Injex.create({
        rootDirs: [
            path.resolve(__dirname, "./app")
        ],
        logLevel: injex_1.LogLevel.Debug,
        plugins: [
            new injex_1.plugins.HooksLoggerPlugin(),
            new InjexExpressPlugin_1.InjexExpressPlugin({
                createAppCallback: function (app) {
                    app.listen(8081, () => console.log("Server is running..."));
                }
            })
        ]
    });
    await container.bootstrap();
})();
//# sourceMappingURL=index.js.map