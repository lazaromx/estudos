"use strict";
class Player {
    constructor(name, height, weight, age) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.age = age;
    }
    get nome() {
        return this.name;
    }
    get altura() {
        return this.height;
    }
    get peso() {
        return this.weight;
    }
    get idade() {
        return this.age;
    }
}
const player = new Player("John", 1.8, 70, 18);
function addTr() {
    var _a;
    let nomeTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let idadeTd = document.createElement("td");
    nomeTd.textContent = player.nome;
    alturaTd.textContent = player.altura.toString();
    pesoTd.textContent = player.peso.toString();
    idadeTd.textContent = player.idade.toString();
    let linha = document.createElement("tr");
    linha.append(nomeTd, alturaTd, pesoTd, idadeTd);
    (_a = document.querySelector(".tabela")) === null || _a === void 0 ? void 0 : _a.appendChild(linha);
}
const button = document.querySelector("#button-add");
button === null || button === void 0 ? void 0 : button.addEventListener("click", addTr);
