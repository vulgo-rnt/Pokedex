document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    window.location = location.pathname + event.target.id;
  });
});