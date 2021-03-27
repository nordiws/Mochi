import express from "express";
import { saveFrom } from "../controller/DBController.js";
const router = express.Router();

// View Model index route (frontend)
router.get('/', (req, res, send) => {
    res.render('teste', {
        title: "Mochi",
        version: "0.0.1"
    });
})

// View model form submit route (front to back)
router.post('/cadastro', (req, res) => {
    saveFrom(req.body);
})

export default router;