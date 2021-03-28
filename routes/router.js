import express from "express";
import dbController from "../controller/DBController.js";
import materials from "../controller/ApiMaterialsController.js";
import ApiSchoolsController from "../controller/ApiSchoolsController.js"

// Configuração do roteador
const router = express.Router();

// View Model index route (frontend)
router.get('/', async (req, res, send) => {
    try {
        const statesData = await ApiSchoolsController.statesData();
        res.render('home/index', {
            title: "Mochi",
            version: "1.0.0",
            states: statesData,
        });
    } catch (err) {
        res.status(400).json(err)
    }
})

// View model form submit route (front to back)
router.get('/cadastro', async (req, res, send) => {
    try {
        res.render('cadastro', {
            materials: await materials.materialsData(),
            title: "Mochi",
            version: "0.0.1"
        });
    } catch (err) {
        res.status(400).json(err)
    }
})

router.post('/cadastro', (req, res, send) => {
    dbController.saveForm(req.body);
})

export default router;