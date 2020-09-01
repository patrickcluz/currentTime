function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `${hora} Hrs`;
  if (hora >= 0 && hora < 12) {
    // Bom dia!
    img.src = "fotomanha.png";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora < 18) {
    // Boa tarde!tarde.png ";
    img.src = "fototarde.png ";
    document.body.style.background = "rgb(187, 102, 5)";
  } else {
    // Boa noite!
    img.src = "fotonoite.png ";
    document.body.style.background = "rgb(32, 24, 17)";
  }
}
