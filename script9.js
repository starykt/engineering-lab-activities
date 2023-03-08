class Carro {
  constructor(marca, modelo, ano, cor, km, valorFipe) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.km = km;
    this.valorFipe = valorFipe;
  }

  anosUtilizacao() {
    let anoAtual = new Date().getFullYear();
    let anos = anoAtual - this.ano;
    return anos;
  }

  valorMercado() {
    if (this.km <= 30000) {
      return this.valorFipe * 1.1;
    } else if (this.km > 30000 && this.km <= 50000) {
      return this.valorFipe;
    } else {
      return this.valorFipe * 0.9;
    }
  }
}

let form = document.getElementById('carro-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Capturando os valores dos campos do formulário
  let marca = document.getElementById('marca-input').value;
  let modelo = document.getElementById('modelo-input').value;
  let ano = parseInt(document.getElementById('ano-input').value);
  let cor = document.getElementById('cor-input').value;
  let km = parseInt(document.getElementById('km-input').value);
  let valorFipe = parseInt(document.getElementById('valor-input').value);

  // Criando um novo objeto Carro
  let carro = new Carro(marca, modelo, ano, cor, km, valorFipe);
  console.log('Marca: ' + carro.marca);
  console.log('Modelo: ' + carro.modelo);
  console.log('Ano: ' + carro.ano);
  console.log('Cor: ' + carro.cor);
  console.log('Kilometragem: ' + carro.km);
  console.log('Valor Fipe: ' + carro.valorFipe);
  console.log('Anos de utilização: ' + carro.anosUtilizacao());
  console.log('Valor de mercado: ' + carro.valorMercado());
});
