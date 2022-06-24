import * as rtr from "express";
import * as authController from "./../controllers/auth.controller";
import * as userController from "./../controllers/user.controller";

const router = rtr.Router();

//auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

//user DB
router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.put("/:id", userController.updateUser);
router.patch("/:id", userController.deleteUser);
router.patch("/follow/:id", userController.follow);
router.patch("/unfollow/:id", userController.unfollow);

router.patch("/add-friend/:id/:idToFollow", userController.addFriend);
router.patch("/accept-friend/:id/:idToAccept", userController.acceptFriend);
router.patch(
  "/delete-request-friend/:id/:idToAccept",
  userController.deleteRequestFriend
);
router.patch("/remove-friend/:id", userController.follow);

export default router;
