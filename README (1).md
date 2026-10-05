# Tic Tac Toe

A clean, responsive two-player Tic Tac Toe game. Built for the AVIP 2026 Web Development track (Task 4).

## Features

- Classic 3×3 board, playable by two people sharing one screen/device
- Detects wins (row, column or diagonal), draws, and highlights the winning line
- Running scoreboard for Player X, Player O and draws across rounds
- "New round" button resets the board without losing the scoreboard
- Clear turn indicator at all times ("Player X's turn", "Player O wins!", etc.)
- Fully responsive and touch-friendly — board scales down cleanly on mobile
- Keyboard accessible (tab through cells, each labeled with its position and contents)

## Tech stack

Plain HTML, CSS and JavaScript — no build step, no dependencies.

## Running it locally

Clone this repo and open `index.html` in a browser. No setup needed — the game is fully client-side.

## How to play

1. Player X goes first — tap/click any empty square to place a mark.
2. Players alternate turns until one gets three in a row (horizontally, vertically or diagonally) or the board fills up with no winner.
3. Hit **New round** to clear the board and play again — the scoreboard keeps counting.

## Screenshot
  ![X win](X-win.png) 
  ![O win](O-win.png)
  ![demo](demo.gif)
