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

  let carro = new Carro(marca, modelo, ano, cor, km, valorFipe);

  document.getElementById("marca").innerHTML = "Marca: " + carro.marca;
  document.getElementById("modelo").innerHTML = "Modelo: " + carro.modelo;
  document.getElementById("ano").innerHTML = "Ano: " + carro.ano;
  document.getElementById("cor").innerHTML = "Cor: " + carro.cor;
  document.getElementById("km").innerHTML = "Kilometragem: " + carro.km;
  document.getElementById("valorFipe").innerHTML = "Fipe: " + carro.valorFipe;
  document.getElementById("anosUtilizacao").innerHTML = "Anos de utilização: " + carro.anosUtilizacao();
	document.getElementById("valorMercado").innerHTML = "Valor de mercado: R$ " + carro.valorMercado();
});
