document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    const buyButtons = document.querySelectorAll('.buy-now');
    const detailButtons = document.querySelectorAll('.view-details');
    const modal = document.getElementById('product-modal');
    const closeModal = document.querySelector('.close');
    let cart = [];
  
    buyButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productCard = button.parentElement;
        const productId = productCard.getAttribute('data-id');
        addToCart(productId);
      });
    });
  
    detailButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productCard = button.parentElement;
        showProductDetails(productCard);
      });
    });
  
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    function addToCart(productId) {
      cart.push(productId);
      updateCartCount();
    }
  
    function updateCartCount() {
      cartCount.textContent = cart.length;
    }
  
    function showProductDetails(productCard) {
      const productName = productCard.querySelector('h3').textContent;
      const productImage = productCard.querySelector('img').src;
      const productPrice = productCard.querySelector('p').textContent;
  
      document.getElementById('modal-img').src = productImage;
      document.getElementById('modal-description').textContent = productName;
      document.getElementById('modal-price').textContent = productPrice;
  
      modal.style.display = 'block';
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = 0;
  
    const buyButtons = document.querySelectorAll('.buy-now');
    buyButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const productCard = event.target.closest('.product-card');
        const productId = productCard.getAttribute('data-id');
        const productName = productCard.querySelector('h3').innerText;
        const productPrice = productCard.querySelector('p').innerText;
        
        addToCart(productId, productName, productPrice);
      });
    });
  
    function addToCart(productId, productName, productPrice) {
      // For simplicity, we'll just increment the cart count.
      // In a real application, you would manage the cart items with more detail.
      cartCount++;
      cartCountElement.innerText = cartCount;
  
      // Displaying a message (optional)
      alert(`${productName} added to cart!`);
    }
  });
  
  