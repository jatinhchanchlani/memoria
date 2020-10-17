import React, { Component } from "react";

import { getCards } from "../model/card";
import Cards from "./cards";
import Countdown from "./countdown";

const TIMER_SECONDS = 5;

class Game extends Component {
  state = {
    cards: [],
    showTimer: true,
  };

  componentDidMount() {
    this.setState({ cards: getCards() });
  }

  componentDidUpdate() {
    const cards = [...this.state.cards];
    const selectedCards = cards.filter((c) => c.selected === true);
    if (selectedCards.length === 2) {
      setTimeout(
        () => this.checkCardsInGame(selectedCards[0], selectedCards[1]),
        1000
      );
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{ height: 50 }}>
          {this.state.showTimer ? (
            <Countdown
              seconds={TIMER_SECONDS}
              onCountDownCompleted={this.handleCountDownComplete}
            />
          ) : null}
        </div>
        <div className="row">
          <Cards
            cards={this.state.cards}
            onClick={(card) => this.openCard(card)}
          />
        </div>
      </div>
    );
  }

  handleCountDownComplete = () => {
    const cardsFolded = [...this.state.cards];
    cardsFolded.forEach((card) => {
      card.showBack = true;
      card.canBeFlipped = true;
    });
    this.setState({ cards: cardsFolded, showTimer: false });
  };

  openCard = (card) => {
    const cards = [...this.state.cards];
    const index = cards.indexOf(card);
    if (card.canBeFlipped) {
      card.showBack = false;
      card.canBeFlipped = false;
      card.selected = true;
    }
    cards[index] = card;
    this.setState({ cards });
  };

  checkCardsInGame(card1, card2) {
    const cards = [...this.state.cards];
    if (!this.areSame(card1, card2)) {
      this.closeCard(card1);
      this.closeCard(card2);
    } else {
      this.keepCardOpen(card1);
      this.keepCardOpen(card2);
    }
    const index1 = cards.indexOf(card1);
    const index2 = cards.indexOf(card2);
    cards[index1] = card1;
    cards[index2] = card2;
    this.setState({ cards });
  }

  areSame(card1, card2) {
    return card1.value === card2.value && card1.suite === card2.suite;
  }

  closeCard(card) {
    card.canBeFlipped = true;
    card.showBack = true;
    card.selected = false;
  }

  keepCardOpen(card) {
    card.canBeFlipped = false;
    card.showBack = false;
    card.selected = false;
  }
}

export default Game;
