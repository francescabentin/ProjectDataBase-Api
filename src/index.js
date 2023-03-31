// importacion de modulos
const mysql = require('mysql2/promise');
const cors = require('cors');
const express = require('express');
// configurar servidor
const app = express();
app.use(cors());

// limite de tamano de archivos
app.use(express.json({ limit: "25mb" }));

let connection;  // Aquí almacenaremos la conexión a la base de datos

mysql
    .createConnection({
        host: 'sql.freedb.tech',
        database: 'freedb_ProyectoCanelo',
        user: 'freedb_EquipoPalique',
        password: 'W98Gbzz$w65$HYW',
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
const port = 4000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get('/projects/all', (req, res) => {
    console.log('Pidiendo a la base de datos información de los users.');
    const sql = ("SELECT projects.name,projects.descripcion,projects.slogan,projects.repo,projects.demo,projects.technologies,autors.autor,autors.job,autors.image FROM projects JOIN autors ON autors.idAutor = projects.fkAutors")
    connection
        .query(sql)
        .then(([results, fields]) => {
            console.log('Información recuperada:');
            results.forEach((result) => {
                console.log(result);
            });
            res.json(results);
        })
        .catch((err) => {
            throw err;
        });
});
