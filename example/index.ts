import { Injex, plugins, LogLevel } from "injex";
import * as path from "path";
import { InjexExpressPlugin } from "../src/InjexExpressPlugin";
import { Application } from "express";
import * as bodyParser from "body-parser";

(async function () {
	const container = Injex.create({
		rootDirs: [
			path.resolve(__dirname, "./app")
		],
		plugins: [
			new InjexExpressPlugin({
				createAppCallback: function (app: Application) {

					app.use(bodyParser.json());

					app.listen(8081, () => console.log("Server is running..."));
				}
			})
		]
	});

	await container.bootstrap();

})();