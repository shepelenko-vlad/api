const response = require('./../response')

const dbConnection = require('./../settings/dbConnection')

exports.getPets = (req, res) => {
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
    const sqlQuery = "INSERT INTO clientpetinfo (ClientPetName, PetGenderID, ClientPetAge, PetBreedID, WeightID) "
                    +"VALUES ('" + req.query.ClientPetName + "', " 
                                 + req.query.PetGenderID + ", " 
                                 + req.query.ClientPetAge + ", " 
                                 + req.query.PetBreedID + ", " 
                                 + req.query.WeightID + ")"
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
    const sqlQuery = "UPDATE clientpetinfo SET ClientPetName = '"+ req.query.ClientPetName 
                   + "', PetGenderID = " + req.query.PetGenderID 
                   + ", ClientPetAge = " + req.query.ClientPetAge 
                   + ", PetBreedID = " + req.query.PetBreedID 
                   + ", WeightID = " + req.query.WeightID 
                   + " WHERE ClientPetID = " + req.query.ClientPetID + "";
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
    const sqlQuery = "DELETE FROM clientpetinfo WHERE ClientPetID = " + req.query.ClientPetID;
    dbConnection.query(sqlQuery, (error, results) => {
        if(error){
            console.log(error)
        }
        else {
            response.status(results, res)
        }
    })
}