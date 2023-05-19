var voce;
var vocePontos =0;
var oponente;
var oponentePontos =0;

var escolhas = ["pedra", "papel", "tesoura"];

window.onload = function () {
    for (let i = 0; i < 3; i++) {
        let escolhas = document.createElement ("img");
        escolha.id = escolhas[i];
        escolha.src = escolhas[i] + ".png";
        document.getElementById("escolhas").append(escolha);
        }
}