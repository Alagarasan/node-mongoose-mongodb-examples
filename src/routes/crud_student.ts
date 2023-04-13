import { Router } from "express";
import { students } from "../models/students";

const create = async (req: any, res: any) => {
        try {
                const newStudent = await new students({
                        name: req.body.name,
                        age: req.body.age,
                        grade: req.body.grade
                }).save()

                res.status(200).json(newStudent)
        } catch (error) {
                console.log(error)
                res.status(500).json('Internal service error')
        }
}

const read =async (req: any, res: any) => {
        try {
                const data = await students.find({})

                res.status(200).json(data)
        } catch (error) {
                console.log(error)
                res.status(500).json('Internal service error')
        }
}

const update = async (req: any, res: any) => {
        try {
                const updatedStudent = await students.updateOne(
                        { _id: req.body._id }, 
                        {$set: { name: req.body.name, age: req.body.age, grade: req.body.grade, modified_on: new Date() } }
                )

                res.status(200).json(updatedStudent)
        } catch (error) {
                console.log(error)
                res.status(500).json('Internal service error')
        }
}

const deleteStudent = async (req: any, res: any) => {
       try {
                const removeStudent = await students.deleteOne({_id: req.query._id})

                res.status(200).json(removeStudent)
       } catch (error) {
                console.log(error)
                res.status(500).json('Internal service error')
       } 
}

const router = Router()

router.post('/student/create', create)
router.get('/student/read', read)
router.put('/student/update', update)
router.delete('/student/delete', deleteStudent)

export default router
