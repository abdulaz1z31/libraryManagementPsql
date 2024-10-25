export function addNewUser (req, res, next) {
    try {
        res.status(200).send("Success")
    } catch (error) {
        next(error)
    }
}

export function loginIn (req, res, next) {
    try {
        res.status(200).send("Success")
    } catch (error) {
        next(error)
    }
}