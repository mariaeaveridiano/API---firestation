const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE parameters (qtd_eventos INT, ip TEXT, porta TEXT, endpoint TEXT)");

});
function InsertParameters(table, qtd_eventos, ip, porta, endpoint) {
    let query = `INSERT INTO ${table} values(${qtd_eventos}, ${ip}, ${porta}, ${endpoint})`;
    
}
function selectParameters(table, qtd_eventos, ip, porta, endpoint) {
    let query = `SELECT ${table} values(${qtd_eventos}, ${ip}, ${porta}, ${endpoint})`;
    
}
function updateParameters(table, qtd_eventos, ip, porta, endpoint) {
    let query = `INSERT INTO ${table} values(${qtd_eventos}, ${ip}, ${porta}, ${endpoint})`;
    
}

db.close();
const export = 