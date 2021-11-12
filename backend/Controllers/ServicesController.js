const response = require('./../response')

const dbConnection = require('./../settings/dbConnection')
const setHeaders = require('./../settings/setHeaders')

exports.getServices = (req, res) => {
    setHeaders(res)
    dbConnection.query('SELECT * FROM service', (error, row, fields) => {
        if(error){
            console.log(error)
        }
        else {
            response.status(row, res)
            console.log(row, res)
        }
    })
}

exports.insertService = (req, res) => {
    setHeaders(res)
    const sqlQuery = "INSERT INTO service (SerCatID, ServiceName, ServicePrice, ServiceDescription) " 
                    +"VALUES (" + req.body.SerCatID + ", '" 
                                + req.body.ServiceName + "', " 
                                + req.body.ServicePrice + ", '" 
                                + req.body.ServiceDescription + "')";
    dbConnection.query(sqlQuery, (error, results) => {
        if(error){
            console.log(error)
        }
        else{
            response.status(results, res)
        }
    })
}

exports.updateService = (req, res) => {
    setHeaders(res)
    const sqlQuery = "UPDATE service SET SerCatID = " + req.body.SerCatID 
                                   + ", ServiceName = '" + req.body.ServiceName 
                                   + "', ServicePrice = " + req.body.ServicePrice
                                   + ", ServiceDescription = '" + req.body.ServiceDescription 
                                   + "' WHERE ServiceID = " + req.body.ServiceID 
    dbConnection.query(sqlQuery, (error, results) => {
        if(error){
            console.log(error)
        }
        else{
            response.status(results, res)
        }
    }) 
}

exports.deleteService = (req, res) => {
    setHeaders(res)
    const sqlQuery = "DELETE FROM service WHERE ServiceID = " + req.body.ServiceID
    dbConnection.query(sqlQuery, (error, results) => {
        if(error){
            console.log(error)
        }
        else{
            response.status(results, res)
        }
    })
}