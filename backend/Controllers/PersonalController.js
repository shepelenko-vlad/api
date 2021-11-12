const response = require('./../response')

const dbConnection = require('./../settings/dbConnection')
const setHeaders = require('./../settings/setHeaders')

exports.getPersonal = (req, res) => {
    setHeaders(res)
    dbConnection.query('SELECT * FROM personal', (error, row, fields) => {
        if(error){
            console.log(error);
        }
        else{
            response.status(row, res)
        }
    })
}

exports.insertPersonal = (req, res) => {
    setHeaders(res)
    const sqlQuery = "INSERT INTO personal (PositionID, PersonFIO, PersonExperience, PersonPhone, PersonBD) " 
                   + "VALUES (" + req.body.PositionID + ", '" 
                                + req.body.PersonFIO + "', " 
                                + req.body.PersonExperience + ", '" 
                                + req.body.PersonPhone + "', '" 
                                + req.body.PersonBD + "')";
    dbConnection.query(sqlQuery, (error, results) => {
        if(error){
            console.log(error);
        }
        else{
            response.status(results, res)
        }
    });
}

exports.updatePersonal = (req, res) => {
    setHeaders(res)
    const sqlQuery = "UPDATE personal SET PositionID = " + req.body.PositionID 
                   + ", PersonFIO = '" + req.body.PersonFIO 
                   + "', PersonExperience = " + req.body.PersonExperience 
                   + ", PersonPhone = '" + req.body.PersonPhone 
                   + "', PersonBD = '" + req.body.PersonBD 
                   +"' WHERE PersonID = " + req.body.PersonID;
    dbConnection.query(sqlQuery, (error, results) => {
        if(error){
            console.log(error);
        }
        else{
            response.status(results, res);
        }
    })  
}

exports.deletePersonal = (req, res) => {
    setHeaders(res)
    const sqlQuery = "DELETE FROM personal WHERE PersonID = " + req.body.PersonID;
    dbConnection.query(sqlQuery, (error, results) => {
        if(error) {
            console.log(error)
        }
        else {
            response.status(results, res)
        }
    })
}