"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createConfig(config) {
    return {
        app: null,
        createAppCallback: (app) => { },
        ...config
    };
}
exports.default = createConfig;
//# sourceMappingURL=createConfig.js.map