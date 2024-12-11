const express = require("express");
const path = require("path");
const session = require("express-session");
const homeController = require("../controller/HomeController");
const app = express();


app.use(session({
    secret: 'mi-secreto',  // Cambia esto por una cadena secreta
    resave: false,
    saveUninitialized: true
}));

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de directorios estáticos
app.use(express.static('view'));
app.use(express.static('uploads'));
app.use(express.static('assets'));
app.use(express.static(path.join(__dirname, "view")));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'assets')));

// Cargar el controlador después de configurar express-session
app.use("/", homeController);

// Iniciar el servidor
const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
