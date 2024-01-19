import React, { useContext } from "react";
import styles from "../../styles/BooksList.module.css";
import { BookListContext } from "../../App";

const BooksList = () => {
  const { bookList } = useContext(BookListContext);
  return (
    <div className={styles.booksList}>
      <h2>Available Books for the Viewers</h2>
      <ul>
        {bookList.length > 0 ? (
          bookList.map(({ author, title }, i) => {
            return (
              <li key={i}>
                {" "}
                <p>
                  {title} written by {author}
                </p>{" "}
              </li>
            );
          })
        ) : (
          <h3>No Books Available at the Moment!</h3>
        )}
      </ul>
    </div>
  );
};

export default BooksList;
