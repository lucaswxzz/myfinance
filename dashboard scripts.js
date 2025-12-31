let entradas = 0;
let gastos = 0;

function atualizarPainel() {
  const saldo = entradas - gastos;

  document.querySelectorAll(".card h2")[0].innerText = `R$ ${saldo.toFixed(2)}`;
  document.querySelectorAll(".card h2")[1].innerText = `R$ ${entradas.toFixed(2)}`;
  document.querySelectorAll(".card h2")[2].innerText = `R$ ${gastos.toFixed(2)}`;
}

atualizarPainel();

