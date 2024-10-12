//index.js
const handleClick = (ramen) => {
  const detailImage = document.querySelector(".detail-image");
  const detailName = document.querySelector(".name");
  const detailRestaurant = document.querySelector(".restaurant");
  const ratingDisplay = document.getElementById("rating-display");
  const commentDisplay = document.getElementById("comment-display");

  detailImage.src = ramen.image;
  detailName.textContent = ramen.name;
  detailRestaurant.textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;
};

const addSubmitListener = () => {
  const form = document.getElementById("new-ramen");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newRamen = {
      name: document.getElementById("new-name").value,
      restaurant: document.getElementById("new-restaurant").value,
      image: document.getElementById("new-image").value,
      rating: document.getElementById("new-rating").value,
      comment: document.getElementById("new-comment").value
    };

    const img = document.createElement("img");
    img.src = newRamen.image;
    img.alt = newRamen.name;
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.appendChild(img);

    img.addEventListener("click", () => handleClick(newRamen));

    form.reset();
  });
};

const displayRamens = async () => {
  const response = await fetch("http://localhost:3000/ramens");
  const ramens = await response.json();

  const ramenMenu = document.getElementById("ramen-menu");

  ramens.forEach(ramen => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    ramenMenu.appendChild(img);

    img.addEventListener("click", () => handleClick(ramen));
  });
};

const main = () => {
  displayRamens();

  addSubmitListener();
};

document.addEventListener("DOMContentLoaded", main);
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

