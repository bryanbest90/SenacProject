document.addEventListener(
  "DOMContentLoaded",
  function () {
    var myHeaders = new Headers();
    var myInit = {
      method: "GET",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
    };

    const id = getItemIdInUrl();

    console.log("ID:", id);

    fetch(`http://localhost:8080/itens/${id}`, myInit)
      .then(function (response) {
        return response.json();
      })
      .then(function (item) {
        console.log(item);

        var img = document.getElementById("produto-img");
        img.src = item.image;
        img.className = "card-img-top img-fluid";
        img.alt = item.title;

        var title = document.getElementById("produto-title");
        title.textContent = item.title;

        var decription = document.getElementById("produto-description");
        decription.textContent = item.decription;

        var price = document.getElementById("produto-price");
        price.className = "card-text primary-color";
        price.textContent = "R$" + item.price.toFixed(2);
      });
  },
  false
);

function getItemIdInUrl() {
  // Obtém a URL atual
  const url = window.location.href;

  // Define uma expressão regular para encontrar o ID na URL
  const regex = /[\?&]id=(\d+)/;

  // Procura por correspondências na URL
  const match = url.match(regex);

  // Verifica se encontrou uma correspondência
  if (match) {
    const id = parseInt(match[1], 10); // Converte o valor para um número, se necessário
    return id;
  }
}
