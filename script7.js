function isPalindrome(str) {
  // remover espaços e transformar em letras minúsculas
  str = str.replace(/\s/g, '').toLowerCase();
  
  // criar uma string reversa para comparar
  var reverseStr = str.split('').reverse().join('');
  
  // verificar se as duas strings são iguais
  if(str === reverseStr) {
    return true;
  } else {
    return false;
  }
}

function verificar() {
  // obter o valor do input
  var input = document.getElementById("texto").value;
  
  // verificar se é um palíndromo
  if(isPalindrome(input)) {
    alert(input + " é um palíndromo!");
  } else {
    alert(input + " não é um palíndromo.");
  }
}