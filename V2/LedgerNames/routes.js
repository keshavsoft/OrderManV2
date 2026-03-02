import express from 'express';

const router = express.Router();

import { router as routerFromRead } from "./Read/routes.js"
import { router as routerFromPipe } from "./Pipe/routes.js"

router.use("/Read", routerFromRead);
router.use("/Pipe", routerFromPipe);

export { router };