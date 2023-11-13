import { Router } from "express";

const studentsRountes = Router();

studentsRountes.get("/", (req, res) => {
    return res.status(200).send({
        mensagem: "Get all students",
    });
    });
    studentsRountes.get("/:id", (req, res) => {
    const id = req.params.id;
    return res.status(200).send({
        mensagem: `Get student with id ${id}`,
    });
    });
    studentsRountes.post("/", (req, res) => {
        const {name, email, age} = req.body;

        if(!name || !email || !age) {
            return res.status(400).send({
                mensagem: "Dados inválidos",
            });
        }
    return res.status(200).send({
        mensagem: `Create a student with name ${name} idade ${age} email ${email}`,
    });
    });

    studentsRountes.put("/:id", (req, res) => {
    const { id } = req.params;
    const {name, email, age} = req.body;
    if(!name || !email || !age) {
        return res.status(400).send({
            mensagem: "Dados inválidos",
        });
    }
    return res.status(200).send({
        mensagem: `Update student with id ${id} with name ${name} idade ${age} email ${email}`,
    });
    }
    );
    export default studentsRountes;

