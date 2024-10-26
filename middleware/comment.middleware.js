export const validationComment = async (req, res, next) => {
    const comment =  req.body
    const {text, book_id} = comment

    if (!text || !book_id) {
        return res.status(400).send("Enter a all informations")
    }

    next()
}