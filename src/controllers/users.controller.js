let users = [
  { id: 1, name: 'Juan', age: 25 },
  { id: 2, name: 'Ana', age: 30 }
];

const getUsers = (req, res) => {
  res.status(200).json(users);
};

const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id == id);
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
  res.status(200).json(user);
};

const createUser = (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) return res.status(400).json({ error: 'Nombre y edad requeridos' });
  const newUser = { id: users.length + 1, name, age };
  users.push(newUser);
  res.status(201).json(newUser);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const user = users.find(u => u.id == id);
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
  user.name = name;
  user.age = age;
  res.status(200).json(user);
};

const patchUser = (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const user = users.find(u => u.id == id);
  if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
  Object.assign(user, updates);
  res.status(200).json(user);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  const userExists = users.some(u => u.id == id);
  if (!userExists) return res.status(404).json({ error: 'Usuario no encontrado' });
  users = users.filter(u => u.id != id);
  res.status(204).send();
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  deleteUser
};
