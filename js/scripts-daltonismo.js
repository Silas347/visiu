window.onload = function () {
  converterCores();
};

document
  .getElementById("botaoConverter")
  .addEventListener("click", function () {
    converterCores();
  });

function converterCores() {
  const corNormal1 = document.getElementById("corNormal1").value;
  const corNormal2 = document.getElementById("corNormal2").value;
  const corNormal3 = document.getElementById("corNormal3").value;
  const corNormal4 = document.getElementById("corNormal4").value;
  document.getElementById(
    "corProp1"
  ).style.backgroundColor = `#00${corNormal1.slice(3)}`;
  document.getElementById(
    "corProp2"
  ).style.backgroundColor = `#00${corNormal2.slice(3)}`;
  document.getElementById(
    "corProp3"
  ).style.backgroundColor = `#00${corNormal3.slice(3)}`;
  document.getElementById(
    "corProp4"
  ).style.backgroundColor = `#00${corNormal4.slice(3)}`;
  document.getElementById(
    "corDeura1"
  ).style.backgroundColor = `${corNormal1.slice(0, 3)}00${corNormal1.slice(5)}`;
  document.getElementById(
    "corDeura2"
  ).style.backgroundColor = `${corNormal2.slice(0, 3)}00${corNormal2.slice(5)}`;
  document.getElementById(
    "corDeura3"
  ).style.backgroundColor = `${corNormal3.slice(0, 3)}00${corNormal3.slice(5)}`;
  document.getElementById(
    "corDeura4"
  ).style.backgroundColor = `${corNormal4.slice(0, 3)}00${corNormal4.slice(5)}`;
  document.getElementById(
    "corTrita1"
  ).style.backgroundColor = `${corNormal1.slice(0, 5)}00`;
  document.getElementById(
    "corTrita2"
  ).style.backgroundColor = `${corNormal2.slice(0, 5)}00`;
  document.getElementById(
    "corTrita3"
  ).style.backgroundColor = `${corNormal3.slice(0, 5)}00`;
  document.getElementById(
    "corTrita4"
  ).style.backgroundColor = `${corNormal4.slice(0, 5)}00`;
}
