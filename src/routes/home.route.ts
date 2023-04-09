import { Router } from "express";
import { getRequest } from "../controllers/home.controller";

const router = Router();

router.get("/", getRequest);

export { router as homeRoute }