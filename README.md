# 🍓 Memory Card Game

A fun and fully responsive memory card game built with React. Flip cards, match fruit emoji pairs, track your moves and score — and challenge yourself to win with as few moves as possible!

## ✨ Features

- 🃏 **Card Flipping** — Click any card to flip it and reveal a fruit emoji
- 🍉 **Match Pairs** — Find all matching fruit emoji pairs to win the game
- 📊 **Move & Score Tracker** — A header bar tracks your total moves and current score in real time
- 🔀 **Restart & Shuffle** — Reset the board at any time with a single button click; cards are randomly shuffled on every new game
- 📱 **Fully Responsive** — Looks great on mobile, tablet, and desktop

---

## 🛠️ Built With

- [React](https://react.dev/)
- CSS3

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 14
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Nav2004-raj/Memory-Card-Game.git

# Navigate into the project
cd memory-card-game

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🕹️ How to Play

1. Cards start face-down on the board.
2. Click a card to flip it and see the fruit emoji.
3. Click a second card — if both emojis match, they stay face-up.
4. If they don't match, both cards flip back over.
5. Keep going until all pairs are matched.
6. Try to finish in as few moves as possible!
7. Hit **Restart** at any time to shuffle the board and start fresh.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── GameHeader.jsx        # Displays move count, score, and restart button
│   ├── winMessage.jsx        # Displays a win message
│   └── Card.jsx              # Individual card with flip animation
├── hooks/
│   ├── useGameLogic.jsx             
├── App.jsx
└── main.jsx
```

---

## 🙌 Acknowledgements

- Fruit emojis from Unicode standard
- Inspired by the classic concentration / pairs card game

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
