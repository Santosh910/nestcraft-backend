import { Router } from "express";
import { DeleteCat, GetServCat, GetSingleData, UpdateCategory, ViewserCat } from "../controllers/servcategory.controller.js";


const router = Router();

router.post("/add-sercat",ViewserCat)
router.get("/get-allcat",GetServCat)
router.post("/update-cat",UpdateCategory)
router.delete("/delete-cat",DeleteCat)
router.get("/get-single",GetSingleData)

export default router