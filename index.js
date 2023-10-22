document.addEventListener('DOMContentLoaded', function() {
    var myHeaders = new Headers();
    var myInit = {
        method: "GET",
        headers: myHeaders,
        mode: "cors",
        cache: "default",
    };

    fetch("http://localhost:8080/itens", myInit)
    .then(function (response) {
        return response.json();
    })
    .then(function (data){
        console.log(data);
        var bestSellersContainer = document.getElementById('best-sellers');

        data.forEach(item => {
            var col = document.createElement('div');
            col.className = 'col-12 col-md-3';
            var card = document.createElement('div');
            card.className = 'card primary-bg-color';

            // Adicione um link para a página de detalhes
            var detailLink = document.createElement('a');
            detailLink.href = 'detalhes.html?id=' + item.id; // Substitua 'detalhes.html' pelo caminho da sua página de detalhes
            detailLink.className = 'card-link'; // Adicione uma classe para o link

            var img = document.createElement('img');
            img.src = item.imageUrl;
            img.className = 'card-img-top img-fluid';
            img.alt = item.altText;

            var cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            var category = document.createElement('p');
            category.className = 'card-category secondary-color';
            category.textContent = item.category;

            var title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = item.name;

            var price = document.createElement('p');
            price.className = 'card-text primary-color';
            price.textContent = 'R$' + item.price.toFixed(2);

            var buyButton = document.createElement('a');
            buyButton.href = item.buyUrl;
            buyButton.className = 'btn btn-primary';
            buyButton.textContent = 'Comprar';

            // Adicione o evento de clique para o card inteiro
            card.addEventListener('click', function() {
                window.location.href = detailLink.href;
            });

            cardBody.appendChild(category);
            cardBody.appendChild(title);
            cardBody.appendChild(price);
            cardBody.appendChild(buyButton);

            detailLink.appendChild(img); // Aninhe a imagem dentro do link de detalhes

            card.appendChild(detailLink); // Adicione o link de detalhes ao card
            card.appendChild(cardBody);

            col.appendChild(card);
            bestSellersContainer.appendChild(col);
        });
    })
}, false);
