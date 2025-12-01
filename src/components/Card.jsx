import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
      <div className="w-full h-[200px] overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover rounded-t-xl hover:scale-105 transition-all duration-300"
        />
      </div>

      <div className="p-4">
        <h1 className="font-semibold text-lg text-gray-900">{product.title}</h1>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">
            ₹{product.price}
          </span>

          <Link
            to={`/product/${product.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
