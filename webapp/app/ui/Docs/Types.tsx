export type Entry = {
    title: string;
    subDirs?: Entry[];
    entries?: string[];
}
export type Data = {
    summary: string;

    header: string;
    source: string;
    namespace: string;
    type: string;

    variables?: DataEntry[];
    values?: DataEntry[];
    functions?: DataEntry[];
    defines?: DataEntry[];
    types?: DataEntry[];
}
export type DataEntry = {
    name: string;
    description: string;
}
