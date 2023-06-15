const sqlite3 = require('sqlite3').verbose();
// import sqlite3 from ('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');
db.serialize(() => {
    db.run("CREATE TABLE parameters(qtd_eventos INT, ip TEXT, porta TEXT, endpoint TEXT)");

});

function insertParameters(table, qtd_eventos, ip, porta, endpoint) {
    const query = `INSERT INTO ${table} values(${qtd_eventos}, "${ip}", "${porta}", "${endpoint}")`
    console.log(query)
    const alaolao = db.run (query)
    console.log(alaolao)

}
async function selectParameters_all() {
    let query =`SELECT * FROM parameters`
        return new Promise(function(resolve,reject){
            db.all(query, function(err,rows){
               if(err){return reject(err);}
               resolve(rows);
             });
        });
    }

async function selectParameters_ip(ip){
    let query = `SELECT ip FROM parameters`
    return new Promise(function(resolve,reject){
        db.all(query, function(err,rows){
           if(err){return reject(err);}
           resolve(rows);
         });
    });
}

function updateParameters(table, qtd_eventos, ip, porta, endpoint) {
    let query = `INSERT INTO ${table} values(${qtd_eventos}, "${ip}", "${porta}", "${endpoint}")`
    console.log(query)
    const uptando = db.run (query)
    console.log(uptando)

}
function deleteParameters(table, qtd_eventos, ip, porta, endpoint) {
    let query =`INSERT INTO ${table} values(${qtd_eventos}, "${ip}", "${porta}", "${endpoint}")`
    console.log(query)
    const deletando = db.run (query)
    console.log(deletando)

}

 
module.exports = {insertParameters, selectParameters_ip, selectParameters_all, updateParameters, deleteParameters }