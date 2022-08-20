import { Router } from "express";
import { body } from "express-validator";
import authContoller from "@controllers/authContoller";

const authRouter = Router();

authRouter.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  authContoller.registration
);
authRouter.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  authContoller.login
);
authRouter.post("/logout", authContoller.logout);
authRouter.get("/refresh", authContoller.refresh);
authRouter.put("/update", authContoller.update)

export default authRouter;
