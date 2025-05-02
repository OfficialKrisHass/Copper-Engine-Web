import express from "express"

import docsRouter from "./routes/docs.ts";

const APIInfo = {
    name: "Copper-Engine web API",
    version: "1.0",
}

const app = express();

app.use(express.json());
app.use("/docs", docsRouter);

app.get("/", (req, res) => {

    res.status(200).json(APIInfo);

});

app.listen(process.env.PORT, () => {

    console.log(`Server listening on port ${process.env.PORT}`);

})
