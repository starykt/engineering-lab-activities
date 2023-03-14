let valor = document.getElementById("valor");
let novoBotao = document.getElementById("novoBotao");
let todoList = document.getElementById("todoList");

novoBotao.addEventListener("click", addItem);
function addItem() {
	let li = document.createElement("li");
	li.innerText = valor.value;

	let excluir = document.createElement("img");
	excluir.setAttribute("src", "lixo.png");
	excluir.addEventListener("click", () => {
		li.remove();
	});
	li.appendChild(excluir);
	let cima = document.createElement("img");
	cima.setAttribute("src", "cima.png");
	cima.addEventListener("click", () => {
		let prevLi = li.previousSibling;
		if (prevLi) {
			todoList.insertBefore(li, prevLi);
		}
	});
	li.appendChild(cima);

	let baixo = document.createElement("img");
	baixo.setAttribute("src", "baixo.png");
	baixo.addEventListener("click", () => {
		let nextLi = li.nextSibling;
		if (nextLi) {
			todoList.insertBefore(nextLi, li);
		}
	});
	li.appendChild(baixo);
	todoList.appendChild(li);
	valor.value = "";
}
