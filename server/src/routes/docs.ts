import express from "express";

import type { EntryData, DocData } from "../types/Documentation.ts";
import { LoadDocumentationEntries, GetDocumentationData } from "../documentation.ts";

const docsRouter = express.Router();

var docEntries: EntryData[] = [];
LoadDocumentationEntries().then(entries => {

    if (entries)
        docEntries = entries

});

docsRouter.get("/", (req, res) => {

    res.status(200).json(docEntries);

});

docsRouter.get("/:entry", (req, res) => {

    const ret: DocData | undefined = GetDocumentationData(req.params.entry);

    if (ret)
        res.status(200).json(ret);
    else
        res.status(404).json({ msg: "Could not retrieve documentation data for entry '" + req.params.entry + "'" });

})

export default docsRouter;
