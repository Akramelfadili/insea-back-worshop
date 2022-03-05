import app from './app.js'
import connectToMongo from './database/mongo.js'

const PORT = process.env.PORT || 4000

async function startServer() {
    await connectToMongo()
    app.listen(PORT, () => {
        console.log(`Server running http://localhost:${PORT}`)
    })
}
startServer()