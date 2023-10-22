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
      .then(function (data) {
        console.log(data);
        var bestSellersContainer = document.getElementById('best-sellers');
  
        data.forEach(item => {
          var col = document.createElement('div');
          col.className = 'col-12 col-md-3';
  
          var card = document.createElement('div');
          card.className = 'card primary-bg-color';
  
          var likeCount = 0; // Contador de curtidas
    var isLiked = false; // Verifica se o card foi curtido

    var likeIcon = document.createElement('i');
    likeIcon.className = 'bi bi-heart like-icon';
    likeIcon.addEventListener('click', function () {
        if (isLiked) {
            likeIcon.classList.remove('liked');
            likeCount--;
        } else {
            likeIcon.classList.add('liked');
            likeCount++;
        }
        isLiked = !isLiked;
        updateLikeCount();
    });

    function updateLikeCount() {
        likeCountSpan.textContent = likeCount;
        // Atualize o contador de curtidas na barra de navegação
        var heartIconNav = document.getElementById('heart-icon');
        heartIconNav.parentElement.querySelector('.qty-info').textContent = likeCount;
    }
  
          var likeCountSpan = document.createElement('span');
          likeCountSpan.className = 'like-count';
          updateLikeCount();
  
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
  
          cardBody.appendChild(category);
          cardBody.appendChild(title);
          cardBody.appendChild(price);
          cardBody.appendChild(buyButton);
  
          card.appendChild(likeCountSpan);
          card.appendChild(likeIcon);
          card.appendChild(img);
          card.appendChild(cardBody);
  
          col.appendChild(card);
          bestSellersContainer.appendChild(col);
        });
      });
  }, false);
  