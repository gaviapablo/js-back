const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.route("/").get(userController.getAll).post(userController.create).delete(userController.deleteAll);

router.route("/:id").put(userController.update).get(userController.getOne).delete(userController.delete);

module.exports = router