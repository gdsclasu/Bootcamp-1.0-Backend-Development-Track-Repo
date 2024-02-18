import express from 'express';
const router = express.Router();

router.route('/contact').get((req, res) => {
    res.statusCode = 200
    res.send("This is the contact page")
})

export default router;
