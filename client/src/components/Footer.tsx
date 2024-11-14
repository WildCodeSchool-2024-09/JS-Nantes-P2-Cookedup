import { Link } from "react-router-dom";
import "../assets/styles/Footer.css";
function Footer() {
  return (
    <footer>
      <div className="Footer-container">
        <ul className="Footer-box">
          <li>
            <Link to="/Copyright">Copyright</Link>
          </li>
          <li>
            <Link to="/mentions-legales">Mentions légales</Link>
          </li>
          <li>
            <Link to="/conditions-generales">Conditions générales</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;