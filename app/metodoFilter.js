const botoes = document.querySelectorAll(".btn");
botoes.forEach((botao) => botao.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  const botao = document.getElementById(this.id);
  const categoria = botao.value;
  let livrosFiltrados =
    categoria == "disponivel"
      ? filtrarPorDisponibilidade()
      : filtrarPorCategoria(categoria);
  exibirLivrosNaTela(livrosFiltrados);
  if (categoria == "disponivel") {
    const valorTotal = calcularTotalLivrosDisponiveis(livrosFiltrados);
    exibirValorTotalDosLivrosDisponiveis(valorTotal);
  }
}

function filtrarPorCategoria(categoria) {
  return livros.filter((livro) => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
  return livros.filter((livro) => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveis(valorTotal) {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
  <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
  `;
}
