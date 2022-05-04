export declare function handleSMTQueries(inputJSON: any, outputJSON: any, solverFunction: any, solver?: any): any;
export declare function smtCallback(solverFunction: any, solver?: any): (query: any) => {
    contents: any;
    error?: undefined;
} | {
    error: any;
    contents?: undefined;
};
