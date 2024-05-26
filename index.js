import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<center><h1>👋¡Bienvenido a la página de inicio!😁</h1></center>');
});





// Undefined route managament
app.get('*', (req, res) => {
    res.send('<center><h1>This page does not exist...👻</h1></center>');
});

// Express server
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});