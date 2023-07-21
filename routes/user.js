import  express from "express";

const router =express.Router();

import { getAllUsers,register,getMyDetails,login,logout } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

router.post("/new",register);
router.get("/all",getAllUsers);
router.post("/login",login);
router.get("/logout",logout);

router.get("/me", isAuthenticated,getMyDetails);

   


export default router;
