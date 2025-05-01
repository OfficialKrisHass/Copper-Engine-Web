import express from "express"

import type { EntryData } from "./types/Documentation.ts";
import { GetDocumentationEntries } from "./documentation.ts";

const APIInfo = {
    name: "Copper-Engine web API",
    version: "1.0",
}

const app = express();

var docEntries: EntryData[] = [];
GetDocumentationEntries().then(entries => {

    if (entries)
        docEntries = entries

});


app.use(express.json());

app.get("/", (req, res) => {

    res.status(200).json(APIInfo);

});

app.get("/docs/", (req, res) => {

    res.status(200).json(docEntries);

})

app.listen(process.env.PORT, () => {

    console.log(`Server listening on port ${process.env.PORT}`);

})
