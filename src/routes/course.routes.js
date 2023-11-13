import { Router } from "express";
import {
    getcourses,
    getcourseById,
    createcourse,
    updatecourse,
    deletecourse,
    } from "../controllers/course.controller.js";

    const courseRountes = Router();

    courseRountes.get("/", getcourses);

    courseRountes.get("/:id", getcourseById);

    courseRountes.post("/", createcourse);

    courseRountes.put("/:id", updatecourse);

    courseRountes.delete("/:id", deletecourse);

    export default courseRountes;
    
