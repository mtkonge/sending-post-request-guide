import express from "express"
import cors from "cors"
import { FileDb } from "./FileDb.js";
import { api } from "./api.js";


const PORT = 8000;

const main = async () => {
    const app = express();

    const database = new FileDb();
    app.use(cors()); 
    app.use(express.json());
    
    app.use("/api", api(database));
    app.use("/", express.static("../frontend"));

    app.listen(PORT, () => console.log("express hosted on port:", PORT));
};
main();