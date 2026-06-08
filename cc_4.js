// Step 2: Product array
const products = [
    {
        name: "Laptop",
        category: "Electronics",
        price: 800,
        inventory: 15
    },
    {
        name: "T-Shirt",
        category: "Apparel",
        price: 30,
        inventory: 40
    },
    {
        name: "Milk",
        category: "Groceries",
        price: 4,
        inventory: 50
    },
    {
        name: "Detergent",
        category: "Household",
        price: 15,
        inventory: 30
    },
    {
        name: "Book",
        category: "Entertainment",
        price: 25,
        inventory: 40
    }
];

// Step 3: Apply category discounts
for (const product of products) {
    let discount = 0;

    switch (product.category) {
        case "Electronics":
            discount = 0.20;
            break;

        case "Apparel":
            discount = 0.15;
            break;

        case "Groceries":
        case "Household":
            discount = 0.10;
            break;

        default:
            discount = 0;
    }

    product.discountedPrice = product.price * (1 - discount);

    console.log(
        `${product.name}: $${product.discountedPrice.toFixed(2)}`
    );
}

// Step 4: Create a Customer Type variable and function for discounts
let customerType = "student";

function applyCustomerDiscount(total) {
    if (customerType === "student") {
        return total * 0.95;
    } else if (customerType === "senior") {
        return total * 0.93;
    } else {
        return total;
    }
}

// Step 5: Simulate checkout for 3 customers
for (let customer = 1; customer <= 3; customer++) {

    let cartTotal = 0;

    for (const product of products) {
        cartTotal += product.discountedPrice;

        if (product.inventory > 0) {
            product.inventory--;
        }
    }

    cartTotal = applyCustomerDiscount(cartTotal);

    console.log(
        `Customer ${customer} Total: $${cartTotal.toFixed(2)}`
    );
}

// Step 6: Log each key pair for a single product after discounts.
console.log("Single Product Details:");

for (const key in products[0]) {
    console.log(`${key}: ${products[0][key]}`);
}

// Step 7: Log the entire product inventory after checkout.
console.log("Updated Product Inventory:");

for (const product of products) {
    console.log(`\n${product.name}`);

    for (const [key, value] of Object.entries(product)) {
        console.log(`${key}: ${value}`);
    }
}