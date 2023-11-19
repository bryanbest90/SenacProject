document.addEventListener('DOMContentLoaded', function() {
    var myHeaders = new Headers();
    var myInit = {
        method: "GET",
        headers: myHeaders,
        mode: "cors",
        cache: "default",
    };

    const openModalButton = document.querySelector('#open-modal');
    const closeModalButton = document.querySelector('#close-modal');
    const modal = document.querySelector('#modal');
    const fade = document.querySelector('#fade');

    const toggleModal = () => {
        [modal, fade].forEach((el) => el.classList.toggle('hide'));
    };

    [openModalButton, closeModalButton, fade].forEach((el) => {
        el.addEventListener('click', () => toggleModal());
    });

    fetch("http://localhost:8080/itens", myInit)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var bestSellersContainer = document.getElementById('best-sellers');
            bestSellersContainer.classList.add('row');

            data.forEach(item => {
                var col = document.createElement('div');
                col.className = 'col-12 col-md-4 mb-4'; // Colunas para dispositivos pequenos e médios

                var card = document.createElement('div');
                card.className = 'card primary-bg-color h-100';

                var detailLink = document.createElement('a');
                detailLink.href = 'detalhes.html?id=' + item.id;
                detailLink.className = 'card-link';

                var img = document.createElement('img');
                img.src = item.image;
                img.className = 'card-img-top img-fluid';
                img.alt = item.title;

                var cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                var category = document.createElement('p');
                category.className = 'card-category secondary-color';
                category.textContent = item.category;

                var title = document.createElement('h5');
                title.className = 'card-title';
                // Limitar o título a 45 caracteres com "..." em caso de excesso
                title.textContent = item.title.length <= 45 ? item.title : item.title.substring(0, 45) + '...';

                var price = document.createElement('p');
                price.className = 'card-text';
                price.textContent = 'R$' + item.price.toFixed(2);

                var buyButton = document.createElement('a');
                /* buyButton.href = item.buyUrl; */
                buyButton.className = 'btn btn-primary';
                buyButton.textContent = 'Adicionar ao carrinho';

                buyButton.onclick = function() {

                    var bestSellersContainer = document.getElementById('modal');
                    bestSellersContainer.classList.add('row');
                    
                    var col = document.createElement('div');
                    col.className = 'col-12 col-md-4 mb-4'; // Colunas para dispositivos pequenos e médios

                    var card = document.createElement('div');
                    card.className = 'card primary-bg-color h-100 cart';

                    var detailLink = document.createElement('a');
                    detailLink.href = 'detalhes.html?id=' + item.id;
                    detailLink.className = 'card-link';

                    var img = document.createElement('img');
                    img.src = item.image;
                    img.className = 'card-img-top img-fluid';
                    img.alt = item.title;

                    var cardBody = document.createElement('div');
                    cardBody.className = 'card-body';

                    var category = document.createElement('p');
                    category.className = 'card-category secondary-color';
                    category.textContent = item.category;

                    var title = document.createElement('h5');
                    title.className = 'card-title';
                    // Limitar o título a 45 caracteres com "..." em caso de excesso
                    title.textContent = item.title.length <= 45 ? item.title : item.title.substring(0, 45) + '...';

                    var price = document.createElement('p');
                    price.className = 'card-text';
                    price.textContent = 'R$' + item.price.toFixed(2);

                    var removeButton = document.createElement('a');
                    /* buyButton.href = item.buyUrl; */
                    removeButton.className = 'btn btn-primary';
                    removeButton.textContent = 'Remover';

                    removeButton.onclick = function(event) {
                        var remove = event.target.parentElement.parentElement;
                        remove.remove();
                    }

                    /* const cartProducts = document.getElementsByClassName('card primary-bg-color h-100 cart');
                        for(var i = 0; i < cartProducts.length; i++) {
                            console.log(cartProducts[i]);
                    } */
                    
                    cardBody.appendChild(category);
                    cardBody.appendChild(title);
                    cardBody.appendChild(price);
                    cardBody.appendChild(removeButton);

                    detailLink.appendChild(img);
                    card.appendChild(detailLink);
                    card.appendChild(cardBody);

                    col.appendChild(card);
                    bestSellersContainer.appendChild(col);

                }
               
                cardBody.appendChild(category);
                cardBody.appendChild(title);
                cardBody.appendChild(price);
                cardBody.appendChild(buyButton);

                detailLink.appendChild(img);
                card.appendChild(detailLink);
                card.appendChild(cardBody);

                col.appendChild(card);
                bestSellersContainer.appendChild(col);
            });
        })
        fetch("http://localhost:8080/itens/newItems", myInit)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var newProductsContainer = document.getElementById('new-products');
        newProductsContainer.classList.add('row');

        // Divide os dados em grupos de 3
        var groups = [];
        for (var i = 0; i < data.length; i += 3) {
            groups.push(data.slice(i, i + 3));
        }

        groups.forEach(group => {
            var row = document.createElement('div');
            row.className = 'row';
            group.forEach(item => {
                var col = document.createElement('div');
                col.className = 'col-12 col-md-4 mb-4'; // Colunas para dispositivos pequenos e médios

                var card = document.createElement('div');
                card.className = 'card primary-bg-color h-100';

                var detailLink = document.createElement('a');
                detailLink.href = 'detalhes.html?id=' + item.id;
                detailLink.className = 'card-link';

                var img = document.createElement('img');
                img.src = item.image;
                img.className = 'card-img-top img-fluid';
                img.alt = item.title;

                var cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                var category = document.createElement('p');
                category.className = 'card-category secondary-color';
                category.textContent = item.category;

                var title = document.createElement('h5');
                title.className = 'card-title';
                // Limitar o título a 45 caracteres com "..." em caso de excesso
                title.textContent = item.title.length <= 45 ? item.title : item.title.substring(0, 45) + '...';

                var price = document.createElement('p');
                price.className = 'card-text';
                price.textContent = 'R$' + item.price.toFixed(2);

                var buyButton = document.createElement('a');
                buyButton.href = item.buyUrl;
                buyButton.className = 'btn btn-primary';
                buyButton.textContent = 'Adicionar ao carrinho';

                cardBody.appendChild(category);
                cardBody.appendChild(title);
                cardBody.appendChild(price);
                cardBody.appendChild(buyButton);

                detailLink.appendChild(img);
                card.appendChild(detailLink);
                card.appendChild(cardBody);

                col.appendChild(card);
                row.appendChild(col);
            });

            newProductsContainer.appendChild(row);
        });

        var detailsButton = document.createElement('a');
        detailsButton.href = 'detalhes.html'; // Página de detalhes
        detailsButton.className = 'btn btn-primary';
        detailsButton.textContent = 'Ver Mais';

        newProductsContainer.appendChild(detailsButton);
    });

}, false);