import { Router } from "express";
import { DeleteCat, GetServCat, UpdateCategory, ViewserCat } from "../controllers/servcategory.controller.js";


const router = Router();

router.post("/add-sercat",ViewserCat)
router.get("/get-allcat",GetServCat)
router.post("/update-cat",UpdateCategory)
router.delete("/delete-cat",DeleteCat)

export default router