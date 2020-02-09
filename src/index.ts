import { Injex, plugins, LogLevel } from "injex";
import * as path from "path";
import { InjexExpressPlugin } from "./InjexExpressPlugin";
import { Application } from "express";

(async function () {
	const container = Injex.create({
		rootDirs: [
			path.resolve(__dirname, "./app")
		],
		logLevel: LogLevel.Debug,
		plugins: [
			new plugins.HooksLoggerPlugin(),
			new InjexExpressPlugin({
				createAppCallback: function (app: Application) {
					app.listen(8081, () => console.log("Server is running..."));
				}
			})
		]
	});

	await container.bootstrap();

})();