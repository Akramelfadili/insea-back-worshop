import { Router } from 'express'
import signupController from '../controllers/auth/signup.js'

const router = Router()

router.post('/signup', signupController)

export default router