# 8-bit Snake Game - React Hackathon Workshop

Welcome to the classic 8-bit Snake Game, built with React! This project is designed for a hackathon
workshop to introduce you to React fundamentals while building a fun and interactive game.

## 🚀 Workshop Goals

- Learn the basics of React (components, state, effects)
- Understand how to manage game state and user input

## 🛠️ Getting Started

Follow these steps to get the starter code running on your computer:

### 0. Install Prerequisites

Before you begin, make sure you have the following tools installed:

#### Install Git (if you don't already have it)

- **What it does:** Git lets you download and manage code from GitHub
- **Download:** Go to [git-scm.com/downloads](https://git-scm.com/downloads)
- **Installation:** Download the installer for your operating system and follow the setup wizard
- **Verify:** Open your terminal (Mac) or Command Prompt (Windows) and type `git --version` to
  confirm it's installed

#### Install Node.js (if you don't already have it)

- **What it does:** Node.js lets you run JavaScript on your computer and includes npm (package
  manager)
- **Download:** Go to [nodejs.org](https://nodejs.org/)
- **Installation:** Download the LTS (Long Term Support) version and install it
- **Verify:** Open your terminal and type `node --version` and `npm --version` to confirm both are
  installed

#### Install VS Code (any other code editor will also work, but VS Code is recommended)

- **What it does:** VS Code is a code editor where you'll write and edit your code
- **Download:** Go to [code.visualstudio.com](https://code.visualstudio.com/Download)
- **Installation:** Download the installer for your operating system and follow the setup wizard
- **Tip:** During installation on Windows, check the box to add "Open with Code" to the context menu

### 1. Clone the Repository

First, you need to copy ("clone") the project from GitHub to your computer. Open the terminal on Mac
or Command Prompt on Windows and run:

```bash
git clone https://github.com/hritikaggarwal2/snake-game-react.git
```

This will create a folder called `snake-game-react` with all the project files.

### 2. Go Into the Project Folder

Change into the new folder:

```bash
cd snake-game-react
```

### 3. Open the Project in VS Code

Now open the project folder in VS Code:

```bash
code .
```

Or, you can open VS Code manually and use **File > Open Folder** to select the `snake-game-react`
folder.

### 4. Install the Packages

Install all the code libraries (called "dependencies") the project needs:

```bash
npm install
```

This command reads the `package.json` file and downloads everything you need.

### 5. Start the Development Server

Run this command to start the game on your computer:

```bash
npm start
```

After a few seconds, your browser should open automatically at
[http://localhost:3000](http://localhost:3000). If it doesn't, open your browser and go to that
address.

You should see the Snake Game starter code!

---

**Troubleshooting:**

- If you get an error about `git` not found, make sure you completed step 0 and installed Git
- If you get an error about `npm` or `node` not found, make sure you completed step 0 and installed
  Node.js
- If the browser doesn't open automatically, manually go to
  [http://localhost:3000](http://localhost:3000)

## ✨ Key Concepts Covered

- React functional components and hooks (`useState`, `useEffect`, `useRef`)
- Handling keyboard events for real-time input
- Using arrays and objects to represent the snake and food
- Game loop and collision detection
- Conditional rendering for overlays and game states
- CSS Grid for the game board

## 💡 Future Hack Ideas

Here are some features you can implement to level up the game:

- **High Score Tracker:** Save and display the highest score using localStorage
- **Difficulty Levels:** Add Easy/Medium/Hard modes with different speeds
- **Power-Ups:** Special food items that give temporary abilities (speed boost, invincibility, etc.)
- **Obstacles:** Add walls or barriers that appear on the board
- **Sound Effects:** Add audio for eating food, collisions, and background music
- **Mobile Controls:** Add on-screen buttons or swipe gestures for mobile play
- **Multiplayer Mode:** Two snakes controlled by different keys competing for food
- **Custom Themes:** Dark mode, different color schemes, or retro pixel art styles
- **Pause & Resume:** Add ability to pause the game mid-play
- **Leaderboard:** Track top scores with player names
- **Progressive Difficulty:** Game speeds up as you collect more food
- **Special Game Modes:** Time attack, survival mode, or maze challenges

Pick one or two features and try to implement them after the workshop!

## 🙏 Credits

Created for a React hackathon workshop. Inspired by classic arcade games.
