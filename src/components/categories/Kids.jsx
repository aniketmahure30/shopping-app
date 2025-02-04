import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cataxios from "../../apis/Cataxios";
import style from "./cat.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSort } from "react-icons/bi";
import { FaHeart, FaFilter } from "react-icons/fa";
import {addToCart} from '../../features/cart/cartSlice'
import { useDispatch } from "react-redux";
const Kids = () => {
    let dispatch = useDispatch()
  let [data, setdata] = useState([]);
  const fetchdata = async () => {
    let { data } = await Cataxios.get("/products");
    setdata(data);
    console.log(data);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <div>
        <div>
          <h1>Kids Category</h1>
          <div className={style.block}>
            <input type="text" name="" id="" />
            <p>
              <AiOutlineSearch />
            </p>
            <p><BiSort/></p>
            <p><FaFilter/></p>
            <p><FaHeart/></p>
          </div>
        </div>
        <div className={style.box}>
          {data.map((data) => {
            let { productsid, brand, rating, thumbnail_URL, price } = data;
            return (
              <div>
                <img src={thumbnail_URL} alt="" />
                <p>ID:{productsid}</p>
                <p>BRAND:{brand}</p>
                <p>RATING:{rating}</p>
                <p>PRICE:{price}</p>
          <button onClick={()=>{dispatch(addToCart(data))}}>Add Cart</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Kids;
