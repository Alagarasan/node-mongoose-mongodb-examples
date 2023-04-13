import { Schema, model } from "mongoose";

const studentSchema = new Schema({
        name: { type: String, required: true },
        age: { type: Number, required: true },
        grade: { type: String },
        created_on: { type: Date, default: Date.now(), required: true },
        modified_on: { type: Date, default: Date.now(), required: true }
})

export const students = model('students', studentSchema)
