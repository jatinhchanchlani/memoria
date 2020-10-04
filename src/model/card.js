import {
    getRandomIntInclusive
} from "../common";
import _ from 'lodash';

const NUMBER_MIN = 1;
const NUMBER_MAX = 13;
const SUITE_MIN = 1;
const SUITE_MAX = 4;
const NUMBER_OF_CARDS = 10;
const NUMBER_OF_POSITIONS = 19;

const suites = {
    1: "clubs",
    2: "diamonds",
    3: "hearts",
    4: "spades"
}

const values = {
    1: "A",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "J",
    12: "Q",
    13: "K",
}

let cards = [];
let positions = [];
let cardsInPosition = [];

export function createRandomCard() {
    const value = values[getRandomIntInclusive(NUMBER_MIN, NUMBER_MAX)];
    const suite = suites[getRandomIntInclusive(SUITE_MIN, SUITE_MAX)];
    const card = {
        value: value,
        suite: suite,
        showBack: false,
        canBeFlipped: false
    };
    const index = cards.findIndex(c => c.value === card.value && c.suite === card.suite);
    if (index === -1) {
        cards.push(card);
        return card;
    } else {
        return createRandomCard();
    }
}

export function getRandomPosition() {
    const pos = getRandomIntInclusive(0, NUMBER_OF_POSITIONS);
    if (positions.indexOf(pos) === -1) {
        positions.push(pos);
        return pos;
    } else {
        return getRandomPosition();
    }
}

export function getCards() {
    _.range(NUMBER_OF_CARDS).forEach(val => {
        const card = createRandomCard();
        cardsInPosition[getRandomPosition()] = card;
        cardsInPosition[getRandomPosition()] = {
            ...card
        };
    });
    return cardsInPosition;
}