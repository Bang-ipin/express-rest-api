const mysql = require('mysql')

const db = async() => {
    const connection=  mysql.createConnection({
        host        : 'localhost',
        user        : 'root',
        password    : 'root',
        database    : 'blog'
    });

    await connection.connect(function(error){
        if(!error){
            console.log('Database connected successfully')
        }else{
            console.log(`Cannot Connect to the database!`,error)
            process.exit()
        }
    });
}

module.exports = db