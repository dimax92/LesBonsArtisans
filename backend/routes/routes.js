import  express  from "express";
import { createProduct, readProduct, readOneProduct, updateProduct, deleteProduct } from "../controllers/controllers.js";
import verifyToken from "../middleware/verifyToken.js";
const router = express.Router();

router.post('/product', verifyToken, createProduct);

router.get('/product', readProduct);

router.get('/product/:id', readOneProduct);

router.put('/product/:id', verifyToken, updateProduct);

router.delete('/product/:id', verifyToken, deleteProduct);

router.get('/protected', verifyToken, (req, res) => {
    res.status(200).json({ message: 'Accès autorisé', user: req.user });
});

export default router;