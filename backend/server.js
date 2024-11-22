const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");

const connectDb = require("./config/connectDB");

dotenv.config();
connectDb();

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Hello endpoint
app.get('/api/v1/hello', (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello, the backend is working!",
  });
});

app.use("/api/v1/users", require("./routes/userRoute"));
app.use("/api/v1/transactions", require("./routes/transactionRoute"));

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



//port 
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  