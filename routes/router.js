import express from 'express';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import Jimp from 'jimp';

const router = express.Router();
const __dirname = import.meta.dirname;

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/cargar', async (req, res) => {
    const imgName = `img${uuidv4().slice(0,6)}.jpg`;
    const { img } = req.query;
    const imgJimp = await Jimp.read(img);
    await imgJimp
        .resize(300, Jimp.AUTO)
        .grayscale()
            .writeAsync(`assets/img/${imgName}`);
    res.sendFile(path.join(__dirname, `../assets/img/${imgName}`));
});

export default router;