import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("Book to add:", title);
  };

  const editBook = () => {};

  const deleteBook = () => {};

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
