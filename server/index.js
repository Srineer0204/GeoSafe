const express = require("express");
const shipmentRoutes = require("./routes/shipmentsRoutes");

const app = express();

app.use(express.json());
app.use("/api/shipments", shipmentRoutes);
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

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});