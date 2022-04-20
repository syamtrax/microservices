import { Link } from "react-router-dom";

function Homepage() {
    return (
      <div>
           <Link to="/Lists">
               <button>Lihat List Barang</button>
           </Link>
      </div>
    );
  }
  
  export default Homepage;