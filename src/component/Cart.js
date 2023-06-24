import React from 'react';
function handleClick(){
    return(
        <div>
            
        </div>
    )
}




 function Cart(cartItems) {
    
  return (
     
        <div className="d-flex">
                        <button className="btn btn-outline-dark" type="submit" onClick={handleClick}>
                            <i   className="bi-cart-fill me-1">
                           </i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
    </div>
  )
}
export default Cart;