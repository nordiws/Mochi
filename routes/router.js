import express from "express";
import db from "../controller/DB.js";
import materials from "../controller/ApiMaterials.js";
import guardian from "../model/form/Guardian.js";
import school from "../model/form/School.js";
import student from "../model/form/Student.js";
import ApiMaterials from "../controller/ApiMaterials.js";
import ApiSchools from "../controller/ApiSchools.js";

// Instanciando o roteador
const router = express.Router();

// View Model index route (frontend)
router.get('/', async (req, res, send) => {
  try {
    const [selectedSchools, totalSchools] = await db.getRandomSchools();
    res.render('index', {
      title: "Mochi",
      version: "1.0.0",
      schools: selectedSchools,
      total_std: totalSchools
    });
  } catch (error) {
    res.status(400).json(error)
  }
})

// View Model pagina listagem de escolas
router.get('/escolas', async (req, res) => {
  try {
    const { id, city } = req.query;
    const [selectedStudents, totalStudents] = await db.getCitiesWithStudents(id);
    const [selectedSchools, totalSchools] = await db.getRandomSchools();
    res.render('schools', {
      title: "Mochi - Escolas",
      c_id: id,
      c_name: city,
      students: selectedStudents,
      totalStudents: totalStudents,
      schools: selectedSchools,
      ttl_std: totalSchools
    });
  } catch (error) {
    res.status(400).json(error)
  }
})

//View Model pagina listagem de alunos
router.get('/alunos', async (req, res) => {
  try {
    const { id, city_id } = req.query;
    const [studentsData, schoolData] = await db.getAllStudentsBySchools(id, city_id);
    const materialsData = await materials.selectedMaterialsData(studentsData);
    res.render('students', {
      title: "Mochi - Alunos",
      school_id: id,
      city_id: city_id,
      students: studentsData,
      school: schoolData[0],
      materials: materialsData
    });
  } catch (error) {
    res.status(400).json(error)
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

router.post('/cadastro', async (req, res) => {
  var response = await db.saveForm(req.body);
  if (response) {
    res.status(200);
  }
  res.status(400);
})

// Rota para autocomplete
router.get('/cities', async (req, res, send) => {
  try {
    res.json({ citiesData });
  } catch (error) {
    res.status(400).json(error)
  }
})

router.get('/schools/:id', async (req, res, send) => {
  try {
    const { id } = req.params;
    const schoolsData = await ApiSchools.schoolsData(id);

    res.json({ schoolsData });

  } catch (error) {
    res.status(400).json(error)
  }
})

export default router;
