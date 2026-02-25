import express from 'express'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import healthRoutes from './routes/health.routes.js' 
import { errorMiddleware } from './middlewares/errorMiddleware.js'


const app = express()

app.use(express.json()) //  Express entenda JSON

app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/health', healthRoutes)

export default app
