import BooksModel from "./books.model"


export  const getBooksServices=async()=>{
    const books=await BooksModel.find()
    return books
}