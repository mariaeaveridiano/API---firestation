const { PROTOCOL } = require('sqlite3');

const sqlite3 = require('sqlite3').verbose();
// import sqlite3 from ('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');
db.serialize(() => {
    db.run("CREATE TABLE parameters(qnt_eventos INT, ip TEXT, porta TEXT, endpoint TEXT)");

});

function insertParameters(table, qnt_eventos, ip, porta, endpoint) {
    const query = `INSERT INTO ${table} values("${qnt_eventos}", "${ip}", "${porta}", "${endpoint}")`
    console.log(query)
    const inserindo = db.run (query)
    console.log(inserindo)

}
async function selectParameters_all() {
    const query =`SELECT * FROM parameters`
        return new Promise(function(resolve,reject){
            db.all(query, function(err,rows){
               if(err){return reject(err);}
               resolve(rows);
             });
        });
    }

async function selectParameters_ip(ip){
    const query = `SELECT * FROM parameters WHERE ip="${ip}"`
    return new Promise(function(resolve,reject){
        db.all(query, function(err,rows){
           if(err){return reject(err);}
           resolve(rows);
         });
    });
}

function updateParameters(qnt_eventos, ip, porta, endpoint) {
    console.log(qnt_eventos)
    console.log(ip)
    console.log(porta)
    console.log(endpoint)
    let query = `UPDATE parameters SET porta = ${porta}, qnt_eventos =${qnt_eventos}, endpoint = "${endpoint}" WHERE ip = "${ip}"`
    return new Promise(function(resolve,reject){
    db.all(query, function(err,rows){
        if(err){return reject(err);}
        resolve(rows);
    });
      });
}

function deleteParameters(ip) {
    let query = `DELETE FROM parameters WHERE ip ="${ip}"`
    console.log(query)
    const deletando = db.run (query)
    console.log(deletando)
}
 
module.exports = {insertParameters, selectParameters_ip, selectParameters_all,updateParameters, deleteParameters }