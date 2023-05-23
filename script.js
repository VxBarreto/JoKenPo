var voce;
var vocePontos =0;
var oponente;
var oponentePontos =0;

var opcoes = ["rock", "paper", "scissors"];

window.onload = function () {
    for (let i = 0; i < 3; i++) {
        let opcoes = document.createElement ("img");
        opcoes.id = opcoes[i];
        opcoes.src = opcoes[i] + ".png";
        document.getElementById("opcoes").append(opcoes);
        }
}