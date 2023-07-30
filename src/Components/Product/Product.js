import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
              const { img, name, price, seller, ratings } = props.product;
              // const { handleAddToCart } = props;
              
              return (
                            <div className='product'>
                                          <img src={img} alt=''></img> 
                                          <div className='product-info'>
                                          <h4>{name}</h4> 
                                          <p>Price:${price}</p>
                                          <p>Seller:{seller}</p>
                                          <p><small>Rating:{ ratings} star</small></p>
                                          </div>
                                          <button onClick={()=>props.handleAddToCart(props.product)} className='btn-cart'>
                                                        <p className='btn-text'>Add To Cart</p>
                                                        <FontAwesomeIcon
                                                        icon={faShoppingCart}
                                                        
                                                        
                                                        ></FontAwesomeIcon>
                                          </button>
                            </div>
              );
};

export default Product;