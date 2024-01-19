import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from '../../styles/NewBooks.module.css'

const NewBooks = () => {
  return (
    <div className={styles.newBooks}>
      <h2>Upload your Book!</h2>
      <form>
        <input type="text" name="" id="" placeholder="Title" required/>
        <input type="text" name="" id="" placeholder="Author" required/>
        <button type="submit">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
    </div>
  );
};

export default NewBooks;
