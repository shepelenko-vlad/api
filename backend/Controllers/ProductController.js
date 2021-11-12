const response = require('./../response')

const dbConnection = require('./../settings/dbConnection')
const setHeaders = require('./../settings/setHeaders')

exports.getProducts = (req, res) => {
    setHeaders(res)
    dbConnection.query('SELECT * FROM products', (error, row, fileds) => {
        if(error){
            console.log(error);
        }
        else {
            response.status(row, res)
        }
    })
}

exports.insertProduct = (req, res) => {
    setHeaders(res)
    const sqlQuery = "INSERT INTO products (ProdCatID, ProductName, ProductAmount, ProductPrice, ProductDescription) " 
                    +"VALUES (" + req.body.ProdCatID + ", '" 
                                + req.body.ProductName + "', " 
                                + req.body.ProductAmount + ", " 
                                + req.body.ProductPrice + ", '" 
                                + req.body.ProductDescription + "')";
    dbConnection.query(sqlQuery, (error, results) => {
        if(error){
            console.log(error);
        }
        else{
            response.status(results, res)
        }
    })
}

exports.updateProduct = (req, res) => {
    setHeaders(res)
    const sqlQuery = "UPDATE products SET ProdCatID = " + req.body.ProdCatID 
                   + ", ProductName = '" + req.body.ProductName 
                   + "', ProductAmount = " + req.body.ProductAmount 
                   + ", ProductPrice = " + req.body.ProductPrice 
                   + ", ProductDescription = '" + req.body.ProductDescription 
                   +"' WHERE ProductID = " + req.body.ProductID;
    dbConnection.query(sqlQuery, (error, results) => {
        if(error){
            console.log(error);
        }
        else {
            response.status(results, res)
        }
    })
}

exports.deleteProduct = (req, res) => {
    setHeaders(res)
    const sqlQuery = "DELETE FROM products WHERE ProductID = " + req.body.ProductID;
    dbConnection.query(sqlQuery, (error, results) => {
        if(error) {
            console.log(error)
        }
        else{
            response.status(results, res)
        }
    }) 
}