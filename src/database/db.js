//importa o sqlite3 + verbose que é para mostrar mensagens no terminal
const sqlite3 = require("sqlite3").verbose();

//criar objeto que opera no db
const db = new sqlite3.Database("./src/database/database.db");


module.exports = db;


//realizando operações com o objeto de bancdo de dados: db

//db.serialize(() => {
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places(
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     const query = `
//         INSERT INTO places(
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `
//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//         "Papersides",
//         "Guilherme Gembala, Jardim América",
//         "Nº 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]

//     function afterInsertData(err) {
//         if (err)
//             return console.log(err);

//         console.log("Cadastrado com sucesso!")
//         console.log(this);
//     }

    //realiza o insert e chama a função de callback
    //db.run(query, values, afterInsertData)

    // db.run(`DELETE FROM places WHERE id = ?`, [3], function (err) {
    //     if (err)
    //         return console.log(err);

    //     console.log("Registro deletado com sucesso!")
    // })

    // db.all(`SELECT * FROM places`, function (err, rows) {
    //     if (err)
    //         return console.log(err);

    //     console.log("Registros:");
    //     console.log(rows);
    // })

    // const queryUpdate = `
    //     UPDATE places SET name = "Colectoria" WHERE id = ?;"
    // `
    // db.run(queryUpdate, [4], function(err) {
    //     if (err)
    //         return console.log(err);

    //     console.log("Atualizado com sucesso!")
    // })
//})