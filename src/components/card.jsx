import React, { Component } from "react";
import "../css/card.css";

//  props
//    value: value of the card e.g. 1, 2, 3, ..
//    suite: clubs, diamonds, ..
const IMAGE_WIDTH = "100";
const IMAGE_HEIGHT = "160";

class CardImage extends Component {
  render() {
    const imagePath = this.getImagePath();
    return (
      <div className="image-container">
        <img
          className="card-image image-fluid"
          src={require("../images/cards/" + imagePath)}
          alt={imagePath}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          onClick={() => this.props.onClick(this.props.card)}
        />
      </div>
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
