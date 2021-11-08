const response = require('./../response')

const dbConnection = require('./../settings/dbConnection')

exports.getServices = (req, res) => {
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
    const sqlQuery = "INSERT INTO service (SerCatID, ServiceName, ServicePrice, ServiceDescription) " 
                    +"VALUES (" + req.query.SerCatID + ", '" 
                                + req.query.ServiceName + "', " 
                                + req.query.ServicePrice + ", '" 
                                + req.query.ServiceDescription + "')";
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
    const sqlQuery = "UPDATE service SET SerCatID = " + req.query.SerCatID 
                                   + ", ServiceName = '" + req.query.ServiceName 
                                   + "', ServicePrice = " + req.query.ServicePrice
                                   + ", ServiceDescription = '" + req.query.ServiceDescription 
                                   + "' WHERE ServiceID = " + req.query.ServiceID 
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
    const sqlQuery = "DELETE FROM service WHERE ServiceID = " + req.query.ServiceID
    dbConnection.query(sqlQuery, (error, results) => {
        if(error){
            console.log(error)
        }
        else{
            response.status(results, res)
        }
    })
}