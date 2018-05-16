import React, { Component } from 'react';
import Item from '../Item/Item';
import Toolbar from '../Toolbar/Toolbar';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
        <CSSTransition key={itemKey} timeout={500} classNames="move">
          <Item
            name={this.state.items[itemKey]}
            onDelete={() => {
              this.onDeleteHandler(itemKey);
            }}
          />
        </CSSTransition>
      );
    });

    return (
      <div className="items-section">
        <Toolbar onAddHandler={this.addItemHandler} />
        <TransitionGroup className="items-section__list">
          {itemsList}
        </TransitionGroup>
      </div>
    );
  }
}

export default ItemList;
