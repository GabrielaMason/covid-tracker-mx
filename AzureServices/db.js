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
        return
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
            const resEstados = await sql.query("" +
                "SELECT estado.nombre, covid_info.fecha, covid_info.nuevos_casos, covid_info.nuevas_muertes, estado.id FROM estado \n" +
                "INNER JOIN covid_info\n" +
                "ON covid_info.estado_id = estado.id ")


            //Filtramos los datos para agruparlos por estado
            const DATA = await resEstados.recordset.reduce(function (r, a) {
                r[a.nombre] = r[a.nombre] || [];
                r[a.nombre].push(a);
                return r;
            }, Object.create(null));

            //Buscamos en la base de datos la informacion de mexico pais
            const resPais = await sql.query("SELECT covid_info.fecha, SUM(covid_info.nuevos_casos) as casos, SUM(covid_info.nuevas_muertes) as muertes FROM estado \n" +
                "INNER JOIN covid_info\n" +
                "ON covid_info.estado_id = estado.id \n" +
                "GROUP By covid_info.fecha\n" +
                "ORDER BY  covid_info.fecha ")


            DATA["MEXICO PAIS"] = resPais.recordset;







            return DATA;

        } catch (err) {
            console.log(err)
        }



}



fetchData().then((r) => {
    for(let key in r){
        console.log(key, r[key][0])
    }

}).catch((e) => {
    console.log(e)
})



