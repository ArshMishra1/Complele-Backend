import { validation } from "../utils/token -ulits.js"


export function Authorization(req, res, next) {

    const token = req.headers['authorization']

    if (token ===  validation) {

        req.user = { name: "Arsh", id: 1 }

        next()

    } else {
        res.status(401).send("Unauthorized")
    }
}
