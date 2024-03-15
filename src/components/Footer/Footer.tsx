import "./Footer.css";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <ul className="list-icons">
        <li>
          <button className="icon">
            <FaInstagram />
          </button>
        </li>
        <li>
          <button className="icon">
            <FaFacebook />
          </button>
        </li>
        <li>
          <button className="icon">
            <FaTwitter />
          </button>
        </li>
        <li>
          <button className="icon">
            <FaGooglePlus />
          </button>
        </li>
        <li>
          <button className="icon">
            <FaYoutube />
          </button>
        </li>
      </ul>
      <span>Copyright &copy; 2024. All Rights Reserved.</span>
    </footer>
  );
}

export default Footer;
