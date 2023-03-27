import { Board } from "../Board/Board";

export class Game {
  constructor(boardWidth, boardHeight, delay) {
    this.board = new Board(boardWidth, boardHeight);
    this.delay = delay;
    this.intervalId = null;
    this.playBtn = this.board.board.querySelector("#play");
    this.stopBtn = this.board.board.querySelector("#stop");
    this.stopBtn.disabled = true;
    this.removeBtn = this.board.board.querySelector("#remove");

    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.handleBoardRemove = this.handleBoardRemove.bind(this);

    this.playBtn.addEventListener("click", this.play);
    this.stopBtn.addEventListener("click", this.stop);
    this.removeBtn.addEventListener("click", this.handleBoardRemove);
  }

  moveBall = () => {
    const currentIndex = this.board.cells.indexOf(this.board.activeCell);
    const nextIndex = (currentIndex + 1) % this.board.cells.length;

    const nextCell = this.board.cells[nextIndex];

    this.board.deactivateAllCells();
    this.board.activeCell = nextCell;
    nextCell.toggleActivity();
  };

  play() {
    this.intervalId = setInterval(this.moveBall, this.delay);

    this.playBtn.disabled = true;
    this.stopBtn.disabled = false;
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;

      this.playBtn.disabled = false;
      if (this.stopBtn.disabled) {
        this.stopBtn.disabled = false;
      }
    } else {
      this.board.deactivateAllCells();
      const startCell = this.board.cells[0];
      this.board.activeCell = startCell;
      startCell.toggleActivity();
      this.stopBtn.disabled = true;
    }
  }

  handleBoardRemove() {
    this.board.board.remove();
  }

  render() {
    return this.board.render();
  }
}
