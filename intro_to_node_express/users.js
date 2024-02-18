import express from 'express';
import users from './data.js'
const router = express.Router();

router.route('/users').get((req, res) => {
    const userName = req.query.name
    const id = req.query.id
    const totalUsers = users.length

    for (let i = 0; i < totalUsers; i++) {
        if (users[i].name === userName || users[i].id === id) {
            res.status(200).json(users[i])
        } else {
            res.status(200).json(users)
        }
    }
});

export default router;