import express from "express";
const router = express.Router();

// View Model Router (frontend)
router.get('/', (req, res, send) => {
    res.render('teste', {
        title: "Mochi",
        version: "0.0.1"
    });
})
export default router;