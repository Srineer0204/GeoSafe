const express = require("express");
const shipmentRoutes = require("./routes/shipmentsRoutes");
const usersRoutes = require("./routes/usersRoutes");
const app = express();

app.use(express.json());


app.use("/api/shipments", shipmentRoutes);
app.use("/api/users", usersRoutes);


const PORT = 5000;

app.get("/", (req,res) => {
    res.send("GeoSafe backend is running");
});

app.get("/api/health", (req,res) => {
    res.json({
        status: "ok",
        message: "GeoSafe API is healthy",
    });
});


app.use((err,req,res,next) => {
    if(err instanceof SyntaxError && err.status === 400 && "body" in err) {
        return res.status(400).json({
            message: "Invalid JSON format",
        });
    }
    next(err);
});

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});