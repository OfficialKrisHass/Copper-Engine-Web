import type { EntryData, DocData } from "./types/Documentation.ts"

import fs, { promises } from "fs";
import readline from "readline";

import path from "path"

var docData: Record<string, DocData> = {};

export async function LoadDocumentationEntries() : Promise<EntryData[] | undefined> {
    
    // little bit of fuckery to make the order of top level directories how we want (engine before editor)
    let ret: EntryData[] = [ { title: "Engine" }, { title: "Editor" }, ];
    let tree: EntryData[] = [ ret[1], ret[0], ];

    const dir: string = "./data/documentation";
    async function walk(dir : string) {

        const files = await promises.readdir(dir);
        const back = tree[tree.length - 1];

        back.subDirs = [];
        back.entries = [];

        for (const file of files) {

            let fullPath = path.join(dir, file);
            let stat = await promises.stat(fullPath);
            if (stat.isDirectory()) {

                back.subDirs.push({ title: file })
                tree.push(back.subDirs[back.subDirs.length - 1]);
                
                await walk(fullPath);

            } else {

                const title = file.substring(0, file.lastIndexOf('.'));
                back.entries.push(title);

                await ProcessDoc(fullPath, path.basename(dir) + '.' + title);

            }

        }

        tree.pop();

    }

    await walk(dir + "/Engine");

    return ret;

}

export function GetDocumentationData(entry: string) : DocData | undefined {

    if (!(entry in docData)) return undefined;
    return docData[entry];

}

async function ProcessDoc(fullPath: string, title: string) : Promise<void> {

    const stream = fs.createReadStream(fullPath);
    const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });

    let lines: string[] = [];
    for await (const line of rl) {
        lines.push(line);
    }

    let data: DocData = {};
    let arr: string[] | undefined = undefined;
    for (let i: number = 0; i < lines.length; i++) {

        const line: string = lines[i];
        if (arr) {

            if (line === "") continue;
            if (line[0] === '#')
                arr = undefined;
            else
                arr.push(line);

        }

        switch (line) {

            case "# Summary": data.summary = lines[++i]; break;
            case "# Header": data.header = lines[++i]; break;
            case "# Source": data.source = lines[++i]; break;
            case "# Namespace": data.namespace = lines[++i]; break;
            case "# Type": data.type = lines[++i]; break;
            case "# Functions": data.functions = []; arr = data.functions; break;
            case "# Defines": data.defines = []; arr = data.defines; break;
            case "# Types": data.types = []; arr = data.types; break;

        }

    }

    if (data.summary && data.header && data.source && data.namespace && data.type)
        docData[title] = data;

}
