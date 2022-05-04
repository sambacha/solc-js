import * as semver from 'semver';
/**
 *  A function that takes a compilerVersion and an abi and returns an abi.
 * @param compilerVersion
 * @param abi
 * @returns
 */
export declare function update(compilerVersion: string | semver.SemVer, abi: any[]): any[];
