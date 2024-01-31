const user2Model = require('../models/user2model');
async function createUser(req, res) {
  const { name, age, email } = req.body;

  if (!name || !age || !email) {
    return res.status(400).json({ error: 'Name, age, and email are required' });
  }

  try {
    const newUser = await user2Model.createUser({ name, age, email });
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating user' });
  }
}
async function getUsers(req, res) {
  try {
    const users = await user2Model.getUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching users' });
  }
}
async function updateUser(req, res) {
  const userId = req.params.id;
  const { name, age, email } = req.body;
  if (!name || !age || !email) {
    return res.status(400).json({ error: 'Name, age, and email are required' });
  }
  try {
    const updatedUser = await user2Model.updateUser(userId, { name, age, email });
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating user' });
  }
}
async function deleteUser(req, res) {
  const userId = req.params.id;
  try {
    const deletedUser = await user2Model.deleteUser(userId);
    res.json(deletedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting user' });
  }
}
module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};