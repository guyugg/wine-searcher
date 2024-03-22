const pairing = [
    "Beef and Venison",
    "Blue Cheeses",
    "Cakes and Cream",
    "Cheddar and Gruyere",
    "Chicken and Turkey",
    "Chilis and Hot Spicy Foods",
    "Chocolate and Caramel",
    "Duck, Goose and Game Birds",
    "Fruit-based Desserts",
    "Goats' Cheese and Feta",
    "Lamb",
    "Manchego and Parmesan",
    "Meaty and Oily Fish",
    "Mushrooms",
    "Pork",
    "Root Vegetables and Squashes",
    "Salads and Green Vegetables",
    "Shellfish, Crab and Lobster",
    "Tomato-based Dishes",
    "White Fish"
];

export default pairing.map((val, idx) => {
    return {
        value: idx,
        label: val
    }
});