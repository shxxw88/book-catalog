function BookCard({ title, author, image, link }) {
  
    return (
     <div className="book-card">
      <img src={image} alt={`Cover of ${title}`} />

    
      <div className="book-details">
        <div className="book-title">{title}</div>
         <div className="book-info">{author}</div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="book-link"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

export default BookCard;
