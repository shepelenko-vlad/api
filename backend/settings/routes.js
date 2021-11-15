module.exports = (app) => {
    const indexController = require('./../Controllers/IndexController')
    const authorizationController = require('./../Controllers/AuthorizationController')
    const usersController = require('./../Controllers/UsersController')
    const clientsController = require('./../Controllers/ClientsController')
    const petsController = require('./../Controllers/PetsController')
    const personalController = require('./../Controllers/PersonalController')
    const productController = require('./../Controllers/ProductController')
    const serviceController = require('./../Controllers/ServicesController')
    const supplierController = require('./../Controllers/SuppliersController')
    const filesController = require('./../Controllers/FilesController')
    const exportController = require('./../Controllers/exportController')
    //Index Controller
    app.get('/',indexController.index)

    //Authorization Controller
    app.post('/authorization', authorizationController.getlogin)

    //Users Controller
    app.get('/users', usersController.getUsers)
    app.post('/users/add', usersController.insertUser)
    app.put('/users/update', usersController.updateUser)
    app.delete('/users/delete/:UserID', usersController.deleteUser)

    //Clients Controller
    app.get('/clients', clientsController.getClients)
    app.post('/clients/add', clientsController.insertClient)
    app.put('/clients/update', clientsController.updateClient)
    app.delete('/clients/delete', clientsController.deleteClient)

    //Pets Controller
    app.get('/pets', petsController.getPets)
    app.post('/pets/add', petsController.insertClientPet)
    app.put('/pets/update', petsController.updateClientPet)
    app.delete('/pets/delete', petsController.deleteClientPet)

    //Personal Controller 
    app.get('/personal', personalController.getPersonal)
    app.post('/personal/add', personalController.insertPersonal)
    app.put('/personal/update', personalController.updatePersonal)
    app.delete('/personal/delete', personalController.deletePersonal)

    //Products Controller
    app.get('/products', productController.getProducts)
    app.post('/products/add', productController.insertProduct)
    app.put('/products/update', productController.updateProduct)
    app.delete('/products/delete', productController.deleteProduct)

    //Services Controller
    app.get('/services', serviceController.getServices)
    app.post('/services/add', serviceController.insertService)
    app.put('/services/update', serviceController.updateService)
    app.delete('/services/delete', serviceController.deleteService)

    //Suppliers Controller
    app.get('/suppliers', supplierController.getSuppliers)
    app.post('/suppliers/add', supplierController.insertSupplier)
    app.put('/suppliers/update', supplierController.updateSupplier)
    app.delete('/suppliers/delete', supplierController.deleteSupplier)

    //Files Controller
    app.get('/getDocuments', filesController.getFiles)
    app.post('/upload', filesController.uploadFile)

    //Export Controller
    app.get('/export', exportController.exportExcel)
}