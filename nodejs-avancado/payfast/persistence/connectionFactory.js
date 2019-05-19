var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'alura_nodejs',
        password: 'alura_nodejs',
        database: 'alura_nodejs'
    });
}

module.exports = () => {
    return createDBConnection;
}