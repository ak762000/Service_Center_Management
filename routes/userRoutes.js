const express = require('express')
const router = express.Router()
const {registerController,getUsers,loginController} = require('../controlllers/userController')



//To register a user
router.post('/register',registerController)

//To get all users
router.get('/getUsers', getUsers)

//To login a user
router.post('/login', loginController)


//Swagger for routes
//1.Register a user

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Use this route to register a new user.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *               - role
 *     responses:
 *       200:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 _id: 'user_id'
 *                 email: 'user@example.com'
 *                 role: 'user'
 *               message: 'User created successfully!'
 *       409:
 *         description: Email ID already registered
 *         content:
 *           application/json:
 *             example:
 *               message: 'Email ID already registered!'
 */

//2.Login user
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Log in a user
 *     description: Use this route to log in a user.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Logged in successfully
 *         content:
 *           application/json:
 *             example:
 *               accessToken: 'your-access-token'
 *               message: 'Logged In Successfully!'
 *       401:
 *         description: User not registered or password doesn't match
 *         content:
 *           application/json:
 *             examples:
 *               userNotRegistered:
 *                 value:
 *                   message: 'User not registered!'
 *               passwordNotMatch:
 *                 value:
 *                   message: "Password doesn't match"
 */


//3.Get all Users

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get list of users
 *     description: Use this route to retrieve the list of users.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: List of users retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 - _id: 'user_id_1'
 *                   email: 'user1@example.com'
 *                   role: 'user'
 *                 - _id: 'user_id_2'
 *                   email: 'user2@example.com'
 *                   role: 'admin'
 *               count: 2
 *               message: 'Users fetched successfully'
 *       404:
 *         description: No users found
 *         content:
 *           application/json:
 *             example:
 *               message: 'Users not fetched'
 *       401:
 *         description: Unauthorized, user not authenticated
 *         content:
 *           application/json:
 *             example:
 *               message: 'Unauthorized'
 */




module.exports = router