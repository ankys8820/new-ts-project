import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <>
      <div className="home">
        <section className="section"></section>
        <h1>
          Latest Products
          <Link to="/search" className="findmore">
            More
          </Link>
        </h1>
        <main>
          <ProductCard
            productId="12"
            name="Macbook"
            price={80000}
            stock={100}
            handler={addToCartHandler}
            photo="https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
