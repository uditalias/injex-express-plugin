import { Application } from "express";
import * as express from "express";
import { IInjexPlugin, Injex, IModule } from "injex";
import metadataHandlers from "./utils/metadata";
import { IRoute, IInjexExpressPluginConfig } from "./interfaces";
import createConfig from "./createConfig";

const expressAppSymbol = Symbol("expressApp");

export class InjexExpressPlugin implements IInjexPlugin {

	private config: IInjexExpressPluginConfig;
	private app: Application;
	private container: Injex;

	constructor(config?: IInjexExpressPluginConfig) {
		this.config = createConfig(config);
		this.handleModule = this.handleModule.bind(this);
	}

	public async apply(container: Injex): Promise<void> {

		const { app, createAppCallback } = this.config;

		this.container = container;

		if (app) {
			this.app = app;
		} else {
			this.app = express();

			if (typeof createAppCallback === "function") {
				await createAppCallback(this.app);
			}
		}

		// save the express app instance for later use
		this.container.addObject(this.app, expressAppSymbol);

		this.bindContainerHooks();
	}

	private bindContainerHooks() {
		this.container.hooks.afterModuleCreation.tap(this.constructor.name, this.handleModule);
	}

	private handleModule(module: IModule) {

		// check if this is a @controller module
		if (metadataHandlers.hasMetadata(module.metadata.item)) {

			// get the @controller routes
			const { routes } = metadataHandlers.getMetadata(module.metadata.item);

			// convert controller handlers to express route handlers
			for (const route of routes) {
				module.metadata.singleton
					? this.createSingletonRouteHandler(route, module.module)
					: this.createFactoryRouteHandler(route, module.module);
			}
		}
	}

	private createSingletonRouteHandler(route: IRoute, controller: any) {
		const self = this;
		this.app[route.method](route.path, function injexExpressPluginRouteHandler(req: express.Request, res: express.Response) {
			self.handleRoute(controller, route.handler, req, res);
		});
	}

	private createFactoryRouteHandler(route: IRoute, controllerFactory: () => any) {
		const self = this;
		this.app[route.method](route.path, async function injexExpressPluginRouteHandler(req: express.Request, res: express.Response) {
			const controller = await controllerFactory();
			self.handleRoute(controller, route.handler, req, res);
		});
	}

	private handleRoute(controller: any, handler: string, req: express.Request, res: express.Response) {
		controller[handler](req, res);
	}
}