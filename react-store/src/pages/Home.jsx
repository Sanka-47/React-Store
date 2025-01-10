import barbelImage from "../../public/istockphoto-1758416916-1024x1024.jpg"
import{Link} from "react-router-dom"

export function Home() {
  return (
    <>
      <h1>Welcome to gym Supplement Store</h1>
      <img src ={barbelImage}/> <br />
      <Link to="/Products">
      <button>
        View All Products
      </button>
      </Link>
    </>
  );
}
