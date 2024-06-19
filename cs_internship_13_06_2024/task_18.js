document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.getElementById('product-grid');
  
    
  const products = [
    {"id": 1, "name": "Redmi Note 10 pro", "price": "Price: 15,000 RS", "image": "https://images.unsplash.com/photo-1635434651542-bcd747240352?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "description": "Polycarbonate Back design"},
    {"id": 2, "name": "Realme 5 Pro", "price":  "Price: 15,000 RS", "image": "https://images.unsplash.com/photo-1628581878580-0f39a950ad1b?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "description": "Cutting Edge Design"},
    {"id": 3, "name": "Realme X", "price": "Price: 17,000 Rs", "image": "https://images.unsplash.com/photo-1631871633283-31be5e55a29a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "description": "Segment first dual camera phone"},
    {"id": 4, "name": "Realme Watch 2", "price":"Price: 3,000 RS", "image": "https://images.unsplash.com/photo-1602248145578-9e5bc50c77b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbG1lfGVufDB8fDB8fHww", "description": "Cristal clear Amoled display"},
    {"id": 5, "name": "Poco M3 pro ", "price": "13000 Rs", "image": "https://images.unsplash.com/photo-1615215271299-608ada121f72?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "description": "Killing Competition"},
    {"id": 6, "name": "iphone X", "price": "99,999 RS", "image": "https://plus.unsplash.com/premium_photo-1680458723013-d0a87694f16f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "description": "Worlds first Face unlock Device"},
    {"id": 7, "name": "iphone Xs max", "price": "Price: 1,20,000 RS", "image": "https://images.unsplash.com/photo-1625123507485-36cbd6719438?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "description": "Longer Battery Life"},
    {"id": 8, "name": "Motorola Phone", "price": "Price: 7,000 RS", "image": "https://images.unsplash.com/photo-1614767464582-b23a647d835f?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "description": "Best for old age persons"},
    {"id": 9, "name": "Moto Razer 1", "price":"Price: 1,00,000", "image": "https://images.unsplash.com/photo-1614767464545-533644010662?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "description": "Best Compact device of all time"},
    {"id": 10, "name": "Macbook Air", "price": "Price: 99,999 Rs", "image": "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "description": "No Cooler only Air"},
    {"id": 11, "name": "Macbook Pro", "price": "Price: 1,50,000 Rs", "image": "https://images.unsplash.com/photo-1588601515608-6a6814976b50?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "description": "Better Then You Think"},
    {"id": 12, "name": "Macbook Pro M2", "price": "Price: 2,00,000 Rs", "image": "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "description": "With the most powerfull processor of all time yet"},
    {"id": 13, "name": "Samsung Galaxy Note 20", "price": "Price: 1,00,000", "image": "https://images.unsplash.com/photo-1597762470488-3877b1f538c6?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "description": "Magic of S-Pen"},
    {"id": 14, "name": "Macbook Pro M1", "price":"Price: 1,50,000 Rs", "image": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D", "description": "Perfect Laptop for coding"},
    {"id": 15, "name": "Apple Airpods", "price": "Price: 10,000 Rs", "image": "https://images.unsplash.com/photo-1592921870583-aeafb0639ffe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwcG9kc3xlbnwwfHwwfHx8MA%3D%3D", "description": "Best Active Noice Cancellation TWS"},
    {"id": 16, "name": "Samsung Galaxy M31s", "price": "Price: 20,000 Rs", "image": "https://images.unsplash.com/photo-1609252924198-30b8cb324d2b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "description": "Biggest Battery Smartphone"}      
  ];
  
  
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <p>${product.description}</p>
    `;
  
    productElement.addEventListener('click', function() {
      // Handle click event to show more details
      alert(`Clicked on ${product.name}`);
    });
  
    productGrid.appendChild(productElement);
  });
  }
  
  );
  
  