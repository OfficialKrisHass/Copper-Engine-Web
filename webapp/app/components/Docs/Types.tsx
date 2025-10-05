export type DocData = {
    name: string;
    content: string;
}
export type DocTreeNode = {
    name: string;
    path: string;
    subDirs?: DocTreeNode[];
    entries?: string[];
}
