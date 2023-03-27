import { Cell } from "../Cell/Cell";
import { Button } from "../Button/Button";

import { BOARD_BUTTONS } from "../../utils/constants";

import "./Board.css";

export class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.cells = this.createCells();
    this.board = this.createBoard();
    this.activeCell = this.cells[0];
    this.activeCell.toggleActivity();
  }

  createBoard() {
    const board = document.createElement("section");
    board.classList.add("board");

    board.style.gridTemplateColumns = `repeat(${this.width}, 50px)`;
    board.style.gridTemplateRows = `repeat(${this.height}, 50px)`;

    const buttons = this.createBoardButtons();
    board.append(...this.cells.map((cell) => cell.cellElement), buttons);

    return board;
  }

  deactivateAllCells() {
    if (this.activeCell) {
      this.activeCell.toggleActivity();
      this.activeCell = null;
    }
  }

  createCells() {
    const cells = Array.from(
      { length: this.width * this.height },
      () => new Cell()
    );

    cells.forEach((cell) => {
      cell.cellElement.addEventListener("click", () => {
        this.deactivateAllCells();
        cell.toggleActivity();
        this.activeCell = cell;
      });
    });

    return cells;
  }

  createBoardButtons() {
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("board__buttons");

    const boardButtons = BOARD_BUTTONS.map((button) => {
      const buttonInstance = new Button(button);
      return buttonInstance.render();
    });

    buttonsContainer.append(...boardButtons);
    return buttonsContainer;
  }

  render() {
    return this.board;
  }
}
