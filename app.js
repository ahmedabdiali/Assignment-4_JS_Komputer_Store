const drinksElement = document.getElementById("drinks");
const cartElement = document.getElementById("cart");
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
        totalDueElement.innerText = drinks[0].price;
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
        totalDueElement.innerText = selectDrink.price;
        imageElement.src ="https://noroff-komputer-store-api.herokuapp.com/" + selectDrink.image
        
    }

    const handleAddDrink = () => {
        
        const cartItem = document.createElement("li");
        cartItem.innerText = `Title ${selectedDrink.title} price:- ${selectedDrink.price}}` 
        cartElement.appendChild(cartItem);
        totalDueElement.innerHTML = `Total Due: ${totalDue.toFixed(2)}`
        console.log(lineTotal)
    }

    const handlePay = () => {
        const totalPaid = prompt(" please enter the amount of money you wish to pay: ");
        const selectedDrink = drinks[drinksElement.selectedIndex];

        const lineTotal = selectedDrink.price;
        totalDue += lineTotal;
        const change =parseFloat(totalPaid) - totalDue;
        console.log(totalDue, lineTotal+' over the if(){}')

        if(totalPaid==totalDue){
            alert(` item bought: ${change.toFixed(2)}`)
            console.log(totalPaid, totalDue, change)
        }

        if(totalPaid >= change){
            alert(`ops you paid to much: ${change.toFixed(2)}`)
            console.log(totalPaid, totalDue, change)
        }

        if(totalPaid<change){
            alert(`ops u have to pay a little more to get the item: ${change.toFixed(2)-totalDue}`)
            console.log(totalPaid,totalDue, change)
        }
        
    }



    drinksElement.addEventListener("change", handleDrinkMenuChange);
    payButtonElement.addEventListener("click",handlePay);