import express from 'express'
import playerRoutes from './routes/playerRoutes.js'

const app = express()
const port = 3000

app.use('/player', playerRoutes)

app.listen(port, () => {
  	console.log(`Example app listening on port ${port}`)
})