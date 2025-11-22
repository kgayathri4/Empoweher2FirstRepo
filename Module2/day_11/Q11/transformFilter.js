function processProducts(products) {
    // Step 1: Use map() to extract the product names
    const productNames = products.map(product => product.name);
    
    // Step 2: Use forEach() to iterate over the products and log messages based on the price of each product
    products.forEach(product => {
        const message = product.price > 50 ? "above $50" : "below $50";
        console.log(`${product.name} is ${message}`);
    });

    // Returning productNames as per step 1, though the problem focuses on logging
    return productNames;
}

// Example usage
const products = [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }];
processProducts(products);