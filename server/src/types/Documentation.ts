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

    functions?: string[];
    defines?: string[];
    types?: string[];
}
