import React from "react";
import "./Order.css";
import { useState } from "react";
import axios from "axios";
import { assets } from "../../../../fontend/src/assets/assets";
import { useEffect } from "react";

const Order = () => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const res = await axios.get("http://localhost:5000/api/order/list");

    setOrders(res.data.data);
  };

  const statusHandler = async (e, orderId) => {
    const res = await axios.post(
      "http://localhost:5000" + "/api/order/status",
      {
        orderId,
        status: e.target.value,
      }
    );
    if (res.data.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);
  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ",";
                  }
                })}
              </p>
              <p className="order-item-name">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="order-item-address">
                {order.address.street + ","}
                <p>
                  {order.address.city +
                    "," +
                    order.address.state +
                    "," +
                    order.address.zipcode}
                </p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>${order.amount}</p>
            <select
              onChange={(e) => statusHandler(e, order._id)}
              value={order.status}
            >
              <option value="Food Processing">Food Processing</option>
              <option value="Out For delivery">Out For delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
