import { IInjexExpressPluginConfig } from "./interfaces";

// tslint:disable-next-line
export function noop(...args) { }

export default function createConfig(config?: Partial<IInjexExpressPluginConfig>): IInjexExpressPluginConfig {
	return {
		app: null,
		createAppCallback: noop,
		...config
	};
}