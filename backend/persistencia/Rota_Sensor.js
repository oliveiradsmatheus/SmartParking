import { Router } from 'express';
import Controle_Sensor from "../controle/Controle_Sensor.js";

const sensorControle = new Controle_Sensor();
const rota = Router();

rota
.get("/", sensorControle.consultar)
.get("/:cod_rua", sensorControle.consultar)

export default rota;