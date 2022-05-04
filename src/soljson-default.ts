//import * as soljson from './soljson';
const soljson = require("soljson.js")
export default soljson;
let version = require("semver")
version = version.parse(soljson.version())

