import dayjs from 'dayjs'
import jwt from 'jsonwebtoken'
import * as config from './config.js'

const { jwt: jwtConfig } = config


export async function generateJWT({
    expiration = jwtConfig.expiration,
    timeUnit = jwtConfig.timeUnit,
    secret = jwtConfig.secret,
}) {
    const payload = {
        exp: dayjs().add(expiration, timeUnit).unix(),
        k1: 'v1',
    }
    const token = jwt.sign(payload, secret)
    return token
}