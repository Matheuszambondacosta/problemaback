import { Router } from "express";
import studentsRountes from "./students.routes.js";
import courseRountes from "./course.routes.js";


const rotas = Router();

rotas.use("/students", studentsRountes);
rotas.use("/course", courseRountes);



rotas.get("/", (req, res) => {
    return res.status(200).send({
        mensagem: "servidor rodando",
    });
    });
    

export default rotas;
