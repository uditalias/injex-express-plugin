import { Constructor } from "injex";
import metadataHandlers from "../utils/metadata";

export function controller() {
	return function (targetConstructor: Constructor) {
		metadataHandlers.ensureMetadata(targetConstructor);
	}
}