const express = require("express");

const app = express();

app.use(express.json());


const students = [
    {id:1, name:"Parra", age: 27, isPaid: false, numeroIdentificacion: "123-112345-1"},
    {id:2, name:"Juan", age: 28, isPaid: false, numeroIdentificacion: "123-112345-2"},
    {id:3, name:"Santana", age: 24, isPaid: false, numeroIdentificacion: "123-112345-3"},
    {id:4, name:"Menendez", age: 29, isPaid: false, numeroIdentificacion: "123-112345-4"}
];


app.get("/", (req, res) => {
    res.send ("node js api")
});

app.get("/api/students", (req, res) => {
    res.send(students)
});

app.get("/api/students/:id", (req, res) => {
    const student = students.find (x=> x.id === parseInt(req.params.id));
    if(!student) return res.status(204).render(`No existe el estudiante: ${req. res}`)
    else res.send(student); 
});


app.post("/api/students", (req, res) => {
    const student = {
        id:students.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age),
        isPaid: req.body.isPaid,
        numeroIdentificacion: req.body.numeroIdentificacion
    };

    // TODO: create post validation, find the ID number exist
    students.push(student);

    res.status(201).render("Esta creado correctamente el nuevo estudiante");
});

app.delete("/api/students/:id", (req, res) => {
    const student = students.find((x) => x.id === parseInt (req.params.id));
    if (!student)
    {
        return res
           .status(404)
           .render(`No existe el estudiande: ${req.params.id} solicitado`);
      
    }
    const index = students.indexof(student);

    students.splice(index, 1)
    
    res.send(student);
});

    const port = process.env.port || 5000;
    
    app.listen(port, () => console.log(`Estoy arriba klk en el port: ${port} ...`))