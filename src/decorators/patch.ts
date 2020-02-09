import { createRouteMetadata } from "../utils/metadata";

export function patch(path: string) {
	return function (targetPrototype, methodName: string, propertyDescriptor: PropertyDescriptor) {
		createRouteMetadata(
			targetPrototype.constructor,
			path,
			"patch",
			methodName
		);
	}
}