import express from "express";
const router = express.Router();
import statesData from "../controller/stateController.js"

// View Model Router (frontend)
router.get('/', (req, res, send) => {
    res.render('teste', {
        title: "Mochi",
        version: "0.0.1"
    });
    statesData();
})
export default router;