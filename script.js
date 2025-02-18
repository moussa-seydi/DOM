document.addEventListener("DOMContentLoaded", () => {
    const totalPriceElement = document.querySelector(".total");
  
    function calculateTotalPrice() {
      let totalPrice = 0;
      const products = document.querySelectorAll(".card");
      products.forEach((product) => {
        const unitPrice = parseFloat(product.querySelector(".unit-price").textContent.replace("$", ""));
        const quantity = parseInt(product.querySelector(".quantity").textContent);
        totalPrice += unitPrice * quantity;
      });
      totalPriceElement.textContent = `${totalPrice.toFixed(2)} $`;
    }
  
    document.querySelectorAll(".fas.fa-plus-circle").forEach((plusButton) => {
      plusButton.addEventListener("click", () => {
        const quantityElement = plusButton.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantity = isNaN(quantity) ? 0 : quantity + 1;
        quantityElement.textContent = quantity;
        calculateTotalPrice();
      });
    });
  
    document.querySelectorAll(".fas.fa-minus-circle").forEach((minusButton) => {
      minusButton.addEventListener("click", () => {
        const quantityElement = minusButton.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
          quantity -= 1;
          quantityElement.textContent = quantity;
          calculateTotalPrice();
        }
      });
    });
  
    document.querySelectorAll(".fas.fa-trash-alt").forEach((deleteButton) => {
      deleteButton.addEventListener("click", () => {
        const productCard = deleteButton.closest(".card-body");
        productCard.remove();
        calculateTotalPrice();
      });
    });
  
    document.querySelectorAll(".fas.fa-heart").forEach((favoriteButton) => {
      favoriteButton.addEventListener("click", () => {
        favoriteButton.classList.toggle("text-danger"); 
      });
    });
  
    calculateTotalPrice();
  });