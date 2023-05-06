import express from 'express'
import mongoose from 'mongoose'

import student from './routes/crud_student'
import score from './routes/crud_scores'

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/nodemongo')
.then(()=> console.log('Mongo is connected'))
.catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', student)
app.use('/api', score)

app.get('/api/test', (req, res) => {
	res.status(200).json('available')
})

app.listen(3000, () => { 
  	console.log('Service have kicked up...!')
})

