import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BookListItem = ({ author, title }) => {
  return (
    <div>
      <p>
        <span>{title}</span> <i>written by</i> <span>{author}</span>
      </p>
      <button>
      <FontAwesomeIcon icon={faPenToSquare} />
      </button>
      <button>
      <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default BookListItem;
