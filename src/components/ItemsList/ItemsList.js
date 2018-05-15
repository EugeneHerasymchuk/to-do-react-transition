import React, { Component } from 'react';
import Item from '../Item/Item';
import Toolbar from '../Toolbar/Toolbar';

import './ItemsList.css';

class ItemList extends Component {
  state = {
    items: {}
  };

  addItemHandler = itemName => {
    this.setState({
      items: {
        ...this.state.items,
        [+new Date()]: itemName
      }
    });
  };

  onDeleteHandler = itemKey => {
    let newStateItems = { ...this.state.items };

    delete newStateItems[itemKey];

    this.setState({
      items: {
        ...newStateItems
      }
    });
  };

  render() {
    const itemsList = Object.keys(this.state.items).map(itemKey => {
      return (
        <Item
          key={itemKey}
          name={this.state.items[itemKey]}
          onDelete={() => {
            this.onDeleteHandler(itemKey);
          }}
        />
      );
    });

    return (
      <div className="items-section">
        <Toolbar onAddHandler={this.addItemHandler} />
        <div className="items-section__list">{itemsList}</div>
      </div>
    );
  }
}

export default ItemList;
