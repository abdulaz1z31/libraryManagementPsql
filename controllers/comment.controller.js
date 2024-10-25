export function addCommentToBook (req, res, next) {
    try {
        res.status(200).send("Success")
    } catch (error) {
        next(error)
    }
}

export function getAllCommentsOfBook (req, res, next) {
    try {
        res.status(200).send("Success")
    } catch (error) {
        next(error)
    }
}