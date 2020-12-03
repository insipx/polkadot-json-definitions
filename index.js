exports.__esModule = true;

var definitions = require("./dot-api/packages/types/build/interfaces/definitions");
var spec = require("./dot-api/packages/types-known/build/spec/index");
var modules = require("./dot-api/packages/types-known/build/modules");
var fs = require('fs');


let new_defs = mutateDefinitions(definitions);

var defs = JSON.stringify(new_defs, null, 2);
var overrides = JSON.stringify(
{
	TYPES_MODULES: modules.default,
	TYPES_SPEC: spec.default
}, null, 2);

fs.writeFileSync("definitions.json", defs);
fs.writeFileSync("overrides.json", overrides);

// remove "rpc" definitions
// sorts the object
// adds definition for `Bytes`
function mutateDefinitions(obj) {
  var key, keys = Object.keys(obj);
  var n = keys.length;
  var newobj={}
  while (n--) {
    key = keys[n];
    delete obj[key].rpc;
    newobj[key.toLowerCase()] = obj[key];
  }
  sorted = Object.keys(newobj).sort().reduce((acc, key) => ({
    ...acc, [key]: newobj[key]
  }), {});
  
  sorted['runtime']['types']['Bytes'] = "Vec<u8>";
  return sorted;
}
