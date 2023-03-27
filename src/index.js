import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { Game } from "./components/Game/Game";

import { FORM_CREATE_BUTTON, FORM_INPUTS } from "./utils/constants";

const formElement = document.querySelector(".form-container");
const gamesElement = document.querySelector(".games");

const header = new Header();
header.setTitle("The Rolling Balls");
header.setDescription("Create playboards and Roll the Ball");

const form = new Form(FORM_INPUTS, [FORM_CREATE_BUTTON], handleFormSubmit);
formElement.appendChild(form.render());

function handleFormSubmit([width, height, delay]) {
  const game = new Game(width, height, delay);
  gamesElement.appendChild(game.render());
}
