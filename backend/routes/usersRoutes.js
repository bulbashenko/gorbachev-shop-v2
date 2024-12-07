const express = require("express");
const router = express.Router();
const { authenticate } = require("../middleware/authMiddleware");
const { getUsers, deleteUser } = require("../controllers/usersController");

// Получение списка пользователей с фильтрацией и сортировкой
router.get("/", authenticate, getUsers);

// Удаление пользователя по id
router.delete("/:id", authenticate, deleteUser);

module.exports = router;
