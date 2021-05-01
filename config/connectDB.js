const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("database connected");
    } catch (error) {
        console.log({ msg: "database is not connected", error });
    }
};
module.exports = connectDB;
