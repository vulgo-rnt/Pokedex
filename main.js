import { ListController } from "./controllers/ListController.js";

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const controller = new ListController(event.target);
    controller.list();
  });
});
