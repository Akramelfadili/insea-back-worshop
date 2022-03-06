import { getUserByEmail, createUser } from '../../database/models/user.js'
import { generateJWT } from '../../jwt.js'

async function signup(req, res) {
    const { email, name, password } = req.body

    if (!email || !password) {
        return res.status(400).send({ message: 'Email,name and password are required' })
    }
    const userWithEmail = await getUserByEmail(email)

    if (userWithEmail) {
        return res.status(409).send({ message: 'User with this Email already exists' })

    }
    const newUser = await createUser({ email, name, password })

    const token = await generateJWT({ user: newUser })
    return res.status(201).send({ user: newUser, token })
}

export default signup