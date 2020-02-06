"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var definitions = __importStar(require("./dot-api/packages/types/src/interfaces/definitions"));
var overrides = __importStar(require("./dot-api/packages/types/src/known/overrides"));
// console.log(definitions);
console.log(JSON.stringify(definitions));
console.log(JSON.stringify(overrides));
