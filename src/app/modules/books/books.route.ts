import express from "express";
import { getBooks } from "./books.controller";
const router = express.Router();

router.get("/getBooks",getBooks);

export default router;
