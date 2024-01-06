import { ChangeEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  // Form Handler
  const changeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setShippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(shippingInfo);
  return (
    <>
      <div className="shipping">
        <button className="back-btn" onClick={() => navigate("/cart")}>
          <BiArrowBack />
        </button>

        {/*  */}
        <form>
          <h1>SHIPPING ADDRESS</h1>
          <input
            type="text"
            name="address"
            value={shippingInfo.address}
            required
            onChange={changeHandler}
            placeholder="Address"
          />
          <input
            type="text"
            name="city"
            value={shippingInfo.city}
            required
            onChange={changeHandler}
            placeholder="City"
          />
          <input
            type="text"
            name="state"
            value={shippingInfo.state}
            required
            onChange={changeHandler}
            placeholder="state"
          />
          <select
            name="country"
            required
            value={shippingInfo.country}
            onChange={changeHandler}
          >
            <option value="">Choose Country</option>
            <option value="India">India</option>
            {/* <option value="USA">USA</option>
            <option value="UK">UK</option> */}
          </select>

          <input
            type="number"
            name="pinCode"
            value={shippingInfo.pinCode}
            required
            onChange={changeHandler}
            placeholder="Pin Code"
          />
          <button type="submit">Pay Now</button>
        </form>
      </div>
    </>
  );
};

export default Shipping;
