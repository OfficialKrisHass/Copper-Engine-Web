import type { EntryData } from "./types/Documentation.ts"

import { promises } from "fs";

import path from "path"

export async function GetDocumentationEntries() : Promise<EntryData[] | undefined> {
    
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

            }

        }

        tree.pop();

    }

    await walk(dir + "/Engine");
    await walk(dir + "/Editor");

    return ret;

}

