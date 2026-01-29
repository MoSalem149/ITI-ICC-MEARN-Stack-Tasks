// Data
products = [
    { id: 1, name: "Smartphone X", title: "Smartphone X Pro", description: "High-performance smartphone with OLED display.", price: 799, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
    { id: 2, name: "Laptop Air", title: "Ultra Slim Laptop", description: "Lightweight laptop for work and gaming.", price: 1299, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
    { id: 3, name: "Bluetooth Headphones", title: "Wireless Noise Cancelling", description: "Immersive sound with deep bass.", price: 199, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
    { id: 4, name: "Smartwatch", title: "Fitness Smartwatch 2025", description: "Tracks health metrics all day.", price: 149, image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b" },
    { id: 5, name: "Gaming Keyboard", title: "RGB Mechanical Keyboard", description: "Blue switch mechanical keyboard.", price: 89, image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68" },
    { id: 6, name: "Smart Watch", title: "Ergonomic Pro Mouse", description: "Precision sensor and programmable buttons.", price: 49, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80" },
    { id: 7, name: "4K Monitor", title: "Ultra HD 27-inch Monitor", description: "Sharp and vivid colors for work and gaming.", price: 399, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
    { id: 8, name: "DSLR Camera", title: "Professional DSLR Camera", description: "High-quality photography tool.", price: 999, image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500&q=80" },
    { id: 9, name: "Wireless Speaker", title: "Portable Bluetooth Speaker", description: "Crystal clear sound on the go.", price: 59, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80" },
    { id: 10, name: "KeyBoard Pro", title: "10-inch HD Tablet", description: "Perfect for study, movies, and work.", price: 349, image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&q=80" },
    { id: 11, name: "Speaker", title: "Virtual Reality Set", description: "Immersive VR gaming experience.", price: 299, image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=500&q=80" },
    { id: 12, name: "Drone", title: "4K Camera Drone", description: "Perfect aerial photography.", price: 499, image: "https://images.unsplash.com/photo-1512820790803-83ca734da794" },
    { id: 13, name: "Wireless Charger", title: "Wireless Earbuds", description: "With active noise cancellation.", price: 129, image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=500&q=80" },
    { id: 14, name: "SSD HardDesk", title: "Fast Charging 20000mAh", description: "Charge devices multiple times.", price: 39, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80" },
    { id: 15, name: "Power Bank", title: "50-inch 4K Smart TV", description: "Netflix, YouTube, and more built-in.", price: 699, image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80" }
]

window.onload = function() {
    // Store card data to display it in cart
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    // Store card data to display it in favorites
    var favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Selectors
    var cardsContainer = document.querySelector("#cards-container");
    var searchInput = document.querySelector("#searchInput");
    var favContainer = document.querySelector(".favorites-items");
    var cartContainer = document.querySelector(".cart-items");

    function displayProducts(list) {
        if (!cardsContainer) return;

        // Clear the cards
        cardsContainer.innerHTML = "";
        list.forEach(function(product) {
            var cardItems = document.createElement("div");
            cardItems.className = "card-items";
            cardItems.innerHTML = `
                <img src="${product.image}" alt="${product.description}">
                <h4>${product.title}</h4>
                <p>$${product.price}</p>
                <button class="btn add-btn">Add to Cart</button>
                <button class="btn fav-btn">🤍</button>
            `;
            // Add more cards
            cardsContainer.appendChild(cardItems);
            
            // Selectors
            var addBtn = cardItems.querySelector(".add-btn");
            // Cart button
            addBtn.addEventListener("click", function() {
                // Check if item in cart
                var exists = cart.find(function(item) {
                    return item.id === product.id;
                });
                if (exists) {
                    alert("Item already in cart!"); 
                } else {
                    product.quantity = 1; 
                    cart.push(product);
                    localStorage.setItem("cart", JSON.stringify(cart));
                    alert("Added to Cart!");
                }
            })
            
            // Selectors
            var heartBtn = cardItems.querySelector(".fav-btn");
            // Favorites button
            heartBtn.addEventListener("click", function() {
                // Check if item in favorites
                var exists = favorites.find(function(item) {
                    return item.id === product.id;
                })
                if (exists) {
                    alert("Item is already in favorites!");
                } else {
                    favorites.push(product);
                    localStorage.setItem("favorites", JSON.stringify(favorites));
                    alert("Added favorites!");
                }
            })
        })
    }

    // Loop to display cards
    if (cardsContainer) {
        displayProducts(products);
    }

    if (searchInput) {
        // Search input
        searchInput.addEventListener("input", function(e) {
            var searchText = e.target.value.toLowerCase();
            var filteredProducts = products.filter(function(product) {
                return product.title.toLowerCase().includes(searchText);
            })
            displayProducts(filteredProducts);
        })
    }

    // Only run on favorites page
    if (favContainer) {
        // Check if empty
        if (favorites.length === 0) {
            favContainer.innerHTML = "<p>No favorites yet</p>";
        } else {
            // Clear the text
            favContainer.innerHTML = "";
            favorites.forEach(function(product) {
                var cardItems = document.createElement("div");
                cardItems.className = "card-items";
                cardItems.innerHTML = `
                    <img src="${product.image}" alt="${product.description}">
                    <h4>${product.title}</h4>
                    <p>$${product.price}</p>
                    <button class="btn remove-from-favorites">Remove</button>
                `;
                // Add more cards
                favContainer.appendChild(cardItems);
                
                // Selectors
                var removeBtn = cardItems.querySelector(".remove-from-favorites");
                removeBtn.addEventListener("click", function() {
                    var updatedFavorites = favorites.filter(function(item) {
                        // Keep different items
                        return item.id !== product.id;
                    });
                    // Update localstorage
                    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
                    cardItems.remove();
                    // Display No favorites yet when it empty
                    if(updatedFavorites.length === 0) {
                        favContainer.innerHTML = "<p>No favorites yet</p>";
                    }
                })
            })
        }
    }

    if (cartContainer) {
        // start total with 0
        var total = 0;

        // Check if empty
        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>No items in cart yet</p>";
        } else {
            // Clear the text
            cartContainer.innerHTML = "";
            
            // Loop through items
            cart.forEach(function(product) {
                // Calculate total
                total += parseFloat(product.price) * product.quantity;
                
                var cardItems = document.createElement("div");
                cardItems.className = "card-items";
                cardItems.innerHTML = `
                    <img src="${product.image}" alt="${product.description}">
                    <h4>${product.title}</h4>
                    <p>$${product.price}</p>
                    <span>x</span>
                    <button class="dec-btn btn">-</button>
                    <p class="qty-text">${product.quantity}</p>
                    <button class="inc-btn btn">+</button>
                    <button class="btn remove-from-cart">Remove</button>
                `;
                // Add card
                cartContainer.appendChild(cardItems);
                
                // Selectors
                var incBtn = cardItems.querySelector(".inc-btn");
                var decBtn = cardItems.querySelector(".dec-btn");
                var removeBtn = cardItems.querySelector(".remove-from-cart");

                // Increase Quantity
                incBtn.addEventListener("click", function() {
                    product.quantity++;
                    localStorage.setItem("cart", JSON.stringify(cart));
                    location.reload();
                });

                // Decrease Quantity
                decBtn.addEventListener("click", function() {
                    if (product.quantity > 1) {
                        product.quantity--;
                        localStorage.setItem("cart", JSON.stringify(cart));
                        location.reload();
                    }
                });

                // Remove from cart
                removeBtn.addEventListener("click", function() {
                    var updatedCart = cart.filter(function(item) {
                        return item.id !== product.id;
                    });
                    localStorage.setItem("cart", JSON.stringify(updatedCart));
                    location.reload();
                });
            });
        }

        // Display Total
        var totalElement = document.createElement("div");
        totalElement.innerHTML = `<p class="total">Total: $${total}</p>`;
        cartContainer.appendChild(totalElement);
    }

}
