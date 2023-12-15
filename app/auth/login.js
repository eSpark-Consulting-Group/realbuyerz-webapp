// pages/api/auth/login.js

import { serialize } from 'cookie' // `serialize` helps to set cookies into the browser in a Next.js application.

export default async function login(req, res) {
    await db.connectDB()
    const { method } = req
    const { email, password } = req.body

    switch (method) {
        case 'POST':
            let account

            try {
                account = await account.login(email, password)
            } catch (e) {
                const formattedError = accountErrorFormatter(e)
                res.status(401).json({ error: formattedError, message: e.message })
                break
            }
            
            const id = account.id
            const role = account.role
            const username = account.username

            // Authentication logic below.
            const token = createSessionToken({ id, username, role }) // these information are stored in the session token.
            const MAX_AGE = 24 * 60 * 60

            // Set a cookie
            res.setHeader(
                'Set-Cookie',
                serialize('session_token', token, {
                maxAge: MAX_AGE,
                path: '/',
                secure: process.env.NODE_ENV === 'production',
                httpOnly: true,
                })
            )
            res.status(200).json({
                error: false,
                message: `Welcome back, ${account.accountInformation.firstName}!`,
            })
            break
        default:
        res.status(405).json({ error: true, message: 'Method not allowed' })
            break
    }
}