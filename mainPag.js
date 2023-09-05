document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", async (event) => {
    const location = String(window.location);
    const url = location.replace(/\?pag=(.*)/, "") ?? location;

    window.location = url + "?pag=" + event.target.id;
  });
});
