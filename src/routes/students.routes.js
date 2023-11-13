import { Router } from "express";
import {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
    } from "../controllers/students.controller.js";



const studentsRountes = Router();

studentsRountes.get("/", getStudents);

studentsRountes.get("/:id", getStudentById);

studentsRountes.post("/", createStudent);

studentsRountes.put("/:id", updateStudent);

studentsRountes.delete("/:id", deleteStudent);

export default studentsRountes;





      