import React from "react";
import ShoesListItem from "./store-list-item";

const ShoesList = ({ items }) => {
  console.log(items);
  const element = items.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="ml-3 mb-3">
        <ShoesListItem {...itemProps} />
      </li>
    );
  });

  return <ul className="container d-flex flex-wrap">{element}</ul>;
};

export default ShoesList;
