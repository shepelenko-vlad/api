const response = require('./../response')

const dbConnection = require('./../settings/dbConnection')

exports.getSuppliers = (req, res) => {
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
    const sqlQuery = "INSERT INTO supplier (SupplierName, SupplierLOB, SupplierPhone) "
                   + "VALUES ('" + req.query.SupplierName + "', '" 
                                 + req.query.SupplierLOB + "', '" 
                                 + req.query.SupplierPhone + "')"
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
    const sqlQuery = "UPDATE supplier SET SupplierName = '" + req.query.SupplierName
                   + "', SupplierLOB = '" + req.query.SupplierLOB 
                   + "', SupplierPhone = '" + req.query.SupplierPhone
                   + "' WHERE SupplierID = " + req.query.SupplierID
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
    const sqlQuery = "DELETE FROM supplier WHERE SupplierID = " + req.query.SupplierID
    dbConnection.query(sqlQuery, (error, results) => {
        if(error){
            console.log(error)
        }
        else{
            response.status(results, res)
        }
    })
}