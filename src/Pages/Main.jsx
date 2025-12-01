import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useSearchParams } from "react-router-dom";

function Main() {
  const [getProducts, setProducts] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  const searchText = searchParam.get("q") || "";

  useEffect(() => {
    const products = async () => {
      let url = "";
      if (!searchText) {
        url = "https://dummyjson.com/products";
      } else {
        url = `https://dummyjson.com/products/search?q=${searchText}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
    };
    products();
  }, [searchText]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchParam(value ? { q: value } : "");
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[480px] rounded-b-3xl overflow-hidden shadow-lg mb-16">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="Educational Technology"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg text-center">
            Learning Full Stack Java Development
          </h1>

          <button className="text-lg font-semibold rounded-xl px-7 py-3 mt-6 bg-[#c56900] hover:bg-[#a75700] transition-all shadow-md">
            Learn More
          </button>
        </div>
      </div>

      {/* Search Box */}
      <div className="my-14 flex justify-center">
        <input
          className="border border-gray-300 rounded-full px-5 py-3 w-[300px] md:w-[400px] shadow-sm 
                  focus:ring-2 focus:ring-orange-500 outline-none transition-all"
          value={searchText}
          type="text"
          onChange={handleSearch}
          placeholder="Search by product name..."
        />
      </div>

      {/* Product Grid */}
      <div
        className="max-w-6xl mx-auto 
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                gap-x-10 gap-y-14 px-4 pb-20"
      >
        {getProducts?.map((product, index) => (
          <div key={index} className="h-full">
            <Card product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Main;
