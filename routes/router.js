import express from 'express';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import Jimp from 'jimp';

// 1. Ruta raíz que devuelva un HTML con el formulario para el ingreso de la URL de la imagen a tratar.
const router = express.Router();
const __dirname = import.meta.dirname;

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

// 3.1. El formulario debe redirigir a otra ruta del servidor que deberá procesar la imagen tomada por la URL enviada del formulario con el paquete Jimp.
router.get('/cargar', async (req, res) => {
    const { img } = req.query;
    const imgJimp = await Jimp.read(img);
    // 4. Imagen alterada almacenada con un nombre que incluya una porción de un UUID y con extensión “jpg”,
    const imgName = `img${uuidv4().slice(0,6)}.jpg`;
    // 3.2. La imagen procesada en escala de grises y redimensionada a unos 350px de ancho.
    await imgJimp
        .resize(350, Jimp.AUTO)
        .grayscale()
            .writeAsync(`assets/img/${imgName}`);
    res.sendFile(path.join(__dirname, `../assets/img/${imgName}`));
});

export default router;