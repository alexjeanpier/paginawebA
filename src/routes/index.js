import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.render('index', { title: 'Página de mi empresa' }));
router.get('/about', (req, res) => res.render('about', { title: 'Sobre nosotros' }));
router.get('/contact', (req, res) => res.render('contact', { title: 'Contáctanos' }));

export default router;
