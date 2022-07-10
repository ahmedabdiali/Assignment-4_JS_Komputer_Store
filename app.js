const drinksElement = document.getElementById("drinks");
const priceElement = document.getElementById("price");
const addElement = document.getElementById("add");
const cartElement = document.getElementById("cart");
const quantityElement = document.getElementById("quantity");
const payButtonElement = document.getElementById("pay");
const totalDueElement = document.getElementById("totalDue");

let drinks = [];
let cart = [];
let totalDue = 0.0;

    fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
        .then(response => response.json())
        .then(data => drinks = data)
        .then(drinks => addDrinksToMenu(drinks)
    );

    const addDrinksToMenu = (drinks) => {
        drinks.forEach(x => addDrinkToMenu(x));
        priceElement.innerText = drinks[0].price;
    }

    const addDrinkToMenu = (drink) => {
        const drinkElement = document.createElement("option");
        drinkElement.value = drink.id;
        drinkElement.appendChild(document.createTextNode(drink.title));
        drinksElement.appendChild(drinkElement);
    }

    const handleDrinkMenuChange = e => {
        const selectDrink = drinks[e.target.selectedIndex];
        priceElement.innerText = selectDrink.price;
    }

    const handleAddDrink = () => {
        const selectedDrink = drinks[drinksElement.selectedIndex];
        const quantity = quantityElement;
        
        const cartItem = document.createElement("li");
        const lineTotal = quantity * selectedDrink.price;
        
        cartItem.innerText = `Title ${selectedDrink.title} price:- ${selectedDrink.price} quantity ${quantity} Total price:-${lineTotal.toFixed(2)}` 
        cartElement.appendChild(cartItem);

        totalDue += lineTotal;
        totalDueElement.innerHTML = `Total Due: ${totalDue.toFixed(2)}`
    }

    drinksElement.addEventListener("change", handleDrinkMenuChange);
    addElement.addEventListener("click", handleAddDrink);