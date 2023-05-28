import "./Header.scss";
import { Link } from 'react-router-dom'
import Button from "../Button/Button";
import logo from "../../assets/Logo/logo.svg";
import Mohan from "../../assets/Images/Mohan.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" title='home'>
        <img src={logo} className="header__logo" alt="logo" />
        </Link>
        <div className="header__search">
          <form id="header__form" className="header__form">
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
          <img src={Mohan} className="header__avatar" alt="avatar" />
          {/* Button to upload */}
          <Button className="btn--upload" text="Upload" link="/upload"/>
        </div>
      </div>
    </header>
  );
}

export default Header;
