// Constants
const ACTIVE_TIME_MS = 15000;
const DEACTIVATION_TIME_MS = 13750;

// Variables
var felix = document.getElementById("felix");
var responseFrame = document.getElementById("response-frame");
var responseMessage = document.getElementById("response-message");
var userMadeDecision = false;
var jokes = [
  "I ate a clock yesterday, it was very time-consuming.",
  "A perfectionist walked into a bar…apparently, the bar wasn’t set high enough.",
  "Employee of the month is a good example of how somebody can be both a winner and a loser at the same time.",
  "I don’t have a girlfriend, but I know a girl that would get really mad if she heard me say that.",
  "Relationships are great, but have you ever had stuffed crust pizza?",
  "The worst time to have a heart attack is during a game of charades.",
  "My therapist says I have a preoccupation with vengeance. We’ll see about that.",
  "I have a friend. He keeps trying to convince me he’s a compulsive liar, but I don’t believe him.",
];

// Activate felix and set timeout for awaiting a command.
function activateFelix() {
  userMadeDecision = false;
  felix.classList.remove("inactive");
  felix.classList.add("active");
  setTimeout(function () {
    if (!userMadeDecision) {
      felix.classList.remove("active");
      felix.classList.add("inactive");
      setTimeout(function () {
        felix.classList.remove("inactive");
      }, 750);
    }
  }, 5000);
}
function deactivateFelix() {
  userMadeDecision = true;
  felix.classList.remove("active");
  felix.classList.add("inactive");
  setTimeout(function () {
    felix.classList.remove("inactive");
  }, 10750);
}
function getWeather() {
  responseMessage.innerText =
    "The weather really just kind of sucks here, and I know you wanted the weather at your location, but that's life for you.";
  showResponse();
}
function getTime() {
  // Título
  var title =
    "Bueno, hay muchas más cosas que le puedan gustar, como por ejemplo:";

  // Lista de cosas que podrían gustar
  var things = [
    "Las muñecas de cermica",
    "la navidad",
    "estar con nosotros",
    "La lechona",
    "cocer",
    "dibujar vestidos",
    "La ropa de Zara",
    "Vestir muñecas",
    "Y muchas mas cosas...",
    // Agrega más elementos si lo deseas
  ];

  // Construye la lista de cosas que podrían gustar
  var list = "<ul>";
  for (var i = 0; i < things.length; i++) {
    list += "<li>" + things[i] + "</li>";
  }
  list += "</ul>";

  // Establece el mensaje de respuesta como el título seguido de la lista
  responseMessage.innerHTML = title + list;

  // Muestra la respuesta
  showResponse();
}
function getDate() {
  // Crear una nueva fecha para el 25 de enero de 2003
  var customDate = new Date(1970, 10, 13); // El mes se indexa desde 0 (enero es 0)

  // Obtener los componentes de la fecha personalizada
  var month = customDate.getMonth() + 1; // Sumamos 1 porque los meses se indexan desde 0
  var day = customDate.getDate();
  var year = customDate.getFullYear();

  // Formatear la fecha como "mm/dd/yyyy"
  var formattedDate = month + "/" + day + "/" + year;

  // Establecer el mensaje personalizado
  responseMessage.innerText =
    "Este día nació la mejor mamá del mundo! " + formattedDate + ".";

  // Mostrar la respuesta
  showResponse();
}
function tellJoke() {
  // Cambiamos el mensaje por "La Orquídea"
  responseMessage.innerHTML = '<span class="orchid-text">Las rosas</span>';

  // Agregamos una clase única a la imagen
  responseMessage.innerHTML +=
    '<img class="orchid-image" src="https://www.fundacionaquae.org/wp-content/uploads/2021/09/rosa-1-e1631864381818.jpg" alt="Orquídea">';

  showResponse();
}
function searchGoogle() {
  deactivateFelix();
  window.open(
    "https://www.youtube.com/watch?v=nYnLVWXmRm8&ab_channel=LODVGVEVO",
    "_blank"
  );
}
function showInspiration() {
  responseMessage.innerHTML =
    '<span class="orchid-text">El mas lindo soy yo</span>';

  // Agregamos una clase única a la imagen
  responseMessage.innerHTML +=
    '<img class="orchid-image" src="./imagennosotros.jpg" alt="Orquídea">';

  showResponse();
}
function showResponse() {
  responseFrame.classList.add("active");
  deactivateFelix();
}
function closeResponse() {
  responseFrame.classList.remove("active");
}
changeTheme(SiteTheme.Dark);
