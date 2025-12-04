import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


//write your code here
const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const palos = ["♥", "♦", "♣", "♠",];
const colors = ["red", "black"]

function RandomGenerator() {
  const valor = valores[Math.floor(Math.random() * valores.length)];
  const palo = palos[Math.floor(Math.random() * palos.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return { valor, palo, color };
}

function NewCard() {
  const RandomCard = RandomGenerator();
  document.getElementById("topLeft").innerHTML = RandomCard.palo;
  document.getElementById("bottomRight").innerHTML = RandomCard.palo;
  document.getElementById("centerSymbol").innerHTML = RandomCard.valor;
  document.getElementById("card").style.color = RandomCard.color;
  return NewCard;
}

document.getElementById("button").onclick = NewCard()








