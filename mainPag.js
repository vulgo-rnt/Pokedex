const data = window.require;

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(data);
  });
});
