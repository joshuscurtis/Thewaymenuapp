import React from "react";

import Product from './Product'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";


export default function ItemBuilder(props) {
  const menu = props.menu;
  const type = props.type;
  
  var rows = [];
  for (var i = 0; i < menu.length; i++) {  
    if(type === menu[i].type && menu[i].forSale === true){
     rows.push(<Product
        name={menu[i].name}
        price={menu[i].price} 
        desc={menu[i].desc}
        image={menu[i].image}
       />);}
      }
      
  return (
    
  <div>
    {rows}
  </div>    
  )

};
