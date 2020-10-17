import React, { Component } from "react";
import _ from "lodash";
import ImageCard from "./card";

// props
//  cards
//  onClick
class Cards extends Component {
  key = 1;
  render() {
    const { cards } = this.props;
    if (cards.length > 0) {
      return (
        <div className="row">
          {cards.map((card) => (
            <ImageCard
              key={this.key++}
              card={card}
              onClick={this.props.onClick}
            />
          ))}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Cards;
