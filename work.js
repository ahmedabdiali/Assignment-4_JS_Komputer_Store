const workButtonElement = document.getElementById("workButton")
const workValueElement = document.getElementById("work")
const bankButtonElement = document.getElementById("bankButton")
const bankValueElement = document.getElementById("bank")

let earningValue = 0;
let workValue = 0;

const handleWorkChange = e =>{
    const electedComputer = computers[e.taret.selectedIndex]
    workValueElement.innerText= electedComputer.work;
}
const handleBankChange = e =>{
    const electedComputer = computers[e.taret.selectedIndex]
    bankValueElement.innerText= electedComputer.bank;
}

////////////////////////////////////////////////////

const handleWorkLogic = e =>{
    const money = 100;
    workValue += parseFloat(money);
    workValueElement.innerText = (workValue)+'sek'
    // workValueElement.innerText="hello"
}


const handleBankLogic = e =>{
   let bankValue = earningValue +=  workValue;
   workValue=0;
   
   bankValueElement.innerText=(bankValue) +'sek'
   workValueElement.innerText=(workValue) +'sek'
// bankValueElement.innerText="hello"
}


workButtonElement.addEventListener('click',handleWorkLogic)
bankButtonElement.addEventListener('click',handleBankLogic)