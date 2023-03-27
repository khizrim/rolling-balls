export const FORM_INPUTS = [
  {
    id: "width",
    label: "Width:",
    type: "number",
    min: "2",
    max: "20",
    value: "4",
    required: true
  },
  {
    id: "height",
    label: "Height:",
    type: "number",
    min: "2",
    max: "20",
    value: "4",
    required: true
  },
  {
    id: "delay",
    label: "Delay (ms):",
    type: "number",
    min: "50",
    step: "50",
    value: "500",
    required: true
  }
];

export const FORM_CREATE_BUTTON = {
  id: "create",
  type: "submit",
  className: "form__button",
  text: "Create"
};

export const BOARD_BUTTONS = [
  { id: "play", text: "Play" },
  { id: "stop", text: "Stop" },
  { id: "remove", text: "X" }
];
