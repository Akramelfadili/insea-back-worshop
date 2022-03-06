import { getAndVerifyJWT } from '../jwt.js'

const applyAuthMiddleware = ({ app }) =>
    app.use((req, res, next) => {
        try {
            const payload = getAndVerifyJWT(req)
            console.log(payload)
            req.user = payload?.user
            next()
        } catch (e) {
            return res.status(401).send({ message: 'Invalid or Expired token please login again' })
        }
    })

export default applyAuthMiddleware