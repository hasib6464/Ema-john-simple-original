import React from 'react';

const Cart = ({cart}) => {
              return (
                            <div>
                                 <h2>order summary</h2>
                          <p>selected iteam:{ cart.length}</p>         
                            </div>
              );
};

export default Cart;