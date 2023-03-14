function mostrarCampos() {
    let tipoPessoa = document.querySelector('input[name="person_type"]:checked').value;
    if (tipoPessoa == "estudante") {
        document.getElementById("titulo").textContent = "Formulário Aluno";
        document.getElementById("div-area").style.display = "none";
        document.getElementById("div-lattes").style.display = "none";
        document.getElementById("div-curso").style.display = "block";
    } else {
        document.getElementById("titulo").textContent = "Formulário Professor";
        document.getElementById("div-area").style.display = "block";
        document.getElementById("div-lattes").style.display = "block";
        document.getElementById("div-curso").style.display = "none";
    }
}

// Define a classe Pessoa
function Pessoa (nome, email, telF, telC, dtNasc, matricula) {
        this.nome = nome;
        this.email = email;
        this.telF = telF;
        this.telC = telC;
        this.dtNasc = dtNasc;
        this.matricula = matricula;
    }
    // Define a classe Estudante
function Estudante() {
    this.curso = curso;

    Pessoa.call(this, curso);
}

function Professor() {
    this.area = area;
    this.lattes = lattes;

    Pessoa.call(this, area, lattes);
}

let usuarios = [];
const form = document.getElementById("heranca-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const tipoPessoa = form.elements.person_type.value;
    const nome = form.elements.nome.value;
    const email = form.elements.email.value;
    const dataNasc = form.elements.dtNasc.value;
    const telefoneFixo = form.elements.telF.value;
    const telefoneCelular = form.elements.telC.value;
    const matricula = form.elements.matricula.value;

    let usuario;

    if (tipoPessoa === "estudante") {
      const curso = form.elements.curso.value;
      usuario = new Estudante(nome, email, dataNasc, telefoneFixo, telefoneCelular, matricula, tipoPessoa, curso);
    } else if (tipoPessoa === "professor") {
      const area = form.elements.area.value;
      const lattes = form.elements.lattes.value;
      usuario = new Professor(nome, email, dataNasc, telefoneFixo, telefoneCelular, tipoPessoa, matricula, area, lattes);
    }

    usuarios.push(usuario);
    form.reset();
    console.log(usuarios);

  });