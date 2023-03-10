class Player {
  constructor(
    public name: string,
    public height: number,
    public weight: number,
    public age: number
  ) {}

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

  document.querySelector(".tabela")?.appendChild(linha);
}

const button = document.querySelector("#button-add");
button?.addEventListener("click", addTr);


