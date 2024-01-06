import { useState } from "react";
import ProductCard from "../components/ProductCard";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCatgory] = useState("");
  const [page, setPage] = useState(1);

  // add to cart
  const addToCartHandler = () => {};

  const isNextPage = page > 1;
  const isPrevPage = page < 4;
  return (
    <>
      <div className="product-search-page">
        <aside>
          <h2>Filter</h2>
          <div>
            <h4>Sort</h4>
            <select
              name=""
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">None</option>
              <option value="asc">Price (Low to High)</option>
              <option value="dsc">Price (High to Low)</option>
            </select>
          </div>
          <div>
            <h4>Max Price : {maxPrice || ""}</h4>
            <input
              type="range"
              min={100}
              max={100000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>
          <div>
            <h4>Category</h4>
            <select
              name=""
              value={category}
              onChange={(e) => setCatgory(e.target.value)}
            >
              <option value="">All</option>
              <option value="asc">Sample1</option>
              <option value="dsc">Sample2</option>
            </select>
          </div>
        </aside>
        <main>
          <h1>Products</h1>
          <input
            type="text"
            placeholder="Search by name....."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="search-product-list">
            <ProductCard
              productId="12"
              name="Macbook"
              price={80000}
              stock={100}
              handler={addToCartHandler}
              photo="https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
            />
          </div>
          <article>
            <button
              disabled={!isPrevPage}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </button>
            <span>
              {page} of {4}
            </span>
            <button
              disabled={!isNextPage}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          </article>
        </main>
      </div>
    </>
  );
};

export default Search;
