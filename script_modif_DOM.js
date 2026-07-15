const imagesArray = [
  "https://img.icons8.com/color/480/000000/html-5.png",
  "https://img.icons8.com/color/480/000000/css3.png",
  "https://img.icons8.com/color/480/000000/javascript.png",
  "https://img.icons8.com/color/480/000000/ruby-programming-language.png",
  "https://img.icons8.com/color/480/000000/bootstrap.png",
  "https://img.icons8.com/color/480/000000/github.png",
  "https://i.imgur.com/bJE9Pka.png",
  "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4",
  "https://img.icons8.com/color/480/000000/heroku.png"
];

function changeTitles() {
  document.querySelector(".jumbotron-heading").textContent = "What I Learned at THP";
  document.querySelector(".jumbotron .lead").textContent =
    "THP is a full-time, three-month course that provides practical knowledge and helps students broaden their horizons. There are no teachers or classrooms, but instead an in-person working group. By the end of the course, the main web languages and tools will no longer hold any secrets for you!";
}

function changeCallToActions() {
  const buttons = document.querySelectorAll(".jumbotron a.btn");
  buttons[0].textContent = "OK, I want to try!";
  buttons[0].setAttribute("href", "http://www.thehackingproject.org");
  buttons[1].textContent = "No, Thanks";
  buttons[1].setAttribute("href", "https://www.pole-emploi.fr/accueil/");
}

function changeLogoName() {
  const logo = document.querySelector(".navbar-brand strong");
  logo.textContent = "The THP Experience";
  logo.style.fontSize = "2em";
}

function populateImages() {
  const images = document.querySelectorAll(".card-img-top");
  images.forEach((image, index) => {
    image.setAttribute("src", imagesArray[index]);
  });
}

function deleteLastCards() {
  for (let i = 0; i < 3; i += 1) {
    const cards = document.querySelectorAll(".album .row:first-child > .col-md-4");
    cards[cards.length - 1].remove();
  }
}

function changeCardsText() {
  const newTexts = [
    "HyperText Markup Language, commonly abbreviated as HTML, is the markup language designed to represent web pages.",
    "Cascading Style Sheets, commonly known as CSS, are a computer language used to describe the presentation of HTML and XML documents.",
    "JavaScript is a scripting programming language mainly used in interactive web pages, as well as on servers. It is a prototype-based, object-oriented language."
  ];
  const cardTexts = document.querySelectorAll(".card-text");
  newTexts.forEach((text, index) => {
    cardTexts[index].textContent = text;
  });
}

function changeViewButtons() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const viewButton = card.querySelector(".btn-group button:first-child");
    viewButton.classList.remove("btn-outline-secondary");
    viewButton.classList.add("btn-success");
  });
}

function moveThirdCard() {
  const container = document.querySelector(".album .container");
  const firstRow = container.querySelector(".row");
  const secondRow = document.createElement("div");
  secondRow.classList.add("row");
  firstRow.insertAdjacentElement("afterend", secondRow);

  const thirdCard = firstRow.children[2];
  secondRow.appendChild(thirdCard);
}

changeTitles();
changeCallToActions();
changeLogoName();
populateImages();
deleteLastCards();
changeCardsText();
changeViewButtons();
moveThirdCard();
