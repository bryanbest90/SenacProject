document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Envia uma requisição POST ao endpoint do backend com os dados de login
    fetch('http://localhost:8080/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => {
        if (!response.ok) {
        }
        return response.json();
    })
    .then(data => {
        // Aqui você processa a resposta do servidor após a autenticação
        if (data.authenticated) {
            window.location.href = "area_pessoal.html";
        } else {
           
        }
    })
    
});

