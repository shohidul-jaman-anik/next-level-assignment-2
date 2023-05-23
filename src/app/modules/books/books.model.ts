import mongoose, { model } from "mongoose";
import { IBooks } from "./books.interface";

const booksSchema = new mongoose.Schema<IBooks>({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  author: {
    type: [String],
    required: [true, "Author is required"],
  },
  genre: {
    type: String,
    required: [true, "Genre is required"],
  },
  publicationYear: {
    type: Number,
    required: [true, "Please provide publication year"],
  },
  publisher: {
    type: String,
    required: [true, "Please provide publisher name"],
  },
  reviews: {
    type: [
      {
        user: {
          type: String,
          required: [true, "Review user is required"],
        },
        comment: {
          type: String,
          required: [true, "Review comment is required"],
        },
      },
    ],
    required: [true, "Reviews are required"],
  },
  rating: {
    type: Number,
    required: [true, "Please provide ratings"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
});

const BooksModel = model<IBooks>("Books", booksSchema);
export default BooksModel;
