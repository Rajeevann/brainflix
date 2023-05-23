import "./Comments.scss";
import Button from "../Button/Button.js";
import mohan from "../../assets/Images/Mohan.jpg";
import CommentsList from "../CommentsList/CommentsList";

function Comments({ selectedVideoComments }) {
  return (
    <section className="comments">
      {/* Display the number of comments */}
      <p className="comments__number">
        {selectedVideoComments.length} Comments
      </p>

      <div className="comments__box">
        <img className="comments__image" src={mohan} alt="avatar" />

        <form className="comments__form">
          <div className="comments__wrapper">
            {/* Label for the comment input */}
            <label htmlFor="comment" className="comments__label">
              Join the Conversation
            </label>
            {/* Textarea for adding a new comment */}
            <textarea
              id="comment"
              className="comments__text"
              placeholder="Add a new comment"
              name="yourComment"
            ></textarea>
          </div>
          {/* Button to submit the comment */}
          <Button className="btn--comment" text="Comment" />
        </form>
      </div>
      {/* Display the list of comments */}
      <CommentsList comments={selectedVideoComments} />
    </section>
  );
}

export default Comments;
