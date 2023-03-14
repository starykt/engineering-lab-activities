function mostrarCampos() {
    let tipoPessoa = document.querySelector('input[name="person_type"]:checked').value;
    if (tipoPessoa == "aluno") {
        document.getElementById("titulo").textContent = "Formulário Aluno";
        document.getElementById("div-area").style.display = "none";
        document.getElementById("div-lates").style.display = "none";
        document.getElementById("div-curso").style.display = "block";
    } else {
        document.getElementById("titulo").textContent = "Formulário Professor";
        document.getElementById("div-area").style.display = "block";
        document.getElementById("div-lates").style.display = "block";
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
    var curso;

    Pessoa.call(this, curso);
}

function Professor() {
    var area;
    var lattes;

    Pessoa.call(this, area, lattes);
}

const tipo_pessoa = document.getElementsByName("type_person");

if (tipo_pessoa == "professor") {
}

var estudante = new Estudante();
document.write(estudante.getNome());