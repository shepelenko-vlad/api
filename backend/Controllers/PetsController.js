const response = require('./../response')

const dbConnection = require('./../settings/dbConnection')
const setHeaders = require('./../settings/setHeaders')

exports.getPets = (req, res) => {
    setHeaders(res)
    dbConnection.query('SELECT * FROM clientpetinfo', (error, row, fields) => {
        if(error){
            console.log(error);
        }
        else{
            response.status(row, res)
            console.log(row, res)
        }
    })
}

exports.insertClientPet = (req, res) => {
    setHeaders(res)
    const sqlQuery = "INSERT INTO clientpetinfo (ClientPetName, PetGenderID, ClientPetAge, PetBreedID, WeightID) "
                    +"VALUES ('" + req.body.ClientPetName + "', " 
                                 + req.body.PetGenderID + ", " 
                                 + req.body.ClientPetAge + ", " 
                                 + req.body.PetBreedID + ", " 
                                 + req.body.WeightID + ")"
    dbConnection.query(sqlQuery, (error, results) => {
        if(error){
            console.log(error);
        }
        else{
            response.status(results, res)
        }
    });
}

exports.updateClientPet = (req, res) => {
    setHeaders(res)
    const sqlQuery = "UPDATE clientpetinfo SET ClientPetName = '"+ req.body.ClientPetName 
                   + "', PetGenderID = " + req.body.PetGenderID 
                   + ", ClientPetAge = " + req.body.ClientPetAge 
                   + ", PetBreedID = " + req.body.PetBreedID 
                   + ", WeightID = " + req.body.WeightID 
                   + " WHERE ClientPetID = " + req.body.ClientPetID + "";
    dbConnection.query(sqlQuery, (error, results) => {
        if(error) {
            console.log(error);
        }
        else{
            response.status(results, res)
        }
    })
}

exports.deleteClientPet = (req, res) => {
    setHeaders(res)
    const sqlQuery = "DELETE FROM clientpetinfo WHERE ClientPetID = " + req.body.ClientPetID;
    dbConnection.query(sqlQuery, (error, results) => {
        if(error){
            console.log(error)
        }
        else {
            response.status(results, res)
        }
    })
}