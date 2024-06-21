import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const res = await axios.get("http://localhost:5000/api/food/list");
    if (res.data.success) {
      setList(res.data.data);
    } else {
      toast.error("Error Occured");
    }
  };

  const removeFood = async (foodId) => {
    const res = await axios.delete("http://localhost:5000/api/food/remove", {
      data: { id: foodId },
    });
    console.log(res);
    await fetchList();
    if (res.data.success) {
      toast.success(res.data.message);
    } else {
      toast.error("Error occured");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list add flex-col">
      <p>All Foods</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`http://localhost:5000/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p className="cursor" onClick={() => removeFood(item._id)}>
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
