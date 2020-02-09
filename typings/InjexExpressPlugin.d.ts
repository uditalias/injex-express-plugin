import { IInjexPlugin, Injex } from "injex";
import { IInjexExpressPluginConfig } from "./interfaces";
export declare class InjexExpressPlugin implements IInjexPlugin {
    private config;
    private app;
    private container;
    constructor(config?: IInjexExpressPluginConfig);
    apply(container: Injex): Promise<void>;
    private bindContainerHooks;
    private handleModule;
    private createSingletonRouteHandler;
    private createFactoryRouteHandler;
    private handleRoute;
}
