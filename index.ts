import * as Definitions from "./dot-api/packages/types/src/interfaces/definitions";
import * as Overrides from "./dot-api/packages/types/src/known/overrides";
import fs from 'fs';

// console.log(definitions);
const defs = JSON.stringify(Definitions, null, 2);
const overrides = JSON.stringify(Overrides, null, 2);

fs.writeFileSync("definitions.json", defs);
fs.writeFileSync("overrides.json", overrides);
