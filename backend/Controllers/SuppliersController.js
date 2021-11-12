const response = require('./../response')

const dbConnection = require('./../settings/dbConnection')
const setHeaders = require('./../settings/setHeaders')

exports.getSuppliers = (req, res) => {
    setHeaders(res)
    dbConnection.query("SELECT * FROM supplier", (error, row, fields) => {
        if(error){
            console.log(error)
        }
        else{
            response.status(row, res)
            console.log(row, res)
        }
    })
}

exports.insertSupplier = (req, res) => {
    setHeaders(res)
    const sqlQuery = "INSERT INTO supplier (SupplierName, SupplierLOB, SupplierPhone) "
                   + "VALUES ('" + req.body.SupplierName + "', '" 
                                 + req.body.SupplierLOB + "', '" 
                                 + req.body.SupplierPhone + "')"
    dbConnection.query(sqlQuery, (error, results) => {
        if(error){
            console.log(error)
        }
        else{
            response.status(results, res)
        }
    })
}

exports.updateSupplier = (req, res) => {
    setHeaders(res)
    const sqlQuery = "UPDATE supplier SET SupplierName = '" + req.body.SupplierName
                   + "', SupplierLOB = '" + req.body.SupplierLOB 
                   + "', SupplierPhone = '" + req.body.SupplierPhone
                   + "' WHERE SupplierID = " + req.body.SupplierID
    dbConnection.query(sqlQuery, (error, results) => {
        if(error){
            console.log(error)
        }
        else{
            response.status(results, res)
        }
    })
}

exports.deleteSupplier = (req, res) => {
    setHeaders(res)
    const sqlQuery = "DELETE FROM supplier WHERE SupplierID = " + req.body.SupplierID
    dbConnection.query(sqlQuery, (error, results) => {
        if(error){
            console.log(error)
        }
        else{
            response.status(results, res)
        }
    })
}