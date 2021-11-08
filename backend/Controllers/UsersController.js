const response = require('./../response')

const md5 = require('md5')

const crypto = require('crypto')

const dbConnection = require('./../settings/dbConnection')

exports.getUsers = (req, res) => {
    dbConnection.query('SELECT * FROM `users`', (error, row, fields) => {
        if(error){
            console.log(error);
        }
        else{
            response.status(row, res)
            console.log(row, res)
        }
    })
}

exports.insertUser = (req, res) => {
    var hashPass = crypto.createHash("md5").update(req.query.userPassword).digest("base64")
    const sqlQuery = "INSERT INTO users (PersonID, UserLogin, UserPassword) " 
                   + "VALUES (" + req.query.personID +", '" 
                                + req.query.userLogin + "', '" 
                                + hashPass + "')";
    dbConnection.query(sqlQuery, (error, results) => {
        if(error) {
            console.log(error);
        }
        else {
            response.status(results, res)
        }
    });
}

exports.updateUser = (req, res) => {
    var hashPass = crypto.createHash("md5").update(req.query.userPassword).digest("base64")
    const sqlQuery = "UPDATE users SET users.PersonID = " + req.query.PersonID 
                   + ", users.UserLogin = '" + req.query.UserLogin 
                   + "', users.UserPassword = '" + hashPass 
                   + "' WHERE users.UserID = " + req.query.UserID + "";                           
        
        dbConnection.query(sqlQuery, (error, results) => {
        if(error) {
            console.log(error);
        }
        else {
            response.status(results, res)
        }
    })
}

exports.deleteUser = (req, res) => {
    const sqlQuery = "DELETE FROM users WHERE UserID = " + req.query.UserID;
    dbConnection.query(sqlQuery, (error, results) => {
        if(error) {
            console.log(error)
        }
        else {
            response.status(results, res)
        }
    })
}