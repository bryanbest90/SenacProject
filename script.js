function comprarProduto(produto) {
    // Redirecionar para a página específica do produto
    window.location.href = `produto_${produto}.html`;
  }
  // Função para rolar a página suavemente para o topo
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Mostra o link "Voltar ao topo" quando a página é rolada
window.addEventListener('scroll', function() {
  const navFooterBackToTop = document.getElementById('navFooterBackToTop');
  if (window.pageYOffset > 200) { // Exibir após rolar 200 pixels
    document.body.classList.add('show-back-to-top');
  } else {
    document.body.classList.remove('show-back-to-top');
  }
});
