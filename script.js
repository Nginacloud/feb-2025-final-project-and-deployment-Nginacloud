// Sample product data
const products = [
    { name: "Wireless Headphones", price: 4999, image: "https://images.pexels.com/photos/5877660/pexels-photo-5877660.jpeg?auto=compress&cs=tinysrgb&h=226.525&fit=crop&w=253.17499999999998&dpr=2" },
    { name: "Smart Watch", price: 11999, image: "https://images.pexels.com/photos/2861929/pexels-photo-2861929.jpeg?cs=srgb&dl=pexels-vishven-solanki-1441477-2861929.jpg&fm=jpg&_gl=1*mrd2ug*_ga*MjAyNTcwMDI5NS4xNzQyNzE2Nzg5*_ga_8JE65Q40S6*czE3NDc2ODQ4ODQkbzkkZzEkdDE3NDc2ODQ5NzYkajAkbDAkaDA." },
    { name: "Bluetooth Speaker", price: 128899, image: "https://images.pexels.com/photos/373638/pexels-photo-373638.jpeg?cs=srgb&dl=pexels-pixabay-373638.jpg&fm=jpg&_gl=1*1elmieh*_ga*MjAyNTcwMDI5NS4xNzQyNzE2Nzg5*_ga_8JE65Q40S6*czE3NDc2ODQ4ODQkbzkkZzEkdDE3NDc2ODUwMTUkajAkbDAkaDA." },
  ];
  
  // Load products dynamically into the home page
  document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    if (productList) {
      products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}" style="max-width: 100%;">
          <h4>${product.name}</h4>
          <p>Ksh.${product.price.toFixed(2)}</p>
          <button onclick="addToCart('${product.name}')">Add to Cart</button>
        `;
        productList.appendChild(productCard);
      });
    }
  });
  
  // Simple cart functionality
  function addToCart(productName) {
    alert(`${productName} has been added to your cart.`);
  }
  