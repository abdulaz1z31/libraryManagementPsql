import pool from "../database/database.js";
import { getByIdBook} from "../service/book.service.js";
import { checkIfIdExists, validationBookForUniq } from "../service/book.service.js";
export const validationBook = async (req, res, next) => {
  const { title, author, publication_date, genre } = req.body;

  if (!title || !author || !publication_date || !genre) {
    return res.status(409).end("Enter all informations");
  }

  const result = await pool.query(
    `
            select id from books 
            where title = $1 and author = $2 and publication_date = $3 and genre = $4
            `,
    [title, author, publication_date, genre]
  );
  if (result.rows.length > 0) {
    return res.status(409).end("Book already exsists");
  }

  next();
};



export const validationUpdateBook = async (req, res, next) => {
    const bookId = req.params.id
    const dataToUpdate = req.body
    
    
    const bookData = await getByIdBook(bookId)
    const { data } = bookData
    
    for(let key in dataToUpdate) {
        data[key] = dataToUpdate[key]
    }

    const checkUserId = await checkIfIdExists(data['user_id'])
   
    if (checkUserId) {
        return res.status(400).send("User not found with this user id")
    }

    
    const checkForBook = await validationBookForUniq(data)

    
    if (checkForBook) {
        return res.status(403).send("Update qilinganda dublicat bolib qoladi yangi narsa kiriting bu inglizchasini bilmadim ")
    } else {
        next()
    }

   

}








