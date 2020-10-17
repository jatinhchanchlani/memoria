import React, { Component } from "react";
import "../css/card.css";

//  props
//    value: value of the card e.g. 1, 2, 3, ..
//    suite: clubs, diamonds, ..
class CardImage extends Component {
  render() {
    const imagePath = this.getImagePath();
    return (
      <img
        className="card-image image-fluid"
        src={require("../images/cards/" + imagePath)}
        alt={imagePath}
        onClick={() => this.props.onClick(this.props.card)}
      />
    );
  }

  getImagePath() {
    const { suite, value, showBack } = this.props.card;
    if (showBack) {
      return "back.png";
    } else {
      return suite + "_" + value + ".png";
    }
  }
}

export default CardImage;
