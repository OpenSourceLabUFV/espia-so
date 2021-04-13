var mysql = require('mysql2')
var fs = require('fs')

const file = fs.readFileSync('../data/courses.json')

const data = JSON.parse(file)

courses = []
relations = []

for (c of data.course) {
    courses.push([c.id, c.name, '/cursos/' + c.id])
    for (disc of c.disciplines) {
        relations.push([disc[0], c.id, disc[1]])
    }
}

console.log(relations)

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mJjlmnu3uO/o",
    database: "espiaso"
})

const insertCourse = "INSERT INTO Course(ID, Name, Slug) VALUES ?"
const insertRelation = "INSERT INTO DiscCourse(Code, CourseID, Semester) VALUES ?"

con.connect(err => {
    if (err) throw err
    console.log("Connected")

    con.query(insertCourse, [courses], (err, result) => {
        if (err) throw err
        console.log("Number of Courses Inserted: " + result.affectedRows)
    })

    con.query(insertRelation, [relations], (err, result) => {
        if (err) throw err
        console.log("Number of Relations Inserted: " + result.affectedRows)
    })
})