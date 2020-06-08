const express = require("express")
const server = express();

//banco de dados
const db = require("./database/db")

//configurar a pasta public
server.use(express.static("public"))

//habilita o uso do req.body
server.use(express.urlencoded({ extended: true }))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//Configurando o caminho da página inicial
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {

    console.log(req.query)

    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    //console.log(req.body)

    const query = `
        INSERT INTO places(
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err);
            return res.send("Houve um erro ao realizar o cadastro");

        }

        console.log("Cadastrado com sucesso!")
        console.log(this);

        return res.render("create-point.html", { saved: true })
    }

    db.run(query, values, afterInsertData)
})

server.get("/search-results", (req, res) => {

    const search = req.query.search;

    if (search == "") {
        return res.render("search-results.html", { total: 0 })
    }

    db.all(`SELECT * FROM places WHERE city like '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err);
        }
            
        const total = rows.length;
        return res.render("search-results.html", { places: rows, total })
    })
})

//iniciar o server
server.listen(3000);