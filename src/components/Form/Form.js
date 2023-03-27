import { Button } from "../Button/Button";
import { FormInput } from "../FormInput/FormInput";

import "./Form.css";

export class Form {
  constructor(inputs, buttons, onSubmit) {
    this.inputs = inputs;
    this.buttons = buttons;
    this.onSubmit = onSubmit;
  }

  render() {
    const form = document.createElement("form");
    form.classList.add("form");

    this.inputs.forEach((input) => {
      const formInput = new FormInput(input);
      form.appendChild(formInput.render());
    });

    this.buttons &&
      this.buttons.forEach((button) => {
        const formButton = new Button(button);

        form.appendChild(formButton.render());
      });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const inputValues = Array.from(formData.entries()).map(
        (entry) => entry[1]
      );

      this.onSubmit(inputValues);
    });

    return form;
  }
}
