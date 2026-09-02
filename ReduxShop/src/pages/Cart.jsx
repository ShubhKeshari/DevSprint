import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, deleteFromCart, increaseQuantity } from '../redux/features/cartSlice';

function Cart() {
  const cartItems = useSelector((state)=> state.cart.cartItems)
  const dispatch = useDispatch();

  return (
    <div>
      {cartItems.map((item, index)=>{
        return <div key={index}>
          <div>{item.title}</div>
           <div>{item.description}</div>
            <div>{item.price}</div>
            <div>Item Quantity: {item.quantity}</div>
            <button onClick = {()=>dispatch(increaseQuantity(item))}>Increase</button>
            <button onClick = {()=>dispatch(decreaseQuantity(item))}>Reduce</button>
            <button onClick = {()=> dispatch(deleteFromCart(item))}>Delete</button>
        </div>
      })}
    </div>
  )
}

export default Cart
