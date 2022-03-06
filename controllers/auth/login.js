import { getUserByEmail, comparePassword } from '../../database/models/user.js'
import { generateJWT } from '../../jwt.js'

async function login(req, res) {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).send({ message: 'Email and password are required' })
    }

    const userWithEmail = await getUserByEmail(email)

    if (!userWithEmail) {
        return res.status(401).send({ message: 'Wrong email or password' })
    }

    const isCorrectPassword = await comparePassword(password, userWithEmail.password)

    if (!isCorrectPassword) {
        return res.status(401).send({ message: 'Wrong email or password' })
    }

    const token = await generateJWT({ user: userWithEmail })

    return res.status(201).send({ user: userWithEmail, token })
}

export default login