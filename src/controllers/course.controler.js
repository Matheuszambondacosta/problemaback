export const getCourse = (req, res) => {
    return res.status(200).send({
        mensagem: "Get all courses",
    });
    }

    export const getCourseById = (req, res) => {
        const { id } = req.params;
        return res.status(200).send({
            mensagem: `Get course with id ${id}`,
        });
        }

        export const createCourse = (req, res) => {
            const {name, description, modules} = req.body;
        
            if (modules > 18){
                return res.status(400).send({
                    message: "modules must be greater than 18"
        
                });
            }
        else{
            return res.status(200).send({
                mensagem: `Create a course with name ${name} description ${description} modules ${modules}`,
            });
        }
        }

        export const updateCourse = (req, res) => {
            const { id } = req.params;
            const {name, description, modules} = req.body;
            if(!name || !description || !modules) {
                return res.status(400).send({
                    mensagem: "Dados inválidos",
                });
            }
            return res.status(200).send({
                mensagem: `Update course with id ${id} with name ${name} description ${description} modules ${modules}`,
            });
            }

            export const deleteCourse = (req, res) => {
                const { id } = req.params;
                return res.status(200).send({
                    mensagem: `Delete course with id ${id}`,
                });
                }
                