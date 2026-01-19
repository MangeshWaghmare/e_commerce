import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "10px",
        background: "#222",
        color: "#fff",
      }}
    >
      <Link to="/" style={{ marginRight: "15px", color: "#fff" }}>
        Home
      </Link>
      <Link to="/cart" style={{ marginRight: "15px", color: "#fff" }}>
        Cart
      </Link>
      <Link to="/about" style={{ marginRight: "15px", color: "#fff" }}>
        About
      </Link>
      <Link to="/login" style={{ marginRight: "15px", color: "#fff" }}>
        Login
      </Link>
    </nav>
  );
}

export default Navbar;
