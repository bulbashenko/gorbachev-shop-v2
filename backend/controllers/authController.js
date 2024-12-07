const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const { validationResult } = require("express-validator");

const prisma = new PrismaClient();

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

// Регистрация пользователя
exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, yearOfBirth, state, email, password, phone, notes } = req.body;

  try {
    // Дополнительная проверка на тип данных
    if (!/^[A-Za-z]+$/.test(name)) {
      return res.status(400).json({ error: "Name must contain only letters" });
    }
    if (isNaN(yearOfBirth)) {
      return res.status(400).json({ error: "YearOfBirth must be a number" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        yearOfBirth: parseInt(yearOfBirth, 10),
        state,
        email,
        password: hashedPassword,
        phone,
        notes
      },
    });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "User with this email already exists or other error" });
  }
};

// Авторизация пользователя
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: "1h" });
    res.status(200).json({ token, userId: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Проверка токена
exports.verify = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    const decoded = jwt.verify(token, SECRET_KEY);
    res.status(200).json({ message: "Token is valid", userId: decoded.userId });
  } catch (error) {
    res.status(401).json({ error: "Invalid or expired token" });
  }
};
