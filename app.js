const drinksElement = document.getElementById("drinks");
const priceElement = document.getElementById("price");
const addElement = document.getElementById("add");
const cartElement = document.getElementById("cart");
const quantityElement = document.getElementById("quantity");
const payButtonElement = document.getElementById("pay");
const totalDueElement = document.getElementById("totalDue");
const imageElement = document.getElementById("img");
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
        imageElement.src="https://noroff-komputer-store-api.herokuapp.com/assets/images/1.png"
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
        imageElement.src ="https://noroff-komputer-store-api.herokuapp.com/" + selectDrink.image
        
    }

    const handleAddDrink = () => {
        const selectedDrink = drinks[drinksElement.selectedIndex];
        
        const cartItem = document.createElement("li");
        const lineTotal = selectedDrink.price;
        
        cartItem.innerText = `Title ${selectedDrink.title} price:- ${selectedDrink.price}}` 
        cartElement.appendChild(cartItem);

        totalDue += lineTotal;
        totalDueElement.innerHTML = `Total Due: ${totalDue.toFixed(2)}`
    }

    const handlePay = () => {
        const totalPaid = prompt(" please enter the amount of money you wish to pay: ");
        const change =parseFloat(totalPaid) - totalDue;
        alert(`Total change due: ${change.toFixed(2)}`)
    }



    drinksElement.addEventListener("change", handleDrinkMenuChange);
    addElement.addEventListener("click", handleAddDrink);
    payButtonElement.addEventListener("click",handlePay);