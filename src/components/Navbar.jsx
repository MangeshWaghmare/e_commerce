import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "15px", color: "#fff" }}>
        Home
      </Link>
      <Link to="/cart" style={{ color: "#fff" }}>
        Cart
      </Link>
    </nav>
  );
}

export default Navbar;
