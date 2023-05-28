import "./Header.scss";
import Button from "../Button/Button";
import logo from "../../assets/Logo/logo.svg";
import mohan from "../../assets/Images/Mohan.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" title='home'>
        <img src={logo} className="header__logo" alt="logo" />
        </Link>
        <div className="header__search">
          <form id="header__form" className="header__form">
            {/* Label for the search input */}
            <label htmlFor="search" className="header__label"></label>
            {/* Input field for the search */}
            <input
              id="search"
              className="header__text"
              type="text"
              placeholder="Search"
              name="searchBar"
            />
          </form>
          {/* Avatar image */}
          <img src={mohan} className="header__avatar" alt="avatar" />
          {/* Button to upload */}
          <Button className="btn--upload" text="Upload" link="/upload"/>
        </div>
      </div>
    </header>
  );
}

export default Header;
