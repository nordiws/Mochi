import express from "express";
import dbController from "../controller/DBController.js";
const router = express.Router();
import materials from "../controller/ApiMaterialsController.js";
import ApiSchoolsController from "../controller/ApiSchoolsController.js";
import guardian from "../db_model/form/Guardian.js";
import school from "../db_model/form/School.js";
import student from "../db_model/form/Student.js";


// View Model index route (frontend)
router.get('/', async (req, res, send) => {
  try {
    const statesData = await ApiSchoolsController.statesData();
    res.render('index', {
      title: "Mochi",
      version: "1.0.0",
      states: statesData,
    });
  } catch (err) {
    res.status(400).json(err)
  }
})

// View model form submit route (front to back)
router.get('/cadastro', async (req, res) => {
  try {
    res.render('cadastro', {
      materials: await materials.materialsData(),
      title: "Mochi",
      version: "0.0.1",
      action: "/cadastro",
      fields: [guardian, student, school]
    });
  } catch (err) {
    res.status(400).json(err)
  }
})

router.post('/cadastro', (req, res) => {
    dbController.saveForm(req.body);
})

export default router;
