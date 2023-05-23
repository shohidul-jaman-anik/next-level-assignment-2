import { NextFunction, Request, Response } from "express";
import { getBooksServices } from "./books.services";

export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getBooksServices();
    res.status(200).json({
      status: "Success",
      message: "Successfully get the Books",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Couldn't get the books",
      error: error.message,
    });
  }
};
