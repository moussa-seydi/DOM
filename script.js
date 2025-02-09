document.addEventListener("DOMContentLoaded", () => {
    updateTotal();

    document.querySelectorAll(".quantity-btn").forEach(button => {
        button.addEventListener("click", event => {
            const isIncrement = button.classList.contains("++");
            const quantityElement = button.closest(".item").querySelector(".quantity");
            let quantity = parseInt(quantityElement.textContent);
            quantity = isIncrement ? quantity + 1 : Math.max(1, quantity - 1);
            quantityElement.textContent = quantity;
            updateTotal();
        });
    });

    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", event => {
            button.closest(".item").remove();
            updateTotal();
        });
    });

    document.querySelectorAll(".heart-btn").forEach(button => {
        button.addEventListener("click", event => {
            button.classList.toggle("liked");
        });
    });
});

function updateTotal() {
    let total = 0;
    document.querySelectorAll(".item").forEach(item => {
        const price = parseFloat(item.querySelector(".price").textContent.replace("€", ""));
        const quantity = parseInt(item.querySelector(".quantity").textContent);
        total += price * quantity;
    });
    document.querySelector(".total-price").textContent = `Total: ${total.toFixed(2)}€`;
}
