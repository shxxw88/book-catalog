import { useEffect, useState } from "react";
import BookCard from "./components/BookCard";
import NewButton from "./components/NewButton";
import "./App.css";

export default function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const isbns = ["9781936323999", "9781119641537"];

    (async () => {
      try {
        const results = await Promise.all(
          isbns.map(isbn =>
            fetch(`https://api.itbook.store/1.0/books/${isbn}`)
              .then(res => res.json())
          )
        );
        setBooks(results);
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    })();
  }, []);

  return (
    <>
      <header><h1>Book Catalog</h1></header>

      <div className="catalog">
        {books.map((book, i) => (
          <BookCard
            key={i}
            title={book.title}
            author={book.authors || "Unknown"}
            image={book.image}
            link={book.url}
          />
        ))}
        <NewButton onClick={() => alert()} />
      </div>
    </>
  );
}
