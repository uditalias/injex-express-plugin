import { createRouteMetadata } from "../utils/metadata";

export function del(path: string) {
	return function (targetPrototype, methodName: string, propertyDescriptor: PropertyDescriptor) {
		createRouteMetadata(
			targetPrototype.constructor,
			path,
			"delete",
			methodName
		);
	}
}