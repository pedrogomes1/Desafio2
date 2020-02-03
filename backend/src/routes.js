import { Router } from "express";

import SessionController from "./app/controllers/SessionController";
import RecipientController from "./app/controllers/RecipientController";

import authMiddlewares from "./app/middlewares/auth";
import isAdmin from "./app/middlewares/admin";

const routes = new Router();

routes.post("/sesions", SessionController.store);

routes.use(authMiddlewares);
routes.post("/recipient", isAdmin, RecipientController.store);
routes.put("/recipient/:id", isAdmin, RecipientController.update);

export default routes;
