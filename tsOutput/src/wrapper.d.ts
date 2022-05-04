declare function setupMethods(soljson: any): {
    version: any;
    semver: () => any;
    license: any;
    lowlevel: {
        compileSingle: any;
        compileMulti: any;
        compileCallback: any;
        compileStandard: any;
    };
    features: {
        legacySingleInput: boolean;
        multipleInputs: boolean;
        importCallback: boolean;
        nativeStandardJSON: boolean;
    };
    compile: (input: any, readCallback?: any) => any;
    loadRemoteVersion: (versionString: any, cb: any) => void;
    setupMethods: typeof setupMethods;
};
export default setupMethods;
