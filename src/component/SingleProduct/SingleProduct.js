import React from 'react';
import './SingleProduct.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCarts, removeFromCart } from '../../redux/slices/cart';

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.cart);
  const currItem = cart.find(item => item.id === product.id);
  const quantity = currItem ? currItem.quantity : 0;

  return (
    <div className='single-product'>
      <div className='single-product-head'>
        <img className='single-product-images' src={product.images[0]} alt="" />
        <p className='single-product-title'>{product.title}</p>
        <p className='single-product-price'>{product.price}</p>
      </div>
      <div className='cart-info  button-class'>
        <button className='product-added' onClick={() => dispatch(addToCarts(product.id))}>+</button>
        <p className='product-numbers'>{quantity}</p>
        <button className='product-subtracted' onClick={() => dispatch(removeFromCart(product.id))}>-</button>
      </div>
    </div>
  );
}

export default SingleProduct;
