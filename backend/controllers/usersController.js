const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getUsers = async (req, res) => {
  const { name, email, state, yearOfBirth, sort, order } = req.query;

  // Фильтрация
  const where = {};
  if (name) where.name = { contains: name, mode: 'insensitive' };
  if (email) where.email = { contains: email, mode: 'insensitive' };
  if (state) where.state = { contains: state, mode: 'insensitive' };
  if (yearOfBirth) where.yearOfBirth = Number(yearOfBirth);

  // Сортировка
  let orderBy = {};
  if (sort) {
    orderBy[sort] = order === 'desc' ? 'desc' : 'asc';
  }

  try {
    const users = await prisma.user.findMany({
      where,
      orderBy: Object.keys(orderBy).length ? orderBy : undefined
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.delete({ where: { id: Number(id) } });
    res.json({ message: "User deleted", user });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Unable to delete user" });
  }
};
