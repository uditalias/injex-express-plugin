"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line
function noop(...args) { }
exports.noop = noop;
function createConfig(config) {
    return {
        app: null,
        createAppCallback: noop,
        ...config
    };
}
exports.default = createConfig;
//# sourceMappingURL=createConfig.js.map