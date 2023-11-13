export const getStudents = (req, res) => {
    return res.status(200).send({
        mensagem: "Get all students",
    });
    }
export const getStudentById = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({
        mensagem: `Get student with id ${id}`,
    });
    }
export const createStudent = (req, res) => {
    const {name, email, age} = req.body;

    if (age > 18){
        return res.status(400).send({
            message: "age must be greater than 18"

        });
    }
else{
    return res.status(200).send({
        mensagem: `Create a student with name ${name} idade ${age} email ${email}`,
    });
}
}

export const updateStudent = (req, res) => {
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

export const deleteStudent = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({
        mensagem: `Delete student with id ${id}`,
    });
    }
    