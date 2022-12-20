const express = require('express')
const { getAllRoles, create, updateRole, deleteRole } = require('../controller/roleController')

const roleRoute = express.Router()

roleRoute.get('/getRole', getAllRoles)
roleRoute.post('/create', create)
roleRoute.put('/updateRole/:id', updateRole)
roleRoute.delete('/deleteRole/:id', deleteRole)

module.exports = roleRoute