document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    window.location = "/" + event.target.parentNode.id + "." + event.target.id;
  });
});
