import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import router from './routes/router.js';

const app = express();
const port = process.env.PORT || 3000;


// Static files
// 1. Ruta raíz que devuelva un HTML con el formulario para el ingreso de la URL de la imagen a tratar.
app.use('/', router);
// 2. Los estilos definidos por un archivo CSS alojado en el servidor
app.use(express.static('assets'));

// Undefined route managament
app.get('*', (req, res) => {
    res.send('<center><h1>This page does not exist...👻</h1></center>');
});

// Express server
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});