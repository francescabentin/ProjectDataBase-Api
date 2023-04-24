// importacion de modulos
const mysql = require('mysql2/promise');
const cors = require('cors');
const express = require('express');

// configurar servidor
const app = express();
app.use(cors());

// limite de tamano de archivos
app.use(express.json({ limit: "150mb" }));
app.set("view engine", "ejs");

let connection;  // Aquí almacenaremos la conexión a la base de datos

mysql
    .createConnection({
        host: '127.0.0.1',
        database: 'freedb_ProyectoCanelo',
        user: 'root',
        password: 'Bartolo_12',
    })

    .then(conn => {
        connection = conn;
        connection
            .connect()
            .then(() => {
                console.log(`Conexión establecida con la base de datos (identificador=${connection.threadId})`);
            })
            .catch((err) => {
                console.error('Error de conexion: ' + err.stack);
            })
    })
    .catch((err) => {
        console.error('Error de configuración: ' + err.stack);
    })


// escuchar el servidor
const serverPort = process.env.PORT || 4000;
app.listen(serverPort, () => {
    console.log(`Example app listening on port ${serverPort}`);
});

app.get('/projects/all', (req, res) => {
    console.log('Pidiendo a la base de datos información de los users.');
    const sql = ("SELECT projects.idProjects,projects.name,projects.descripcion,projects.slogan,projects.repo,projects.demo,projects.technologies,autors.autor,autors.job,autors.photo FROM projects JOIN autors ON autors.idAutor = projects.fkAutors")
    connection
        .query(sql)
        .then(([results, fields]) => {
            res.json(results);
        })
        .catch((err) => {
            throw err;
        });
});

app.post('/projects/add', (req, res) => {
    const data = req.body;
    console.log("Esto es", data);
    if (data.name === '') {
        res.json({
            success: false,
            error: 'El campo nombre debe estar completo'
        })
    } else if (data.slogan === '') {
        res.json({
            success: false,
            error: 'El campo slogan debe estar completo'
        })
    } else if (data.demo === '') {
        res.json({
            success: false,
            error: 'Completa el campo con la url de tu demo'
        })
    } else if (data.repo === '') {
        res.json({
            success: false,
            error: 'Completa el campo con la url de tu repo'
        })
    } else if (data.technologies === '') {
        res.json({
            success: false,
            error: 'Completa las tecnologías del proyecto'
        })
    } else if (data.desc === '') {
        res.json({
            success: false,
            error: 'Añade una descripción del proyecto'
        })
    } else if (data.image === '') {
        res.json({
            success: false,
            error: 'Añade una imagen del proyecto'
        })
    } else if (data.photo === '') {
        res.json({
            success: false,
            error: 'Añade una foto del autor'
        })
    } else if (data.autor === '') {
        res.json({
            success: false,
            error: 'Completa el nombre del autor '
        })
    } else if (data.job === '') {
        res.json({
            success: false,
            error: 'Indica el trabajo del autor'
        })
    }

    else {

        let sqlAutor = "INSERT INTO autors (autor, job, photo) VALUES (?, ?, ?)";
        let valuesAutor = [data.autor, data.job, data.photo];

    connection
    .query(sqlAutor, valuesAutor)

    .then(([results, fields]) => {
        let sqlProject = "INSERT INTO projects (name, descripcion, slogan, repo, demo, technologies, image, fkAutors) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
        let valuesProject = [data.name, data.desc, data.slogan, data.repo, data.demo, data.technologies, data.image, results.insertId];
        console.log(results)
        connection
        .query(sqlProject, valuesProject)
        .then(([results, fields]) => {
            console.log(results)
            let response = {
                "success": true,
                "cardURL": `http://localhost:4000/projects/${results.insertId}`
            }
            res.json(response);
        })
       
        }).catch((err) => {
        throw err;
    });
    }
});

// Endpoint details

app.get("/projects/:projectID", (req, res) => { 
    const projectId = req.params.projectID;
    const sql = "SELECT * FROM projects, autors WHERE projects.fkAutors=autors.idAutor AND idProjects=?"
    
    connection
    .query(sql, [projectId])
    .then(([results, fields]) => {
        console.log(results);
        res.render("project_detail", results[0]);
    })
   .catch((err) => {
   throw err;
   });
   });

   
   //Servidor de estáticos ( Todo para ti LAU! )

app.use(express.static('./src/public-react'));
app.use(express.static('./src/public-css'));
app.use(express.static('./src/public-images'));

app.get('*', (req, res) => {
    res.send('Error 404');

    //const absolutePathToError404 = path.join(__dirname, '..web/public/index.html');

    //res.status(404).sendFile(absolutePathToError404);
})