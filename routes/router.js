import express from "express";
import dbController from "../controller/DBController.js";
const router = express.Router();

// View Model index route (frontend)
router.get('/', (req, res, send) => {
    res.render('index', {
        title: "Mochi",
        version: "0.0.1"
    });
})

// View model form submit route (front to back)
router.post('/cadastro', (req, res) => {
    dbController.saveForm(req.body);
})

export default router;