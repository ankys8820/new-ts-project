import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "1",
    photo: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg",
    name: "Macbook",
    price: 3000,
    quantity: 50,
    stock: 10,
  },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const discount = 400;
const shippingCharges = 99;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  //
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <>
      <div className="cart">
        <main>
          {/* Cart Items */}

          {cartItems.length > 0 ? (
            cartItems.map((i, idx) => <CartItem key={idx} cartItem={i} />)
          ) : (
            <h1>No Items Added yet</h1>
          )}
        </main>
        <aside>
          <p>Subtotal : ₹{subtotal}</p>
          <p>Shipping Charges : ₹{shippingCharges}</p>
          <p>GST : ₹{tax}</p>
          <p>
            Discount : <em>-₹{discount}</em>
          </p>
          <p>
            <b>Total : ₹{total}</b>
          </p>
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Coupon Code"
          />
          {couponCode &&
            (isValidCouponCode ? (
              <span className="green">
                ₹{discount} off using the <code>{couponCode}</code>
              </span>
            ) : (
              <span className="red">
                Invalid Coupon <VscError />
              </span>
            ))}

          {cartItems.length > 0 && (
            <Link to="/shipping">Proceed to Checkout</Link>
          )}
        </aside>
      </div>
    </>
  );
};

export default Cart;
