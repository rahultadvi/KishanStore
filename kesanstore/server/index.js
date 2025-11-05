import express from "express";
import cors from "cors";
const app = express();
import mongooseConnection from "./db/db.js";
import addFartylizer from "./Router/Fartilizer.routes.js"
import addOrder from "./Router/order.routes.js"
import addCropRoute from "./Router/Crop.routes.js";
const PORT = 3000;

mongooseConnection();

app.use(cors());
app.use(express.json());
app.use("/api/user",addFartylizer);
app.use("/api/order",addOrder);
app.use("/api/crops", addCropRoute);

app.listen(PORT, () => {
    console.log(`Surver is Running PORT ${PORT}`);
});
