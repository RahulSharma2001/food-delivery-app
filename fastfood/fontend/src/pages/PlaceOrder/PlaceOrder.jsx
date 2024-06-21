import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItem, url } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItem[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItem[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 4,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });

    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
    };
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/cart")
        }
        else if (getTotalCartAmount() === 0) {
        navigate("/cart");
        }
    },[token])

  /* const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51PTmHSFSiPBiknHDOpju9y1UPnD3C8q1dlc4tkn7XBVtiBqgTeMvtj5uap8ilwyFnNeS9ngwTVSvIuPFib33epC400zF5htxfY"
    );
    const body = {
      products: cartItem,
    };
  }; */
  return (
    <form className="place-order" onSubmit={placeOrder}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            name="firstName"
            onChange={onChangeHandler}
            type="text"
            placeholder="First Name"
            value={data.firstName}
            required
          />
          <input
            name="lastName"
            onChange={onChangeHandler}
            type="text"
            placeholder="Last Name"
            value={data.lastName}
            required
          />
        </div>
        <input
          name="email"
          onChange={onChangeHandler}
          type="email"
          placeholder="Email Address"
          id=""
          value={data.email}
          required
        />
        <input
          name="street"
          onChange={onChangeHandler}
          type="text"
          placeholder="Steet"
          value={data.street}
          required
        />
        <div className="multi-fields">
          <input
            name="city"
            onChange={onChangeHandler}
            type="text"
            placeholder="City"
            value={data.city}
            required
          />
          <input
            name="state"
            onChange={onChangeHandler}
            type="text"
            placeholder="State"
            value={data.state}
            required
          />
        </div>
        <div className="multi-fields">
          <input
            name="zipcode"
            onChange={onChangeHandler}
            type="text"
            placeholder="Zip code"
            value={data.zipcode}
            required
          />
          <input
            name="country"
            onChange={onChangeHandler}
            type="text"
            placeholder="Country"
            value={data.country}
            required
          />
        </div>
        <input
          name="phone"
          onChange={onChangeHandler}
          type="text"
          placeholder="Phone"
          value={data.phone}
          required
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() > 0 ? 4 : 0}</p>
            </div>
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount() > 0 ? getTotalCartAmount() + 4 : 0}</p>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
