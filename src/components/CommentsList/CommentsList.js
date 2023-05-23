import "./CommentsList.scss";
import Comment from "../Comment/Comment.js";

const CommentsList = (props) => {
  console.log(props.comments);
  return (
    <ul id="comments__list" className="comments__list">
      {/* Iterate over each comment and render a Comment component */}
      {props.comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            commentComment={comment.comment}
            commentAuthor={comment.name}
            commentDate={comment.timestamp}
          />
        );
      })}
    </ul>
  );
};

export default CommentsList;
