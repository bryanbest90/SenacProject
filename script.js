function comprarProduto(produto) {
    // Redirecionar para a página específica do produto
    window.location.href = `produto_${produto}.html`;
  }
  // Função para rolar a página suavemente para o topo
// Função para rolar a página suavemente para o topo
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Mostra o link "Voltar ao topo" quando a página está no fim
window.addEventListener('scroll', function() {
  const navFooterBackToTop = document.getElementById('navFooterBackToTop');
  const footer = document.querySelector('footer');
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - footer.offsetHeight) {
    document.body.classList.add('show-back-to-top');
  } else {
    document.body.classList.remove('show-back-to-top');
  }
});


    function toggleMenu() {
      // Adicione aqui a lógica para mostrar/ocultar o menu ao clicar no ícone do hambúrguer
      console.log('Ícone do hambúrguer clicado!');
    }
    function toggleMenu(submenuId) {
      var submenu = document.getElementById(submenuId);
      if (submenu.style.display === 'none' || submenu.style.display === '') {
        submenu.style.display = 'block';
      } else {
        submenu.style.display = 'none';
      }
    }
  
  // Feche o submenu quando clicar em qualquer outro lugar da página
  document.addEventListener('click', function(event) {
      var categoriaLink = document.getElementById('categoriaLink');
      var submenu = document.getElementById('categoriaSubmenu');
      if (event.target !== categoriaLink && !categoriaLink.contains(event.target)) {
          submenu.style.display = 'none';
      }
  });
  

