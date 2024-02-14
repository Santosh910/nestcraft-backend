import { Router } from "express";
import { AddCategory, DeleteCategory, GetAllCat } from "../controllers/category.controller.js";
import { upload } from "../middlewares/multer.middleware.js";



const router = Router();

router.post("/add-cat",upload.single('image'),AddCategory)
router.get("/get-all",GetAllCat)
router.delete("/delete-item",DeleteCategory)

export default router