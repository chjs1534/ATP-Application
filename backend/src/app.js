import express from 'express'
import playerRoutes from './routes/playerRoutes.js'
import rankingRoutes from './routes/rankingRoutes.js'
import cors from 'cors'

const app = express()
const port = 8080

app.use(cors())
app.use(express.json());

app.use('/player', playerRoutes)
app.use('/rankings', rankingRoutes)

app.listen(port, () => {
  	console.log(`Example app listening on port ${port}`)
})