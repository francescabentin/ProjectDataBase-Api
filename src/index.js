// importacion de modulos
const { Pool } = require('pg');
const cors = require('cors');
const express = require('express');

// configurar servidor
const app = express();
app.use(cors());

// limite de tamano de archivos
app.use(express.json({ limit: "150mb" }));
app.set("view engine", "ejs");

// escuchar el servidor
const serverPort = process.env.PORT || 4000;
app.listen(serverPort, () => {
    console.log(`Example app listening on port ${serverPort}`);
});

/*
async function api() {
    //fetch('')
    //.then(resp => resp.json())
    //.then(data => console.log(data))
    
    const resp = await fetch('');
    const data = await resp.json();
    console.log(data);
}
let connection;  // Aquí almacenaremos la conexión a la base de datos
*/

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
});

async function getConnection() {
    return pool;
/*
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
*/
}

app.get('/projects/all', async (req, res) => {
    console.log('Pidiendo a la base de datos información de los users.');
    let sql = ("SELECT projects.idProjects,projects.name,projects.descripcion,projects.slogan,projects.repo,projects.demo,projects.technologies,autors.autor,autors.job,autors.photo FROM projects JOIN autors ON autors.idAutor = projects.fkAutors")

    const connection = await getConnection();
    const { rows } = await connection.query(sql);
    res.json(rows);
});


app.post('/projects/add', async (req, res) => {
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

        let sqlAutor = "INSERT INTO autors (autor, job, photo) VALUES ($1, $2, $3) RETURNING idautor";
        let valuesAutor = [data.autor, data.job, data.photo];

        const connection = await getConnection();
        const results = await connection.query(sqlAutor, valuesAutor);
        console.log(results.rows[0]);

        let sqlProject = "INSERT INTO projects (name, descripcion, slogan, repo, demo, technologies, image, fkAutors) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING idprojects"
        let valuesProject = [data.name, data.desc, data.slogan, data.repo, data.demo, data.technologies, data.image, results.rows[0].idautor];

        const resultInsert = await connection.query(sqlProject, valuesProject);
            let response = {
                "success": true,
            "cardURL": `${process.env.BASE_URL || "http://localhost:4000"}/projects/${resultInsert.rows[0].idprojects}`
        };
        res.json(response);
    }
});


// Endpoint details

app.get("/projects/:projectID", async (req, res) => { 
    const projectId = req.params.projectID;
    const sql = "SELECT * FROM projects, autors WHERE projects.fkAutors=autors.idAutor AND idProjects=$1"
    
    const connection = await getConnection();
    const { rows } = await connection.query(sql, [projectId])
    res.render("project_detail", rows[0]);
   });
/*
DELETE moduleserver.delete('/api/projects/delete_all', async (req, res) => {
    const sql = 'DELETE FROM project';
    const connection = await getConnection();
    const [results] = await connection.query(sql);

    console.log(results);
    const sqlAutor = 'DELETE FROM autor';
    const [resultsDelete] = await connection.query(sqlAutor);

    res.json(resultsDelete);
    connection.end();
});

server.delete('/api/projects/delete_one/:idCard', async (req, res) => {
    let idCard = req.params.idCard;
    const sql = 'DELETE FROM project WHERE fkAutor = ?';
    const connection = await getConnection();
    const [results] = await connection.query(sql, [idCard]);

    console.log(results);
    const sqlAutor = 'DELETE FROM autor WHERE idAutor= ?';
    const [resultsDetele] = await connection.query(sqlAutor, [idCard]);

    res.json(resultsDetele);
    connection.end();
});
   */

//Servidor de estáticos ( Todo para ti LAU! )

app.use(express.static('./src/public-react'));
app.use(express.static('./src/public-css'));
app.use(express.static('./src/public-images'));

app.get('*', (req, res) => {
    res.send('Error 404');

    //const absolutePathToError404 = path.join(__dirname, '..web/public/index.html');
    //res.status(404).sendFile(absolutePathToError404);
})
