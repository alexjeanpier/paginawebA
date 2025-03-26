import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import router from './routes/index.js';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(join(__dirname, 'views'));

// Configuración de vistas y motor de plantillas
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware y rutas
app.use(router);
app.use(express.static(join(__dirname, 'public')));

// Iniciar el servidor
app.listen(3000, () => {console.log('El servidor está escuchando en el puerto 3000')});