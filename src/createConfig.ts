import { Application } from "express";
import { IInjexExpressPluginConfig } from "./interfaces";

export function noop(...args) { }

export default function createConfig(config?: Partial<IInjexExpressPluginConfig>): IInjexExpressPluginConfig {
	return {
		app: null,
		createAppCallback: noop,
		...config
	};
}