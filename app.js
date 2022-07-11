const computersElement = document.getElementById("computers");
const cartElement = document.getElementById("cart");
const payButtonElement = document.getElementById("pay");
const totalDueElement = document.getElementById("totalDue");
const imageElement = document.getElementById("img");
const specsElement = document.getElementById("specs"); 
const descElement = document.getElementById("desc"); 
const titleElement = document.getElementById("title"); 
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
        descElement.innerText = computers[0].description;
        specsElement.innerText = computers[0].specs;
        titleElement.innerText = computers[0].title;

    }

    const addComputerToMenu = (computer) => {
        const computerElement = document.createElement("option");
        computerElement.value = computer.id;
        computerElement.appendChild(document.createTextNode(computer.title));
        computersElement.appendChild(computerElement);
        
    }

    const handleSpecificComputer = e => {
        const selectComputer = computers[e.target.selectedIndex];
        totalDueElement.innerText = selectComputer.price;
        imageElement.src ="https://noroff-komputer-store-api.herokuapp.com/" + selectComputer.image
        
    }
    const handleDesc=e=>{
        const selectComputer= computers[e.target.selectedIndex];
        descElement.innerText=selectComputer.description;
    }
    const handleSpecs=e=>{
        const selectComputer= computers[e.target.selectedIndex];
        specsElement.innerText=selectComputer.specs;
    }
    const handleTitle=e=>{
        const selectComputer= computers[e.target.selectedIndex];
        titleElement.innerText=selectComputer.title;
    }

    const handlePay = () => {
        paidAmount = parseFloat(computers[computersElement.selectedIndex].price)-earningValue;
        if(paidAmount<=0){
            selectedItem=computers[computersElement.selectedIndex].title;
            earningValue-=parseFloat(computers[computersElement.selectedIndex].price)
            bankValueElement.innerText=earningValue+' sek';
            alert('you bought '+selectedItem+' welcome back!')
        }else{
            alert('you cant afford it')
        }
        
    }



    computersElement.addEventListener("change", handleSpecificComputer);
    computersElement.addEventListener("change", handleDesc)
    computersElement.addEventListener("change", handleSpecs)
    computersElement.addEventListener("change", handleTitle)
    payButtonElement.addEventListener("click",handlePay);