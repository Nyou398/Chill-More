require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db.js");
const errorHandler = require("./middleware/error.js");

//
const app = express();
connectDB();
app.use(express.json());

// Connections aux routes :
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));


// traitement des erreurs (Middleware) :
app.use(errorHandler);

//Le port du serveur
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
    console.log(`Sever running on port ${PORT}`)
);

//permet de mieux lire les erreur dans le terminal
process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err.message}`);
    server.close(() => process.exit(1));
});



// require("dotenv").config({ path: "./config.env" });
// const express = require("express");
// const app = express();
// const connectDB = require("./config/db");
// const errorHandler = require("./middleware/error");

// connectDB();
// app.use(express.json());

// app.get("/", (req, res, next) => {
//     res.send("Api running");
// });

// // Connecting Routes
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/private", require("./routes/private"));

// // Error Handler Middleware
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;

// const server = app.listen(PORT, () =>
//     console.log(`Sever running on port ${PORT}`)
// );

// process.on("unhandledRejection", (err, promise) => {
//     console.log(`Logged Error: ${err.message}`);
//     server.close(() => process.exit(1));
// });