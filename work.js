/**
 * here is some elements for me to use and play around with
 */
const workButtonElement = document.getElementById("workButton")
const workValueElement = document.getElementById("work")
const bankButtonElement = document.getElementById("bankButton")
const bankValueElement = document.getElementById("bank")

let earningValue = 0;
let workValue = 0;


/**
 * here is the logic for the bank and work
 * for the work it adds 100sek that i earn, everytime i click the button
 * 
 * bankValue takes the value of my total earning
 * @param {} e 
 */

const handleWorkLogic = e =>{
    const earningValue = 100;
    workValue += parseFloat(earningValue);
    workValueElement.innerText = (workValue)+'sek'
}


const handleBankLogic = e =>{
   let bankValue = earningValue +=  workValue;
   workValue=0;
   
   bankValueElement.innerText=(bankValue) +'sek'
   workValueElement.innerText=(workValue) +'sek'
}

/**
 * when button clicked, it triggers the functions
 */
workButtonElement.addEventListener('click',handleWorkLogic)
bankButtonElement.addEventListener('click',handleBankLogic)