const express = require('express')
const router = express.Router()

const { customerServiceRequest, getCustomerServiceRequests, serviceHistory} = require('../controlllers/customerController')

const { appointmentController , getListAppointments } = require('../controlllers/appointmentController')

const { createInventory, getInventory } = require('../controlllers/inventoryController')
        
const auth = require('../middlewares/auth')

router.use(auth)
router.post('/requests', customerServiceRequest)
router.get('/requests', getCustomerServiceRequests)
router.post('/appointments', appointmentController)
router.get('/appointments', getListAppointments)
router.post('/inventory', createInventory)
router.get('/inventory', getInventory)
router.get('/history/:id', serviceHistory)




module.exports = router