// Tic Tac Toe — two-player, local, no dependencies.

const WIN_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6],            // diagonals
];

const els = {
  board: document.getElementById('board'),
  cells: Array.from(document.querySelectorAll('.cell')),
  status: document.getElementById('status'),
  resetBtn: document.getElementById('reset-btn'),
  scoreX: document.getElementById('score-x'),
  scoreO: document.getElementById('score-o'),
  scoreDraw: document.getElementById('score-draw'),
};

let board = Array(9).fill(null);
let currentPlayer = 'X';
let gameOver = false;
const scores = { X: 0, O: 0, draw: 0 };

function cellLabel(index, value) {
  const row = Math.floor(index / 3) + 1;
  const col = (index % 3) + 1;
  return value
    ? `Row ${row}, column ${col}, ${value}`
    : `Row ${row}, column ${col}, empty`;
}

function checkWinner() {
  for (const line of WIN_LINES) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line };
    }
  }
  if (board.every((cell) => cell !== null)) {
    return { winner: 'draw', line: null };
  }
  return null;
}

function handleCellClick(e) {
  const index = Number(e.currentTarget.dataset.index);
  if (gameOver || board[index]) return;

  board[index] = currentPlayer;
  renderCell(index);

  const result = checkWinner();
  if (result) {
    endGame(result);
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  els.status.textContent = `Player ${currentPlayer}'s turn`;
  els.status.classList.remove('is-win', 'is-draw');
}

function renderCell(index) {
  const cell = els.cells[index];
  cell.textContent = board[index];
  cell.dataset.mark = board[index];
  cell.disabled = true;
  cell.setAttribute('aria-label', cellLabel(index, board[index]));
}

function endGame(result) {
  gameOver = true;
  els.cells.forEach((cell) => { cell.disabled = true; });

  if (result.winner === 'draw') {
    els.status.textContent = "It's a draw!";
    els.status.classList.add('is-draw');
    els.status.classList.remove('is-win');
    scores.draw += 1;
    els.scoreDraw.textContent = scores.draw;
  } else {
    els.status.textContent = `Player ${result.winner} wins!`;
    els.status.classList.add('is-win');
    els.status.classList.remove('is-draw');
    result.line.forEach((i) => els.cells[i].classList.add('is-winning'));
    scores[result.winner] += 1;
    (result.winner === 'X' ? els.scoreX : els.scoreO).textContent = scores[result.winner];
  }
}

function resetBoard() {
  board = Array(9).fill(null);
  currentPlayer = 'X';
  gameOver = false;
  els.cells.forEach((cell, i) => {
    cell.textContent = '';
    cell.disabled = false;
    cell.classList.remove('is-winning');
    delete cell.dataset.mark;
    cell.setAttribute('aria-label', cellLabel(i, null));
  });
  els.status.textContent = "Player X's turn";
  els.status.classList.remove('is-win', 'is-draw');
}

els.cells.forEach((cell) => cell.addEventListener('click', handleCellClick));
els.resetBtn.addEventListener('click', resetBoard);
