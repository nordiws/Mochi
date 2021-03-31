import express from "express";
import db from "../controller/DB.js";
import materials from "../controller/ApiMaterials.js";
import ApiSchools from "../controller/ApiSchools.js";
import guardian from "../model/form/Guardian.js";
import school from "../model/form/School.js";
import student from "../model/form/Student.js";

// Instanciando o roteador
const router = express.Router();

// View Model index route (frontend)
router.get('/', async (req, res, send) => {
  try {
    //const citiesData = await db.getTotalCities();
    res.render('index', {
      title: "Mochi",
      version: "1.0.0",
      //cities_list: citiesData,
    });
  } catch (err) {
    res.status(400).json(err)
  }
})

// View Model pagina listagem de escolas
router.get('/escolas', async (req, res) => {
  try {
    const schoolsData = await ApiSchools.schoolsData(req.body);
    res.render('schools', {
      title: "Mochi - Escolas",
      schools: schoolsData
    });
  } catch (error) {
    res.status(400).json(err)
  }
})

//View Model pagina listagem de alunos
router.get('/alunos', async (req, res) => {
  try {
    const studentData = await db.getAllStudentsByCity(req.body);
    res.render('students', {
      title: "Mochi - Alunos",
      students: studentData
    });
  } catch (error) {
    res.status(400).json(err)
  }
})

router.get('/alunos', (req, res) => {
  res.render('students', { title: "Alunos" });
})

// View model form submit route (front to back)
router.get('/cadastro', async (req, res) => {
  try {
    res.render('register', {
      materials: await materials.materialsData(),
      title: "Mochi - Cadastro",
      fields: [guardian, student, school]
    });
  } catch (err) {
    res.status(400).json(err)
  }
})

router.post('/cadastro', (req, res) => {
  console.log(req.body);
  //db.saveForm(req.body);
})



router.get('/teste-register', (req, res) => {
  res.render('teste-register', {
    title: "Mochi - Cadastro"
  })
})

// Rota para autocomplete
router.get('/cities', async (req, res, send) => {
  try {
    const citiesData = await db.getTotalCities();
    res.json({citiesData});
  } catch (err) {
    res.status(400).json(err)
  }
})

export default router;
