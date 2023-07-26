const card = document.querySelector(".card");
const button = document.querySelector("#read_button");

button.addEventListener("click", () => {
  card.classList.toggle("active");
  if (card.classList.contains("active")) {
    return (button.innerText = "Read Less");
  }

  button.innerText = "Read More";
});
