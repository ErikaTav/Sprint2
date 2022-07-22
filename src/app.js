import express from "express";
import ControllerDicas from "./controller/controllerDicas.js";

const porta = 3000;

const app = express();
app.use(express.json)

app.listen(porta, ()=>{
    console.log(`servidor aberto na porta http://localhost:${porta}`);
})

ControllerDicas.ordem(app)