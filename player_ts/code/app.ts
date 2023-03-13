interface IPlayer {
  name: string;
  height: number;
  weight: number;
  age: number;
}
// const player1: Player = {
//   name: 'John',
//   height: 180,
//   weight: 75,
//   age: 19
// }

function obtemPlayerForm(form: any) {
  let player: IPlayer = {
    name: form.nome.value,
    height: form.altura.value,
    weight: form.peso.value,
    age: form.idade.value,
  };

  return player;
}

function addTd(dado: string, classe: string) {
  const td = document.createElement("td");

  td.textContent = dado;
  td.classList.add(classe);
  
  return td;
}

function addTr(jogador: IPlayer) {
  
  const nomeTd = addTd(jogador.name, "info-nome");
  const alturaTd = addTd(jogador.height.toString(), "info-altura");
  const pesoTd = addTd(jogador.weight.toString(), "info-peso");
  const idadeTd = addTd(jogador.age.toString(), "info-idade");

  let linha = document.createElement("tr");
  linha.classList.add("jogador");
  linha.append(nomeTd, alturaTd, pesoTd, idadeTd);

  return linha;
}

function addPLayerTabela(jogador: IPlayer) {
  let jogadorTr = addTr(jogador);
  let tabela = document.querySelector(".tabela-jogador");
  tabela?.appendChild(jogadorTr);
  
  return jogadorTr;
}

const button = document.querySelector("#button-add");
button?.addEventListener("click", (event) => {
  event.preventDefault();

  let form:any = document.querySelector("#form-adiciona");

  let player = obtemPlayerForm(form);

  addPLayerTabela(player);

  form.reset()
});
