import { Router } from "express";
import { scores } from "../models/scores";

const create = async (req: any, res: any) => {
        try {
                const newScore = await new scores({
                        student_id: req.body.student_id,
                        scores: req.body.scores,
                        modified_on: Date.now()
                }).save()

                res.status(200).json(newScore)
        } catch (error) {
                console.log(error)
                res.status(500).json(error)
        }
}

const read = async (req: any, res: any) => {
        try {
                const score = await scores.find({})

                res.status(200).json(score)
        } catch (error) {
                console.log(error)
                res.status(500).json(error)
        }
}

const update = async (req: any, res: any) => {
        try {
                const updatedScore = await scores.updateOne(
                        { _id: req.body. _id }, 
                        { $set: { scores: req.body.scores, modified_on: Date.now() } }
                )

                res.status(200).json(updatedScore)
        } catch (error) {
                console.log(error)
                res.status(500).json(error)    
        }
}

const deleteScore = async (req: any, res: any) => {
        try {
                const removeScore = await scores.deleteOne({ _id: req.query._id }) 

                res.status(200).json(removeScore)
        } catch (error) {
                console.log(error)
                res.status(500).json(error)    
        }
}

const router = Router()

router.post('/score/create', create)
router.get('/score/read', read)
router.put('/score/update', update)
router.delete('/score/delete', deleteScore)

export default router
