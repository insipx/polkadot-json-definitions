import * as definitions from './dot-api/packages/types/build/interfaces/definitions.js';
import * as spec from "./dot-api/packages/types-known/build/spec/index.js";
import * as modules from "./dot-api/packages/types-known/build/modules.js";
import { writeFileSync } from 'fs';

let new_defs = mutateDefinitions(definitions);

var defs = JSON.stringify(new_defs, null, 2);
var overrides = JSON.stringify(
{
	TYPES_MODULES: modules.default,
	TYPES_SPEC: spec.default
}, null, 2);

writeFileSync("definitions.json", defs);
writeFileSync("overrides.json", overrides);

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
  var sorted = Object.keys(newobj).sort().reduce((acc, key) => ({
    ...acc, [key]: newobj[key]
  }), {});
  
  sorted['runtime']['types']['Bytes'] = "Vec<u8>";
  return sorted;
}
