import express from "express";
import Product from "../controllers/product";
import grantAccess from "../middlewares/grantAccess";
import { verifyAccessToken } from "../helpers/jwt";
const router = express.Router();

router.post(
	"/",
	verifyAccessToken,
	grantAccess("createAny", "product"),
	Product.Create
);
router.get(
	"/:product_id",
	// verifyAccessToken,
	// grantAccess('readAny', 'product'),
	// cache.route(),
	Product.Get
);
// router.get('/', cache.route(), Product.GetList);
router.get("/", Product.GetList);
router.put("/:product_id", Product.Update);
router.delete("/:product_id", Product.Delete);

export default router;
