import { GuideData } from "./Types";

import { cache } from "react";

import fs from "fs/promises"
import path from "path"

async function GetGuideList() : Promise<GuideData[]> {

    const guidePath = path.join(process.cwd(), "public/guide");

    const files = await fs.readdir(guidePath);
    const guideList: GuideData[] = [];

    for (const file of files) {

        const filePath = path.join(guidePath, file);
        
        const stats = await fs.stat(filePath);
        if (!stats.isFile() || path.extname(file) != ".md") continue;

        const match = file.match(/^(\d+)\s+-\s+(.+).md$/);
        if (match === null) continue;

        const content = await fs.readFile(filePath, "utf-8");
        guideList.push({
            id: Number(match[1]),
            title: match[2],
            content: content,
        })

    }

    return guideList;

}

export const GetGuideListCached = cache(async () => {

    return await GetGuideList();

});
