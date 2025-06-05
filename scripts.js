fetch("products.json")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("product-list");
    data.forEach((produto) => {
      const card = document.createElement("div");
      card.className =
        "border rounded-lg overflow-hidden shadow hover:shadow-md transition";
      card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}" class="w-full h-48 object-cover object-top">
        <div class="p-4">
          <h3 class="font-semibold">${produto.nome}</h3>
          <p class="text-gray-600">${produto.preco}</p>
        </div>
      `;
      container.appendChild(card);
    });
  });
