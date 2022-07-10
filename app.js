const computersElement = document.getElementById("computers");
const cartElement = document.getElementById("cart");
const payButtonElement = document.getElementById("pay");
const totalDueElement = document.getElementById("totalDue");
const imageElement = document.getElementById("img");
let computers = [];
let cart = [];
let totalDue = 0.0;

    fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
        .then(response => response.json())
        .then(data => computers = data)
        .then(computers => addComputersToMenu(computers)
        
    );

    const addComputersToMenu = (computers) => {
        computers.forEach(x => addComputerToMenu(x));
        totalDueElement.innerText = computers[0].price;
        imageElement.src="https://noroff-komputer-store-api.herokuapp.com/assets/images/1.png"
    }

    const addComputerToMenu = (computer) => {
        const computerElement = document.createElement("option");
        computerElement.value = computer.id;
        computerElement.appendChild(document.createTextNode(computer.title));
        computersElement.appendChild(computerElement);
    }

    const handleComputerMenuChange = e => {
        const selectComputer = computers[e.target.selectedIndex];
        totalDueElement.innerText = selectComputer.price;
        imageElement.src ="https://noroff-komputer-store-api.herokuapp.com/" + selectComputer.image
        
    }

    const handleAddComputer = () => {
        
        const cartItem = document.createElement("li");
        cartItem.innerText = `Title ${selectedComputer.title} price:- ${selectedComputer.price}}` 
        cartElement.appendChild(cartItem);
        totalDueElement.innerHTML = `Total Due: ${totalDue.toFixed(2)}`
        console.log(lineTotal)
    }

    const handlePay = () => {
        const totalPaid = prompt(" please enter the amount of money you wish to pay: ");
        const selectedComputer = computers[computersElement.selectedIndex];

        //========inte klar
        const lineTotal = selectedComputer.price;
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

        if(totalPaid<=change){
            alert(`ops u have to pay a little more to get the item: ${change.toFixed(2)}`)
            console.log(totalPaid,totalDue, change)
        }
        
    }



    computersElement.addEventListener("change", handleComputerMenuChange);
    payButtonElement.addEventListener("click",handlePay);