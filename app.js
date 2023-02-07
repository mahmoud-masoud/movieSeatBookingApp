const seatsList = document.querySelectorAll(".row .seat:not(.occupied)");
const movies = document.getElementById("movie");
const numberOfSeats = document.getElementById("count");
const total = document.getElementById("total");

let counter = 0;
seatsList.forEach((seat) => {
  seat.addEventListener("click", () => {
    let moviePrice = +movies.options[movies.selectedIndex].value;
    seat.classList.toggle("selected");
    seat.classList.contains("selected") ? counter++ : counter--;

    numberOfSeats.textContent = counter;
    if (counter !== 0) {
      total.textContent = counter * moviePrice;
    } else {
      total.textContent = 0;
    }

    movies.addEventListener("change", () => {
      total.textContent = +movies.options[movies.selectedIndex].value * counter;
    });
  });
});
