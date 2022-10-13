import { Router } from "express";
import { postApiRoutes } from "./posts.js"

export const api = (database) => {
    const router = Router();
    postApiRoutes(router, database)
    return router;
};