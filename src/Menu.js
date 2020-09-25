import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

import Product from "./Product";
export default function ItemBuilder(props) {
  const menu = props.menu;
  const type = props.type;

  var rows = [];
  for (var i = 0; i < menu.length; i++) {
    if (type === menu[i].type && menu[i].forSale === true) {
      rows.push(
        <Product
          key={menu[i].name}
          name={menu[i].name}
          price={menu[i].price}
          desc={menu[i].desc}
          image={menu[i].image}
        />
      );
    }
  }

  return (
    <div>
      <Typography className="Menu__Title" variant="h5" component="h5">
        {props.type}
      </Typography>
      {rows}
    </div>
  );
}
