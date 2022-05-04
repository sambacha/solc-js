#!/usr/bin/env node
import * as semver from 'semver';
import solc from './soljson';
const { version: packageVersion } = require('./../package.json');
const solcVersion = solc.version();
console.log('solcVersion: ' + solcVersion);
console.log('packageVersion: ' + packageVersion);
if (semver.eq(packageVersion, solcVersion)) {
    console.log('Version matching');
    process.exit(0);
}
else {
    console.log('Version mismatch');
    process.exit(1);
}
//# sourceMappingURL=verifyVersion.js.map