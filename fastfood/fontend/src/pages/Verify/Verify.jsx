import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./Verify.css";
import axios from "axios";
const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    console.log(url);
    const res = await axios.post("http://localhost:5000/api/order/verify", {
      success,
      orderId,
    });

    if (res.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);
    
  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verify;
