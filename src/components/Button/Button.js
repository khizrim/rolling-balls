import "./Button.css";

export class Button {
  constructor({ id, type, className, disabled, text }) {
    this.id = id;
    this.type = type;
    this.className = className;
    this.disabled = disabled;
    this.text = text;
  }

  render() {
    const button = document.createElement("button");
    button.type = this.type || "button";
    button.classList.add("button", this.className);
    button.textContent = this.text;
    button.id = this.id;

    return button;
  }
}
