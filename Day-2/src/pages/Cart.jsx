import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Cart() {
  const { cart,removeToCart,deleteCart } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      {cart.map((item, index)=>{
        return <div key={index}>
          <div>{item.title}</div>
           <div>{item.description}</div>
            <div>{item.price}</div>
            <div>Item Quantity: {item.quantity}</div>
            <button onClick={()=>removeToCart(item)}>Reduce</button>
            <button onClick={()=>deleteCart(item)}>Delete</button>
        </div>
      })}
    </div>
  )
}

export default Cart
