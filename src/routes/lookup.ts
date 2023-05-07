import { Router } from "express";
import { students } from "../models/students";

const lookup = async (req: any, res: any) => {
        try {
                const data = await students.aggregate([
                        {
                                $lookup: {
                                        from: "scores",
                                        localField: "_id",
                                        foreignField: "student_id",
                                        as: "score_list"
                                }
                        }
                ])
                console.log(data);
                
                res.status(200).json(data)
        } catch (error) {
                console.error(error)
                res.status(500).json(error)
        }
}

const router = Router()

router.get('/lookup/data', lookup)

export default router
