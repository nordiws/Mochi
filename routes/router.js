import express from "express";
const router = express.Router();

// API Router (backend)
router.get('/api/state', stateController);


// View Model Router (frontend)
router.get('/', (req, res, send) => {
    res.render('index', {
        title: "Mochi",
        version: "0.0.1"
    });
})

export default router;