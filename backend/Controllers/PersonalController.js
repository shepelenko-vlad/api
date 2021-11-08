const response = require('./../response')

const dbConnection = require('./../settings/dbConnection')

exports.getPersonal = (req, res) => {
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
    const sqlQuery = "INSERT INTO personal (PositionID, PersonFIO, PersonExperience, PersonPhone, PersonBD) " 
                   + "VALUES (" + req.query.PositionID + ", '" 
                                + req.query.PersonFIO + "', " 
                                + req.query.PersonExperience + ", '" 
                                + req.query.PersonPhone + "', '" 
                                + req.query.PersonBD + "')";
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
    const sqlQuery = "UPDATE personal SET PositionID = " + req.query.PositionID 
                   + ", PersonFIO = '" + req.query.PersonFIO 
                   + "', PersonExperience = " + req.query.PersonExperience 
                   + ", PersonPhone = '" + req.query.PersonPhone 
                   + "', PersonBD = '" + req.query.PersonBD 
                   +"' WHERE PersonID = " + req.query.PersonID;
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
    const sqlQuery = "DELETE FROM personal WHERE PersonID = " + req.query.PersonID;
    dbConnection.query(sqlQuery, (error, results) => {
        if(error) {
            console.log(error)
        }
        else {
            response.status(results, res)
        }
    })
}