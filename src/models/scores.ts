import { Schema, model, Types } from "mongoose";

const scoreSchema = new Schema({
        student_id: { type: Types.ObjectId, required: true },
        scores: [
                { 
                        subject: { type: String, required: true },
                        score: { type: Number, required: true },
                        status: { type: String, required: true }
                }
        ],
        created_on: { type: Date, default: Date.now(), required: true },
        modified_on: { type: Date, required: true }
})

export const scores = model('scores', scoreSchema)
