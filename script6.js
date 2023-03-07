function exibirHorario() {
  let data = new Date();
  let horas = data.getHours();
  let minutos = data.getMinutes();
  let segundos = data.getSeconds();
  let relogio = document.getElementById("relogio");

  let horasTexto =horas < 10 ? '0' + horas :horas.toString();
  let minutosTexto = minutos < 10 ? '0' + minutos : minutos.toString();
  let segundosTexto = segundos < 10 ? '0' + segundos :segundos.toString();

  relogio.textContent = `${horasTexto}:${minutosTexto}:${segundosTexto}`;

  // Agendar a próxima atualização do horário
  setTimeout(exibirHorario, 1000);
  }

  // Iniciar o relógio
  exibirHorario();