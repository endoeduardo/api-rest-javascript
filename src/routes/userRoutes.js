import { Router } from "express";
import userController from "../controllers/userController.js";
import userAdminController from "../controllers/userAdminController.js";

const router = Router();

router
    .get("/users/getAllUsers", userController.getAllUsers)
    .post("/users/registerUser", userController.registerUser)
    .post("/users/updateUserInfo", userController.updateUserInfo)
    .post("/users/searchByUserId", userController.searchByUserId)
    .post("/users/searchUserProducts", userController.searchUserProducts)
    .post("/users/deleteUser", userAdminController.deleteUser);

export default router;