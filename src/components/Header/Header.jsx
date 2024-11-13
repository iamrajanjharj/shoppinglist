import HeaderImage from "../../assets/headerImage.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="header-wrapper">
      <h1 className="header-text">Shopping List</h1>
      <div className="header-image-wrapper">
        <img src={HeaderImage} className="header-image" />
      </div>
    </div>
  );
}

export default Header;
