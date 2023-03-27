import "./Cell.css";

export class Cell {
  constructor() {
    this.cellElement = this.createCellElement();
  }

  createCellElement() {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    return cell;
  }

  toggleActivity() {
    this.cellElement.classList.toggle("active");
  }

  isActive() {
    return this.cellElement.classList.contains("active");
  }
}
