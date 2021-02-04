import "./css/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  const style = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <>
      <div className="App"></div>
      <footer>
        <nav>
          <ul>
            <Link to="/passwords" style={style}>
              <li>
                <i className="fa fa-home"></i>
                <h5>Home</h5>
              </li>
            </Link>
            <Link to="/addpassword" style={style}>
              <li>
                <i className="fa fa-cog"></i>
                <h5>Word</h5>
              </li>
            </Link>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
