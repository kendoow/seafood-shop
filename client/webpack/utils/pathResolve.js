"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathResolve = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const pathResolve = (myPath) => {
    return path_1.default.resolve(__dirname, '../../', myPath);
};
exports.pathResolve = pathResolve;
