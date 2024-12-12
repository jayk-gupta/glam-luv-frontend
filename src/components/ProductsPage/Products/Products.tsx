import React, { useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import ProductCard from "../Product/ProductCard";
import { fetchProducts } from "../../../redux/productsSlice";
import { useLocation } from "react-router-dom";

function Products() {
  const { state } = useLocation();
  const title = state?.title;

  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);

  // Fetch products on mount or title change
  useEffect(() => {
    dispatch(fetchProducts({ product_type: title }));
  }, [title, dispatch]);

  // Memoize product rendering
  const renderProductCard = useCallback(
    (product) => (
      <ProductCard
        key={product.id}
        name={product.name}
        brand={product.brand}
        img_url={product.api_featured_image}
        price={product.price}
        category={product.category}
        product_api_url={product.product_api_url}
        product_colors={product.product_colors}
        product_type={product.product_type}
        id={product.id}
      />
    ),
    [] // Dependencies
  );

  return (
    <div>
      <h2 className="text-4xl py-4 font-bold">{title}</h2>
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div>
            <div className="flex justify-center items-center py-10">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent border-solid rounded-full animate-spin"></div>
              <p className="pl-12">Loading...</p>
            </div>
          </div>
        </div>
      ) : error ? (
        <p className="text-red-500 text-center">Error: {error}</p>
      ) : (
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(renderProductCard)}
        </div>
      )}
    </div>
  );
}

export default React.memo(Products);
