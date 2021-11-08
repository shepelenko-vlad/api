const response = require('./../response')

const dbConnection = require('./../settings/dbConnection')

exports.getProducts = (req, res) => {
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
    const sqlQuery = "INSERT INTO products (ProdCatID, ProductName, ProductAmount, ProductPrice, ProductDescription) " 
                    +"VALUES (" + req.query.ProdCatID + ", '" 
                                + req.query.ProductName + "', " 
                                + req.query.ProductAmount + ", " 
                                + req.query.ProductPrice + ", '" 
                                + req.query.ProductDescription + "')";
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
    const sqlQuery = "UPDATE products SET ProdCatID = " + req.query.ProdCatID 
                   + ", ProductName = '" + req.query.ProductName 
                   + "', ProductAmount = " + req.query.ProductAmount 
                   + ", ProductPrice = " + req.query.ProductPrice 
                   + ", ProductDescription = '" + req.query.ProductDescription 
                   +"' WHERE ProductID = " + req.query.ProductID;
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
    const sqlQuery = "DELETE FROM products WHERE ProductID = " + req.query.ProductID;
    dbConnection.query(sqlQuery, (error, results) => {
        if(error) {
            console.log(error)
        }
        else{
            response.status(results, res)
        }
    }) 
}