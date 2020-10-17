import React, { Component } from "react";
import _ from "lodash";
import ImageCard from "./card";

// props
//  cards
//  onClick
class Cards extends Component {
  key = 1;
  render() {
    return (
      <React.Fragment>
        {this.renderCards(this.props.cards, 0, 9)}
        {this.renderCards(this.props.cards, 9, 18)}
      </React.Fragment>
    );
  }

  renderCards(cards, start, end) {
    if (cards.length > 0) {
      return (
        <div className="row">
          {_.range(start, end).map((num) => (
            <ImageCard
              key={this.key++}
              card={cards[num]}
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
