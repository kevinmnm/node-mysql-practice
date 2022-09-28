const mysql = require('mysql');

const mysqlconfig = {
   host: '127.0.0.1',
   user: 'root',
   port: 3306,
}

const pool = mysql.createPool(mysqlconfig);

const promisify = require('util').promisify;

const queryPromisify = () => {
   return promisify(pool.query);
};

module.exports = pool;
module.exports.query = queryPromisify;