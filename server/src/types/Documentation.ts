export type EntryData = {
    title: string;
    subDirs?: EntryData[];
    entries?: string[];
}
export type DocData = {
    summary?: string;

    header?: string;
    source?: string;
    namespace?: string;
    type?: string;

    variables?: DocDataEntry[];
    values?: DocDataEntry[];
    functions?: DocDataEntry[];
    defines?: DocDataEntry[];
    types?: DocDataEntry[];
}
export type DocDataEntry = {
    name: string;
    description: string;
}
