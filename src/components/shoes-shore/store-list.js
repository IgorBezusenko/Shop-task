import React from "react";
import ShoesListItem from "./store-list-item";

const ShoesList = ({ items, viewItem, onViewItem, onCloseViewItem }) => {
  const element = items.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="ml-3 mb-3">
        <ShoesListItem
          {...itemProps}
          viewItem={viewItem}
          onViewItem={() => onViewItem(id)}
          onCloseViewItem={() => onCloseViewItem(id)}
        />
      </li>
    );
  });

  return <ul className="container d-flex flex-wrap">{element}</ul>;
};

export default ShoesList;
