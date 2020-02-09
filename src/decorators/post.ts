import { createRouteMetadata } from "../utils/metadata";

export function post(path: string) {
	return function (targetPrototype, methodName: string, propertyDescriptor: PropertyDescriptor) {
		createRouteMetadata(
			targetPrototype.constructor,
			path,
			"post",
			methodName
		);
	}
}