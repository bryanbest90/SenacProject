document.addEventListener('DOMContentLoaded', function() {
    // Verifique o status de login do usuário
    const usuarioLogado = true; // Substitua isso pela lógica real de verificação de login

    // Se o usuário estiver logado, redirecione para a área pessoal
    // Se não estiver logado, redirecione para a página de login
    const botaoUsuario = document.querySelector('.bi-person');

    if (botaoUsuario) {
        botaoUsuario.addEventListener('click', function() {
            if (usuarioLogado) {
                // Redirecione para a área pessoal
                window.location.href = 'area_pessoal.html'; // Substitua pelo URL real da área pessoal
            } else {
                // Redirecione para a página de login
                window.location.href = 'pagina_login.html'; // Substitua pelo URL real da página de login
            }
        });
    }
});
