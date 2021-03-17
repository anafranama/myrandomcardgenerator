/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let simbolos = ["\u2660", "\u2663", "\u2665", "\u2666"];
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let colores = ["red", "black"];

let simboloSeleccionado = simbolos[Math.floor(Math.random() * simbolos.length)];
let numeroseleccionado = numeros[Math.floor(Math.random() * numeros.length)];
let colorseleccionado = colores[Math.floor(Math.random() * colores.length)];

console.log(simboloSeleccionado, numeroseleccionado, colorseleccionado);

document.getElementById("corazon1").innerHTML = simboloSeleccionado;
document.getElementById("corazon1").style.color = colorseleccionado;

document.getElementById("numerocentral").innerHTML = numeroseleccionado;
document.getElementById("numerocentral").style.color = "black";

document.getElementById("corazon2").innerHTML = simboloSeleccionado;
document.getElementById("corazon2").style.color = colorseleccionado;
