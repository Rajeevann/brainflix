import "./Comment.scss";

const Comment = (props) => {
  return (
    <li className="comments__item">
      <div className="comments__picture"></div>
      <div className="comments__info">
        <div className="comments__main">
          {/* Display the author of the comment */}
          <p className="comments__author"> {props.commentAuthor}</p>
          {/* Display the timestamp of the comment */}
          <p className="comments__timestamp">
            {new Date(props.commentDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </p>
        </div>
        {/* Display the content of the comment */}
        <p className="comments__opinion">{props.commentComment}</p>
      </div>
    </li>
  );
};

export default Comment;
