import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <Link to="/Lists">
        <button>Lihat List Barang</button>
      </Link>
      <Link to="/cart">
        <button>Cart</button>
      </Link>
      <Link to="/search">
        <button>Search</button>
      </Link>

    </div>
  );
}

export default Homepage;