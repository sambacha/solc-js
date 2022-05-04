import wrapper from './wrapper';
declare const _default: {
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
    setupMethods: typeof wrapper;
};
export default _default;
