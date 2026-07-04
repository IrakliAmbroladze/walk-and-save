import express from "express";
import { getCategories } from "../controllers/categories.controller.js";
import { getOffers } from "../controllers/offers.controller.js";
import { getOffersById } from "../controllers/offers.controller.js";
import { getCafeDetails } from "../controllers/cafeDetails.controller.js";
import { getCafeDetailsById } from "../controllers/cafeDetails.controller.js";
import { getUserData } from "../controllers/userData.controller.js";
import { getUserDataById } from "../controllers/userData.controller.js";
import { getWallet} from "../controllers/wallet.controller.js";
import { getWalletById } from "../controllers/wallet.controller.js";
import { getcontactUs } from "../controllers/contactUs.controller.js";

const router = express.Router();


router.get("/categories", getCategories);
router.get("/offers", getOffers);
router.get("/offers/:id", getOffersById);
router.get("/cafe_details", getCafeDetails);
router.get("/cafe_details/:id", getCafeDetailsById);
router.get("/user_data", getUserData);
router.get("/user_data/:id", getUserDataById);
router.get("/wallet", getWallet);
router.get("/wallet/:id", getWalletById);
router.get("/contactUs", getcontactUs);


export default router;


