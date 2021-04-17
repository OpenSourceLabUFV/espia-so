var mysql = require('mysql2');
var fs = require('fs');

const p = "../data/disciplines/"

const files = fs.readdirSync(p)

var discs = []
var relations = []

for (file of files) {
    const d = fs.readFileSync(p + file, 'utf-8')
    const f = JSON.parse(d)
    for (disc of f.disciplines) {
        discs.push([disc.code, disc.name, "/disciplinas/"+ disc.code.toLowerCase()])
        const path = "../disciplinas/" + disc.code
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path, err => {
                return
            })

            var template = `---
slug: "/disciplinas/${disc.code.toLowerCase()}"
title: "Teoria da Computação"
---

Opa, parece que não tem nada nessa página. Você pode contribuir com conteúdo clicando no botão abaixo.

<!-- Remova as setas do texto abaixo para escrever na página. Lembre também de excluir a linha acima -->

<!-- ## Visão Geral

## Ementa

## Conteúdos ->
`
            
            fs.writeFileSync(path + "/README.md", template, err => {
                if (err) throw err
            })
        }

        for (dependence of disc.dependencies) {
            relations.push([disc.code, dependence])
        }
    }
}

console.log(relations)

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mJjlmnu3uO/o",
    database: "espiaso"
})

const insertDiscipline = "INSERT INTO Discipline(Code, Name, Slug) VALUES ?"
const insertRelation = "INSERT INTO Relation(Code, Dependency) VALUES ?"

con.connect(err => {
    if (err) throw err
    console.log("Connected")

    con.query(insertDiscipline, [discs], (err, result) => {
        if (err) throw err
        console.log("Number of Disciplines Inserted: " + result.affectedRows)
    })

    con.query(insertRelation, [relations], (err, result) => {
        if (err) throw err
        console.log("Number of Relations Inserted: " + result.affectedRows)
    })
})