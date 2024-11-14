import { createSlice } from "@reduxjs/toolkit";
import React from "react";
import RedImage from './../../../Media/Red.png';
import YellowImage from './../../../Media/Yellow.png';
import yellow1Image from "./../../../Media/yellow1.jpeg";
import yellow2Image from "./../../../Media/yellow2.jpeg";
import yellow3Image from "./../../../Media/yellow3.png";
import yellow4Image from "./../../../Media/yellow4.png";
import yellow5Image from "./../../../Media/yellow5.png";

import WhiteImage from './../../../Media/White.png';
// import blueImage from './../../../Media/blue.png';
import Shoe1Image from './../../../Media/Shoe1.png';
import Shoe2Image from './../../../Media/Shoe2.png';
import Shoe3Image from './../../../Media/Shoe3.png';
import Shoe4Image from './../../../Media/Shoe4.png';
import Shoe5Image from './../../../Media/Shoe5.png';
import cream1Image from './../../../Media/cream1.jpeg';
import cream2Image from './../../../Media/cream2.jpeg';
import cream3Image from './../../../Media/cream3.png';
import cream4Image from './../../../Media/cream4.jpeg';
import cream5Image from './../../../Media/cream5.jpeg';
import cream6Image from './../../../Media/cream6.png';
import cream7Image from './../../../Media/cream7.jpeg';
import gray1Image from './../../../Media/gray1.png';
import gray2Image from './../../../Media/gray2.png';
import gray3Image from './../../../Media/gray3.jpeg';
import gray4Image from './../../../Media/gray4.jpeg';
import gray5Image from './../../../Media/gray5.jpeg';
import gray6Image from './../../../Media/gray6.png';
import grayImage from './../../../Media/gray.jpeg';
import pinkImage from './../../../Media/pink.jpeg';
import pink1Image from './../../../Media/pink1.png';
import pink2Image from './../../../Media/pink2.png';
import pink3Image from './../../../Media/pink3.jpeg';
import pink4Image from './../../../Media/pink4.png';
import pink5Image from './../../../Media/pink5.png';
import redImage from './../../../Media/red.png';
import red1Image from './../../../Media/red1.png';
import red2Image from './../../../Media/red2.png';
import red3Image from './../../../Media/red3.png';
import red4Image from './../../../Media/red4.png';
import red5Image from './../../../Media/red5.png';
import dark1Image from './../../../Media/dark1.png';
  import dark2Image from './../../../Media/dark2.png';
  import dark3Image from './../../../Media/dark3.jpeg';
  import dark4Image from './../../../Media/dark4.png';
  import dark5Image from './../../../Media/dark5.jpeg';
  import dark6Image from './../../../Media/dark6.jpeg';

import brownImage from './../../../Media/brown.jpeg';
  import brown1Image from './../../../Media/brown1.jpeg';
  import brown2Image from './../../../Media/brown2.jpeg';
  import brown3Image from './../../../Media/brown3.jpeg';
  import brown4Image from './../../../Media/brown4.jpeg';
  import brown5Image from './../../../Media/brown5.jpeg';
  import blueImage from './../../../Media/blue.jpeg';
  import blue1Image from './../../../Media/blue1.jpeg';
  import blue3Image from './../../../Media/blue3.jpeg';
  import blue4Image from './../../../Media/blue4.jpeg';
  import blue5Image from './../../../Media/blue5.jpeg';
  import blue6Image from './../../../Media/blue6.jpeg';
  import yellowmainImage from './../../../Media/yellowmain.png';
  import redmainImage from './../../../Media/redmain.png';
  import bluemainImage from './../../../Media/Bluemain.png';


  const first ={
    Quantity:1 ,
    id:0,
    name:"NIKE AIR JORDEN 1 MID",
    price:100,
    image: [ bluemainImage, yellowmainImage, WhiteImage, redmainImage],
    Parts:[blue1Image, blue3Image, blue4Image, blue5Image, blue6Image]
  }


const data = [
  // {
  //   id:0,
  //   name:"NIKE AIR JORDEN 1 MID",
  //   image: [yellowmainImage, WhiteImage, redmainImage, bluemainImage],
  //   Parts:[blue1Image, blue3Image, blue4Image, blue5Image, blue6Image]
  // },

  {id:1,
    quantity:1,

    name: "Nike Al8",
    Description: "Men's shoe",
    price: 100,
    image: [cream1Image, WhiteImage, YellowImage],
    Parts:[ cream1Image, cream2Image, cream3Image, cream4Image,cream5Image,cream6Image,cream7Image,]
  },
  {id:2,
    quantity:1,
    name: "Nike AB8",
    Description: "Men's shoe",
    price: 120,
    image: [grayImage, WhiteImage, YellowImage],
    Parts:[gray1Image, gray2Image, gray3Image, gray4Image,gray5Image, gray6Image,]
  },
  {id:3,
    quantity:1,
    name: "Nike LK3",
    Description: "Men's shoe",
    price: 90,
    image: [pinkImage, WhiteImage, YellowImage],
    Parts:[pink1Image, pink2Image, pink3Image, pink4Image,pink5Image,]
  },
  {id:4,
    quantity:1,
    name: "Nike MK4",
    Description: "Men's shoe",
    price: 100,
    image: [redImage, WhiteImage, YellowImage],
    Parts:[red1Image, red2Image, red3Image, red4Image, red5Image]
  },
  {id:5,
    quantity:1,
    name: "Nike FL3",
    Description: "Men's shoe",
    price: 100,
    image: [YellowImage, WhiteImage, blue4Image],
    Parts:[yellow1Image, yellow2Image, yellow3Image, yellow4Image, yellow5Image]
  },
  {id:6,
    quantity:1,
    name: "Nike SK4",
    Description: "Men's shoe",
    price: 70,
    image: [brownImage, blueImage, YellowImage],
    Parts:[brown1Image, brown2Image,brown3Image,brown4Image,brown5Image]

  },
  {
    id:7,
    quantity:1,
    name: "Nike MK4",
    Description: "Men's shoe",
    price: 100,
    image: [dark1Image, WhiteImage, YellowImage],
    Parts:[dark2Image, dark3Image, dark4Image, dark5Image, dark6Image]
  },
  {
    id:8,
    quantity:1,
    name: "Nike FL3",
    Description: "Men's shoe",
    price: 100,
    image: [blue1Image, WhiteImage, blueImage],
    Parts:[blueImage, blue3Image, blue4Image, blue5Image, blue6Image]
  },

];

const initialState = {
  product: [],
  loading: true,
  error: null,
  data,
  first,
};

const ProductSlice = createSlice({
  initialState,
  name: "products",
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.product.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.product.push({ ...action.payload, quantity: 1 });
      }
      const existing = first
      if (existing) {
        existing.Quantity++;
      } else {
        state.product.push({...action.payload, Quantity: 1 });
      }
    },
    increaseQuantity:(state, action) =>{
      const existingProduct = state.product.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      }
      state.first = {
        ...state.first,
        Quantity: state.first.Quantity + 1,
      };
    },
    decreaseQuantity:(state, action) =>{
      const existingProduct = state.product.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct && existingProduct.quantity > 0) {
        existingProduct.quantity--;
      }
      if (state.first.Quantity > 1) {
        state.first = {
          ...state.first,
          Quantity: state.first.Quantity - 1,
        };
      }
    },
    removeProduct: (state, action) => {
      const index = state.product.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index >= 0) {
        state.product.splice(index, 1);
      }
      if (state.first.Quantity) {
        state.first = null;
      }
    }
  },
});

export default ProductSlice.reducer;

export const { addProduct, increaseQuantity, decreaseQuantity, removeProduct } = ProductSlice.actions;
