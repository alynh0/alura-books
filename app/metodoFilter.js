const botoes = document.querySelectorAll(".btn");
botoes.forEach((botao) => botao.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  const botao = document.getElementById(this.id);
  const categoria = botao.value;
  let livrosFiltrados = livros.filter((livro) => livro.categoria == categoria);
  exibirLivrosNaTela(livrosFiltrados);
}
