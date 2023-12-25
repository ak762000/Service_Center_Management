//1. Create a New service appointment

/**
 * @swagger
 * /api/appointments:
 *   post:
 *     summary: Schedule an appointment
 *     description: Use this route to schedule a new appointment.
 *     tags:
 *       - Appointments
 *     security:
 *       - bearerAuth: []  # Use bearerAuth to specify that this endpoint requires a bearer token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               appointmentDate:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *               customer_Details:
 *                 type: object
 *                 properties:
 *                   customerName:
 *                     type: string
 *                   deviceDetails:
 *                     type: string
 *                   serviceDetails:
 *                     type: string
 *             required:
 *               - appointmentDate
 *               - status
 *               - customer_Details
 *     responses:
 *       200:
 *         description: Appointment scheduled successfully
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 customerId: 'customer_id'
 *                 staffId: 'staff_id'
 *                 email: 'staff@example.com'
 *                 appointmentDate: '2023-12-31T12:00:00Z'
 *                 status: 'Scheduled'
 *               message: 'Appointment Date Scheduled'
 *       401:
 *         description: Unauthorized, user not authenticated
 *         content:
 *           application/json:
 *             example:
 *               message: 'Unauthorized'
 */

//2. Get List of Appointments
/**
 * @swagger
 * /api/appointments:
 *   get:
 *     summary: Get list of appointments
 *     description: Use this route to retrieve the list of appointments.
 *     tags:
 *       - Appointments
 *     security:
 *       - bearerAuth: []  # Use bearerAuth to specify that this endpoint requires a bearer token
 *     responses:
 *       200:
 *         description: List of appointments retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 - customerId: 'customer_id_1'
 *                   staffId: 'staff_id_1'
 *                   email: 'staff@example.com'
 *                   appointmentDate: '2023-12-31T12:00:00Z'
 *                   status: 'Scheduled'
 *                 - customerId: 'customer_id_2'
 *                   staffId: 'staff_id_2'
 *                   email: 'staff@example.com'
 *                   appointmentDate: '2023-12-31T12:00:00Z'
 *                   status: 'Completed'
 *               count: 2
 *               message: 'Appointment list retrieved'
 *       404:
 *         description: No appointments found
 *         content:
 *           application/json:
 *             example:
 *               message: 'NO APPOINTMENTS FOUND'
 *       401:
 *         description: Unauthorized, user not authenticated
 *         content:
 *           application/json:
 *             example:
 *               message: 'Unauthorized'
 */

//3.Get the history based on the customer id 
/**
 * @swagger
 * /api/history/{id}:
 *   get:
 *     summary: Get service history for a customer
 *     description: Use this route to retrieve the service history for a specific customer.
 *     tags:
 *       - Service History
 *     security:
 *       - bearerAuth: []  # Use bearerAuth to specify that this endpoint requires a bearer token
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the customer for whom to retrieve the service history
 *     responses:
 *       200:
 *         description: Service history retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 - customerId: 'customer_id_1'
 *                   staffId: 'staff_id_1'
 *                   email: 'staff@example.com'
 *                   appointmentDate: '2023-12-31T12:00:00Z'
 *                   status: 'Scheduled'
 *                 - customerId: 'customer_id_2'
 *                   staffId: 'staff_id_2'
 *                   email: 'staff@example.com'
 *                   appointmentDate: '2023-12-31T12:00:00Z'
 *                   status: 'Completed'
 *               customer_details:
 *                 _id: 'customer_id'
 *                 customerName: 'Customer Name'
 *                 deviceDetails: 'Device Details'
 *                 serviceDetails: 'Service Details'
 *               message: 'History of the customer received!'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               message: 'Internal Server Error'
 *       401:
 *         description: Unauthorized, user not authenticated
 *         content:
 *           application/json:
 *             example:
 *               message: 'Unauthorized'
 */

//4. Update the inventory (restock or mark items as used)
/**
 * @swagger
 * /inventory:
 *   post:
 *     summary: Create or update inventory item
 *     description: Use this route to create a new inventory item or update an existing one.
 *     tags:
 *       - Inventory
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               itemName:
 *                 type: string
 *               quantity:
 *                 type: integer
 *               operation:
 *                 type: string
 *                 enum: [restock, use]
 *             required:
 *               - itemName
 *               - quantity
 *               - operation
 *     responses:
 *       200:
 *         description: Inventory item created or updated successfully
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 itemName: 'item_name'
 *                 quantity: 10
 *               message: 'Inventory updated!'
 *       201:
 *         description: New inventory item added
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 itemName: 'new_item_name'
 *                 quantity: 5
 *               message: 'New item added to the inventory!'
 *       401:
 *         description: Unauthorized, user not authenticated
 *         content:
 *           application/json:
 *             example:
 *               message: 'Unauthorized'
 */

//5. Get all inventories
/**
 * @swagger
 * /inventory:
 *   get:
 *     summary: Get list of inventories
 *     description: Use this route to retrieve the list of inventories.
 *     tags:
 *       - Inventory
 *     responses:
 *       200:
 *         description: List of inventories retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 - itemName: 'item_name_1'
 *                   quantity: 10
 *                 - itemName: 'item_name_2'
 *                   quantity: 5
 *               count: 2
 *               message: 'Inventories list retrieved'
 *       404:
 *         description: No inventories found
 *         content:
 *           application/json:
 *             example:
 *               message: 'No inventories found'
 *       401:
 *         description: Unauthorized, user not authenticated
 *         content:
 *           application/json:
 *             example:
 *               message: 'Unauthorized'
 */
