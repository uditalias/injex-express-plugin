import { IMetadata } from "../interfaces";
declare const metadataHandlers: import("injex/typings/utils/metadata").MetadataHandlers<IMetadata>;
export declare function createRouteMetadata(targetConstructor: any, path: string, method: string, handler: string): void;
export default metadataHandlers;
