import express from 'express'
import playerRoutes from './routes/playerRoutes.js'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.static(path.join(__dirname, '../../frontend')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend', 'index.html'))
})

app.get('/noplayer', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend', 'noplayer.html'))
})

app.get('/player/:playerId', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend', 'player.html'))
})

app.use('/player', playerRoutes)

app.listen(port, () => {
  	console.log(`Example app listening on port ${port}`)
})