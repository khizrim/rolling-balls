import "./FormInput.css";

export class FormInput {
  constructor({ id, label, type, className, min, max, value, required, step }) {
    this.id = id;
    this.label = label;
    this.className = className;
    this.type = type;
    this.min = min;
    this.max = max;
    this.value = value;
    this.required = required;
    this.step = step;
  }

  render() {
    const input = document.createElement("input");
    input.classList.add("input", this.className);
    input.setAttribute("type", this.type);
    input.setAttribute("id", this.id);
    input.setAttribute("name", this.id);
    input.setAttribute("min", this.min);
    input.setAttribute("max", this.max);
    input.setAttribute("value", this.value);
    input.setAttribute("required", this.required);
    if (this.step) input.setAttribute("step", this.step);

    const label = document.createElement("label");
    label.setAttribute("for", this.id);
    label.innerText = this.label;

    const div = document.createElement("div");
    div.appendChild(label);
    div.appendChild(input);

    return div;
  }
}
