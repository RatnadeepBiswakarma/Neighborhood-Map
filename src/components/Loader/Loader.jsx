import React from "react";
import loaderGif from "./../../img/ajax-loader.gif";
import './Loader.css';

export default function Loader(props) {
  return (
    <div className='loader-container'>
      <img id='loader' src={loaderGif} alt="loader animation circle" />
    </div>
  );
}
