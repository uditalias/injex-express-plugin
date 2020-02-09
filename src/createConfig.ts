import { Application } from "express";
import { IInjexExpressPluginConfig } from "./interfaces";

export default function createConfig(config: Partial<IInjexExpressPluginConfig>): IInjexExpressPluginConfig {
	return {
		app: null,
		createAppCallback: (app: Application) => { },
		...config
	};
}