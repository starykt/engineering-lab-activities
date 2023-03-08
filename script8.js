let valores = [];

function adicionarValor() {

  const novoValor = document.getElementById("valor").value;

  valores.push(novoValor);
  valores.sort();

  const lista = document.getElementById("lista-valores");
  lista.innerHTML = "";
  for (const valor of valores) {
    const itemLista = document.createElement("li");
    itemLista.textContent = valor;
    lista.appendChild(itemLista);
  }
}