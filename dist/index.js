"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customInstance = exports.axiosInstance = void 0;
// Export all generated API endpoint functions
__exportStar(require("./api/endpoints/hallocasaAPI"), exports);
// Export all models/types
__exportStar(require("./api/model"), exports);
// Export the custom axios instance if needed
var custom_instance_1 = require("./api/custom-instance");
Object.defineProperty(exports, "axiosInstance", { enumerable: true, get: function () { return custom_instance_1.axiosInstance; } });
Object.defineProperty(exports, "customInstance", { enumerable: true, get: function () { return custom_instance_1.customInstance; } });
