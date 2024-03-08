// ProductList.js
import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../redux/slices/productSlice';
import SingleProduct from '../SingleProduct/SingleProduct';
import './productlist.css';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      const data = await response.json();
      dispatch(loadProducts(data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className='product-list'>
      {products.map((item) => (
        <SingleProduct key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;
