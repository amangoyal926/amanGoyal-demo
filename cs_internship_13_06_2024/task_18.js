document.addEventListener('DOMContentLoaded', function() {
  fetch('products.json')
      .then(response => response.json())
      .then(products => {
          const productGrid = document.getElementById('product-grid');

          products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>${product.price}</p>
              <p>${product.description}</p>
            `;
          
            productGrid.appendChild(productElement);
          
            productElement.addEventListener('click', function() {
              const urlParams = new URLSearchParams();
              urlParams.append('image', product.image);
              urlParams.append('name', product.name);
              urlParams.append('price', product.price);
              // urlParams.append('description', product.description);
              urlParams.append('breaf', product.breaf);
              
              window.location.href = `product-details.html?${urlParams.toString()}`;
          });
          
            
          });
      })
      .catch(error => console.error('Error fetching product data:', error));
});
