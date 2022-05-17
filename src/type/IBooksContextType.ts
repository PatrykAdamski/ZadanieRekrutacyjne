import { IBook } from './IBook';

export interface IBooksContextType {
  books: IBook;
  setBooks: React.Dispatch<React.SetStateAction<IBook>>;
}
