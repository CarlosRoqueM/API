//import mysql from "promise-mysql";
//import mysql from "mysql";
import mysql from "mysql2"
import config from "../config";

const connection = mysql.createConnection ({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});


connection.connect(function(err){
    if(!!err){
        console.log(err)
    }
    else{
        console.log('Connected')
    }
})

export  
    {connection}
;
