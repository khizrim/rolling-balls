import "./Header.css";

export class Header {
  constructor() {
    this.header = document.querySelector(".header");
    this.title = this.header.querySelector(".header__title");
    this.description = this.header.querySelector(".header__description");
  }

  setTitle(title) {
    this.title.textContent = title;
  }

  setDescription(description) {
    this.description.textContent = description;
  }
}
