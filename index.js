exports.__esModule = true;

var Definitions = require("./dot-api/packages/types/build/interfaces/definitions");
var kusama_spec = require("./dot-api/packages/types-known/build/spec/kusama");
var modules = require("./dot-api/packages/types-known/build/modules");
var meta = require("./dot-api/packages/types-known/build/metadata");
var fs = require('fs');

var defs = JSON.stringify(Definitions, null, 2);
var overrides = JSON.stringify(
{
	TYPES_MODULES: modules,
	TYPES_META: meta,
	TYPES_SPEC: kusama_spec
}, null, 2);

fs.writeFileSync("definitions.json", defs);
fs.writeFileSync("overrides.json", overrides);
