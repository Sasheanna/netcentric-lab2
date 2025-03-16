const express = require('express');
const router = express.Router();
const User = require('../models/user');

   /**
    * @swagger
    * tags:
    *   name: User
    *   description: User management operations
    */

   /**
    * @swagger
    * /user:
    *   get:
    *     tags: [User]
    *     summary: Retrieve a list of users
    *     responses:
    *       200:
    *         description: A list of users
    */

   /**
    * @swagger
    * /user/:id:
    *   get:
    *     tags: [User]
    *     summary: Retrieve a specific users
    *     responses:
    *       200:
    *         description: The specified user or, if there is no user with the given id, "null"
    *   delete:
    *     tags: [User]
    *     summary: Delete a specific user
    *     responses:
    *     200:
    *       description: The message 'user deleted'.
    *   put:
    *     tags: [User]
    *     summary: Update a specific user
    *     responses:
    *     200:
    *       description: The full user information after the update
    */
   
   /**
    * @swagger
    * /user:
    *   post:
    *     tags: [User]
    *     summary: Create a new user
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/User'
    *     responses:
    *       201:
    *         description: User created
   */
  
  /**
   * @swagger
   * components:
   *   schemas:
   *     User:
   *       type: object
   *       properties:
   *         FirstName:
   *           type: string
   *           description: The user's first name
   *         LastName:
   *           type: string
   *           description: The user's last name
   *         Username:
   *           type: string
   *           description: The user's login username
   *         Password:
   *           type: string
   *           description: The user's login password
   *         DOB:
   *           type: date
   *           description: The user's date of birth
   *         OrderHistory:
   *           type: array of ObjectIDs
   *           description: The user's order history (empty upon user creation)
   */

// Create a new user
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    // simulate a delay in creating a new user before sending back a response (res.status(201).json(newUser) is in charge of sending back the response)
    setTimeout(function(){res.status(201).json(newUser);}, 6000)
    
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/:id', async (req, res) => {
  try{
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
})

// Update a user
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a user
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;