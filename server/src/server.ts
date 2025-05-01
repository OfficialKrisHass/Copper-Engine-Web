import express from "express"

import type { EntryData } from "./types/Documentation.ts";

const APIInfo = {
    name: "Copper-Engine web API",
    version: "1.0",
}

const documentationEntries : EntryData[] = [
    {
        title: "Engine",
        subDirs: [
            {
                title: "Core",
                entries: [ "Engine", "Window", "UUID" ]
            },
            {
                title: "Renderer",
                entries: [ "Renderer", "VertexArray", "VertexBuffer", "Shader", "Material" ]
            },
            {
                title: "Scripting",
                entries: [ "ScriptingEngine", "Script" ],
            },
            {
                title: "Input",
                entries: [ "Input", ],
            },
        ],
    },
    {
        title: "Editor",
    },
    {
        title: "ScriptingAPI",
    },
]

const app = express();

app.use(express.json());

app.get("/", (req, res) => {

    res.status(200).json(APIInfo);

});

app.get("/docs/", (req, res) => {

    res.status(200).json(documentationEntries);

})

app.listen(process.env.PORT, () => {

    console.log(`Server listening on port ${process.env.PORT}`);

})
