import "./Button.scss";

function Button(props) {
  // Render a button element with the provided class name and text
  return (
    <button type="submit" className={`btn ${props.className}`}>
      {props.text}
    </button>
  );
}

export default Button;
