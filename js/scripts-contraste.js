let luminanciaRelativaCor1 = 0;
let luminanciaRelativaCor2 = 0;

window.onload = function () {
  const cor1 = document.getElementById("cor1").value;
  const cor2 = document.getElementById("cor2").value;
  document.getElementById("textoPequeno").style.color = cor1;
  document.getElementById("textoGrande").style.color = cor1;
  document.getElementById("compGraficos").style.color = cor1;
  document.getElementById("textoPequeno").style.backgroundColor = cor2;
  document.getElementById("textoGrande").style.backgroundColor = cor2;
  document.getElementById("compGraficos").style.backgroundColor = cor2;
  luminanciaRelativaCor1 =
    0.2126 * luminanciaRelativa(hexToRgb(cor1).r) +
    0.7152 * luminanciaRelativa(hexToRgb(cor1).g) +
    0.0722 * luminanciaRelativa(hexToRgb(cor1).b);
  luminanciaRelativaCor2 =
    0.2126 * luminanciaRelativa(hexToRgb(cor2).r) +
    0.7152 * luminanciaRelativa(hexToRgb(cor2).g) +
    0.0722 * luminanciaRelativa(hexToRgb(cor2).b);
  validaContraste(
    (luminanciaRelativaCor2 + 0.05) / (luminanciaRelativaCor1 + 0.05)
  );
};

document.getElementById("cor1").addEventListener("change", function (e) {
  mudaCor1(e.target.value);
});

function mudaCor1(e) {
  document.getElementById("textoPequeno").style.color = e;
  document.getElementById("textoGrande").style.color = e;
  document.getElementById("compGraficos").style.color = e;
  luminanciaRelativaCor1 =
    0.2126 * luminanciaRelativa(hexToRgb(e).r) +
    0.7152 * luminanciaRelativa(hexToRgb(e).g) +
    0.0722 * luminanciaRelativa(hexToRgb(e).b);
  validaContraste(
    (luminanciaRelativaCor2 + 0.05) / (luminanciaRelativaCor1 + 0.05)
  );
}

document.getElementById("cor2").addEventListener("change", function (e) {
  mudaCor2(e.target.value);
});

function mudaCor2(e) {
  document.getElementById("textoPequeno").style.backgroundColor = e;
  document.getElementById("textoGrande").style.backgroundColor = e;
  document.getElementById("compGraficos").style.backgroundColor = e;
  luminanciaRelativaCor2 =
    0.2126 * luminanciaRelativa(hexToRgb(e).r) +
    0.7152 * luminanciaRelativa(hexToRgb(e).g) +
    0.0722 * luminanciaRelativa(hexToRgb(e).b);
  validaContraste(
    (luminanciaRelativaCor2 + 0.05) / (luminanciaRelativaCor1 + 0.05)
  );
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function luminanciaRelativa(letraC) {
  let contaC = letraC / 255;

  if (contaC > 0.03928) {
    contaC = Math.pow((contaC + 0.055) / 1.055, 2.4);
  } else {
    contaC = contaC / 12.92;
  }

  return contaC;
}

document.getElementById("botaoInverte").addEventListener("click", function () {
  const cor1 = document.getElementById("cor1").value;
  const cor2 = document.getElementById("cor2").value;
  document.getElementById("cor1").value = cor2;
  document.getElementById("cor2").value = cor1;
  mudaCor1(cor2);
  mudaCor2(cor1);
});

function validaContraste(contraste) {
  if (contraste < 3) {
    document.getElementById("textoGrandeValida").innerHTML =
      "Texto Grande <i class='bi bi-exclamation-circle'></i>";
    document.getElementById(
      "proporcaoContraste"
    ).innerHTML = `${contraste} <i class='bi bi-exclamation-circle'></i>`;
  } else {
    document.getElementById("textoGrandeValida").innerHTML = "Texto Grande";
    document.getElementById("proporcaoContraste").innerHTML = `${contraste}`;
  }

  if (contraste < 4.5) {
    document.getElementById("textoPequenoValida").innerHTML =
      "Texto Pequeno <i class='bi bi-exclamation-circle'></i>";
    document.getElementById("compGraficoValida").innerHTML =
      "Componentes Gráficos <i class='bi bi-exclamation-circle'></i>";
    document.getElementById(
      "proporcaoContraste"
    ).innerHTML = `${contraste} <i class='bi bi-exclamation-circle'></i>`;
  } else {
    document.getElementById("textoPequenoValida").innerHTML = "Texto Pequeno";
    document.getElementById("compGraficoValida").innerHTML =
      "Componentes Gráficos";
    document.getElementById("proporcaoContraste").innerHTML = `${contraste}`;
  }
}
