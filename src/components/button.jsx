import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";  
const useStyle = makeStyles((theme) => ({
  container: {}
}));

    function Button(props){
      return(
        <div className = "mt-10">
         <button {...props} onClick = {props.onClick} className = {clsx("rounded-3xl py-0.5 px-7 font-semibold  focus:outline-none",
         props.bg_red ? "bg-primary-main text-sm text-bold text-white hover:bg-red-700 transform hover:scale-110"
          : " ",
          props.bg_blue ? "bg-blue-500 text-sm text-bold text-white hover:bg-blue-600 transform hover:scale-110" : " ",
          props.bg_white ? "bg-transparent hover:bg-primary-main text-red-500 hover:text-white border border-red-500 hover:border-transparent" : " ",)}>
          {props.content}</button>
        </div>
      )
    }
export default Button;
