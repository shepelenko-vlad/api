const response = require('./../response')

const dbConnection = require('./../settings/dbConnection')

exports.getClients = (req, res) => {
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
    const sqlQuery = "INSERT INTO clients (ClientPetID, ClientFIO, ClientAdress, ClientPhone) " 
                   + "VALUES (" + req.query.ClientPetID + ", '" 
                                + req.query.ClientFIO + "', '" 
                                + req.query.ClientAdress + "', '" 
                                + req.query.ClientPhone + "')"
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
    const sqlQuery = "UPDATE clients SET ClientPetID = " + req.query.ClientPetID + ", ClientFIO = '" + req.query.ClientFIO + "', ClientAdress = '" + req.query.ClientAdress + "', ClientPhone = '" + req.query.ClientPhone + "' WHERE ClientID = " + req.query.ClientID + "";
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
    const sqlQuery = "DELETE FROM clients WHERE ClientID = " + req.query.ClientID;
    dbConnection.query(sqlQuery, (error, results) => {
        if(error) {
            console.log(error)
        }
        else {
            response.status(results, res)
        }
    })
}