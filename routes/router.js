import express from "express";
import db from "../controller/DB.js";
import materials from "../controller/ApiMaterials.js";
import guardian from "../model/form/Guardian.js";
import school from "../model/form/School.js";
import student from "../model/form/Student.js";

// Instanciando o roteador
const router = express.Router();

// View Model index route (frontend)
router.get('/', (req, res, send) => {
  res.render('index', {
    title: "Mochi",
    version: "1.0.0",
  });
})

// View Model pagina listagem de escolas
router.get('/escolas', async (req, res) => {
  try {
    const { id, city } = req.query;
    const studentData = await db.getCitiesWithStudents(id);
    console.log(studentData);
    res.render('schools', {
      title: "Mochi - Escolas",
      city_name: city,
      students: studentData,
    });
  } catch (error) {
    res.status(400).json(error)
  }
})

//View Model pagina listagem de alunos
router.get('/alunos/', async (req, res) => {
  try {
    const { id } = req.query;
    const studentData = await db.getAllStudentsBySchools(id);
    res.render('students', {
      title: "Mochi - Alunos",
      students: studentData
    });
  } catch (error) {
    res.status(400).json(err)
  }
})

// View model form submit route (front to back)
router.get('/cadastro', async (req, res) => {
  try {
    res.render('register', {
      materials: await materials.materialsData(),
      title: "Mochi - Cadastro",
      fields: [guardian, student, school]
    });
  } catch (error) {
    res.status(400).json(error)
  }
})

router.post('/cadastro', (req, res) => {
  console.log(req.body);
  db.saveForm(req.body);
})

// Rota para autocomplete
router.get('/cities', async (req, res, send) => {
  try {
    const citiesData = await db.getTotalCities();
    res.json({ citiesData });
  } catch (error) {
    res.status(400).json(error)
  }
})

export default router;
