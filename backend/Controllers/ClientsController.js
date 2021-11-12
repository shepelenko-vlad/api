const response = require('./../response')

const dbConnection = require('./../settings/dbConnection')
const setHeaders = require('./../settings/setHeaders')

exports.getClients = (req, res) => {
    setHeaders(res)
    dbConnection.query('SELECT * FROM clients', (error, row, fields) => {
        if(error){
            console.log(error);
        }
        else {
            response.status(row, res)
            console.log(row, res)
        }
    })
}

exports.insertClient = (req, res) => {
    setHeaders(res)
    const sqlQuery = "INSERT INTO clients (ClientPetID, ClientFIO, ClientAdress, ClientPhone) " 
                   + "VALUES (" + req.body.ClientPetID + ", '" 
                                + req.body.ClientFIO + "', '" 
                                + req.body.ClientAdress + "', '" 
                                + req.body.ClientPhone + "')"
    dbConnection.query(sqlQuery, (error, results) => {
        if(error) {
            console.log(error);
        }
        else {
            response.status(results, res)
        }
    });
}

exports.updateClient = (req, res) => {
    setHeaders(res)
    const sqlQuery = "UPDATE clients SET ClientPetID = " + req.body.ClientPetID + 
                     ", ClientFIO = '" + req.body.ClientFIO + 
                     "', ClientAdress = '" + req.body.ClientAdress + 
                     "', ClientPhone = '" + req.body.ClientPhone + 
                     "' WHERE ClientID = " + req.body.ClientID + "";
    dbConnection.query(sqlQuery, (error, results) => {
        if(error) {
            console.log(error);
        }
        else {
            response.status(results, res)
        }
    })
}

exports.deleteClient = (req, res) => {
    setHeaders(res)
    const sqlQuery = "DELETE FROM clients WHERE ClientID = " + req.body.ClientID;
    dbConnection.query(sqlQuery, (error, results) => {
        if(error) {
            console.log(error)
        }
        else {
            response.status(results, res)
        }
    })
}