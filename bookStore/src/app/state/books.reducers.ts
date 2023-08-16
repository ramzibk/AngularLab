import { createReducer, on } from "@ngrx/store";
import { Book } from "../book-list/books.model";
import { BooksApiActions } from "./books.actions";

export const initialState: Array<Book> = []

export const booksReducer = 
  createReducer(initialState, 
    on(BooksApiActions.retrievedBookList, (_state, {books}) => books)
  )