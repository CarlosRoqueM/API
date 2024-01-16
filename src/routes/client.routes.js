import { Router, request, response } from "express";
import { methods as clientControllers  } from "../controllers/client.controller";

const router = Router();

router.get("/", clientControllers.getClients);

export default router;