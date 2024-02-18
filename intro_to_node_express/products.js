import express from 'express';
const router = express.Router();

router.route('/products').get((req, res) => {
    res.status(200).send("This is the products page")
})

export default router;
