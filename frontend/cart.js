document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    function renderCart() {
      cartItemsContainer.innerHTML = '';
      let totalPrice = 0;
  
      cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.price}</p>
          <button class="remove-from-cart" data-id="${item.id}">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
  
        totalPrice += parseFloat(item.price.replace('$', ''));
      });
  
      totalPriceElement.innerText = totalPrice.toFixed(2);
  
      // Add event listeners for remove buttons
      document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', (event) => {
          const productId = event.target.getAttribute('data-id');
          removeFromCart(productId);
        });
      });
    }
  
    function removeFromCart(productId) {
      cart = cart.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    }
  
    renderCart();
  
    document.getElementById('checkout').addEventListener('click', () => {
      alert('Checkout functionality is not implemented yet.');
    });
  });
  