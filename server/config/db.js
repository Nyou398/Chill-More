const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        //39:42
        // useFindAndModify: false,
    });

    console.log("MongoDB Connected");
};

module.exports = connectDB;


// const connectDB = async () => {
//     await mongoose.connect(process.env.DATABASE_CONNECTION, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: true,
//     });

//     console.log("MongoDB Connected");
// };

// module.exports = connectDB;