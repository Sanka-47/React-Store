import { Link } from "react-router-dom";
import "./Navbar.css"

export function Navbar() {
  return (
    <>
      <div className="nav">
        <Link to="/">
          <button className="navBtn">Home</button>
        </Link>
        <Link to="/Products">
          <button className="navBtn">Products</button>
        </Link>
        <Link to="/About">
          <button className="navBtn">About Us</button>{" "}
        </Link>
        <Link to="/Contact">
          <button className="navBtn"> Contact Us</button>
        </Link>
        <Link to="/Cart">
          <button className="navBtn"> Cart</button>
        </Link>
      </div>
    </>
  );
}
