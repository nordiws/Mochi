import express from "express";
import db from "../controller/DB.js";
const router = express.Router();
import materials from "../controller/ApiMaterials.js";
import ApiSchools from "../controller/ApiSchools.js";
import guardian from "../model/form/Guardian.js";
import school from "../model/form/School.js";
import student from "../model/form/Student.js";


// View Model index route (frontend)
router.get('/', async (req, res, send) => {
  try {
    const statesData = await ApiSchools.statesData();
    res.render('index', {
      title: "Mochi",
      version: "1.0.0",
      states: statesData,
    });
  } catch (err) {
    res.status(400).json(err)
  }
})

router.get('/escolas', (req, res) => {
  res.render('schools', {title: "Escolas"});
})

router.get('/alunos', (req, res) => {
  res.render('students', {title: "Alunos"});
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
    db.saveForm(req.body);
})

export default router;
