const express = require('express');
const user2Controller = require('../controllers/user2controller');
const router = express.Router();
router.post('/', user2Controller.createUser);
router.get('/', user2Controller.getUsers);
router.put('/:id', user2Controller.updateUser);
router.delete('/:id', user2Controller.deleteUser);

module.exports = router;