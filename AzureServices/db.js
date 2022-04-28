const sql = require('mssql');

var config = {
    "user": "adminbda", //default is sa
    "password": "Password$",
    "server": "bdacovid.database.windows.net", // for local machine
    "database": "bdacovid", // name of database
    "options": {
        "encrypt": true
    }
}

sql.connect(config, err => {
    if(err) {
        console.log(err);
    }
    console.log("Connection Successful !");

    new sql.Request().query('select 1 as number', (err, result) => {
        //handle err
        console.dir(result)
        // This example uses callbacks strategy for getting results.
    })

});

sql.on('error', err => {
    // ... error handler
    console.log("Sql database connection error " ,err);
})



const fetchData = async () => {

        try {
            // make sure that any items are correctly URL encoded in the connection string
            await sql.connect(config)
            const result = await sql.query("SELECT * FROM estado")
            return result.recordset
        } catch (err) {
            console.log(err)
        }

}



fetchData().then((r) => {
    console.log(r[0]);
}).catch((e) => {
    console.log(e)
})



