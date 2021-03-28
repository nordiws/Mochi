import express from "express";
import dbController from "../controller/DBController.js";
const router = express.Router();
import materials from "../controller/ApiMaterialsController.js";

// View Model index route (frontend)
router.get('/', (req, res, send) => {
    res.render('home/index', {
        title: "Mochi",
        version: "0.0.1",
        materials: [
            {
                title: "Caderno universitário capa dura",
                price: "R$ 9,90",
                image: "https://img.kalunga.com.br/fotosdeprodutos/139100d.jpg"
            },
            {
                title: "Caderno universitário capa dura 2",
                price: "R$ 19,90",
                image: "https://img.kalunga.com.br/fotosdeprodutos/139100d.jpg"
            },
            {
                title: "Caderno universitário capa dura 3",
                price: "R$ 29,90",
                image: "https://img.kalunga.com.br/fotosdeprodutos/139100d.jpg"
            }
        ]
    });
})

// View model form submit route (front to back)
router.post('/cadastro', (req, res) => {
    dbController.saveForm(req.body);
})


router.get('/cadastro', async (req, res) => {

  try {
      res.render('cadastro', {
          materials: await materials.materialsData(),
          title: "Mochi",
          version: "0.0.1"
      });
  } catch(err) {
     res.status(400).json(err)
  }
})


export default router;
