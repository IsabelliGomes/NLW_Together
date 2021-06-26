import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { ListUserSenderComplimentsController } from "./controllers/ListUserSenderComplimentsController";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUserController } from "./controllers/ListUserConstroller";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const authenticateUserController = new AuthenticateUserController();

const listUserSenderComplimentsController = new ListUserSenderComplimentsController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController();
const listTagController = new ListTagController();
const listUserController = new ListUserController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);
router.post("/login", authenticateUserController.handle);


router.get("/users/compliments/send", ensureAuthenticated, listUserSenderComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiverComplimentsController.handle);
router.get("/tags", ensureAuthenticated, listTagController.handle);
router.get("/users", ensureAuthenticated, listUserController.handle);

export { router };