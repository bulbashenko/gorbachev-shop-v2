const express = require("express");
const { register, login, verify } = require("../controllers/authController");
const { body } = require("express-validator");

const router = express.Router();

router.post(
  "/register",
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').notEmpty().withMessage('Password is required'),
    body('yearOfBirth').notEmpty().withMessage('YearOfBirth is required'),
    body('state').notEmpty().withMessage('State is required')
  ],
  register
);

router.post("/login", login);
router.get("/verify", verify);

module.exports = router;
