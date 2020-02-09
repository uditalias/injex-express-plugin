"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const metadata_1 = require("./utils/metadata");
const createConfig_1 = require("./createConfig");
const expressAppSymbol = Symbol("expressApp");
class InjexExpressPlugin {
    constructor(config) {
        this.config = createConfig_1.default(config);
        this.handleModule = this.handleModule.bind(this);
    }
    async apply(container) {
        const { app, createAppCallback } = this.config;
        this.container = container;
        if (app) {
            this.app = app;
        }
        else {
            this.app = express();
            if (typeof createAppCallback === "function") {
                await createAppCallback(this.app);
            }
        }
        // save the express app instance for later use
        this.container.addObject(this.app, expressAppSymbol);
        this.bindContainerHooks();
    }
    bindContainerHooks() {
        this.container.hooks.afterModuleCreation.tap(this.constructor.name, this.handleModule);
    }
    handleModule(module) {
        // check if this is a @controller module
        if (metadata_1.default.hasMetadata(module.metadata.item)) {
            // get the @controller routes
            const { routes } = metadata_1.default.getMetadata(module.metadata.item);
            // convert controller handlers to express route handlers
            for (const route of routes) {
                module.metadata.singleton
                    ? this.createSingletonRouteHandler(route, module.module)
                    : this.createFactoryRouteHandler(route, module.module);
            }
        }
    }
    createSingletonRouteHandler(route, controller) {
        const self = this;
        this.app[route.method](route.path, function injexExpressPluginRouteHandler(req, res) {
            self.handleRoute(controller, route.handler, req, res);
        });
    }
    createFactoryRouteHandler(route, controllerFactory) {
        const self = this;
        this.app[route.method](route.path, async function injexExpressPluginRouteHandler(req, res) {
            const controller = await controllerFactory();
            self.handleRoute(controller, route.handler, req, res);
        });
    }
    handleRoute(controller, handler, req, res) {
        controller[handler](req, res);
    }
}
exports.InjexExpressPlugin = InjexExpressPlugin;
//# sourceMappingURL=InjexExpressPlugin.js.map