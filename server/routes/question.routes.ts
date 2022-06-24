import * as rtr from "express";
import * as questionController from "../controllers/question.controller";
import multer from "multer";

const router = rtr.Router();

router.get("/", questionController.getAllQuestion);
router.post("/create", questionController.createQuestion);
router.put("/update/:id", questionController.updateQuestion);
router.get("/:id", questionController.questionInfo);
router.delete("/delete/:id", questionController.deleteQuestion);

export default router;