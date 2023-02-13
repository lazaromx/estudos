"use strict";
class Player {
    constructor(name, height, weight, age) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.age = age;
    }
}
let player1 = new Player('Lázaro', 1.70, 67, 18);
console.log(player1);
