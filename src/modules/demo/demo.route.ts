import { Router } from "express";
import { demoController } from "./demo.controller";

const router = Router();

router.get("/", demoController.demo);

export const demoRoute = router;
