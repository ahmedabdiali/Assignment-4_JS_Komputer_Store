/**
	* ive build logic for the loan and payback and bellow is the elements that ill work with
	*/
	const loanButtonElement = document.getElementById("loan-button");
	const loanElement = document.getElementById("loan");
	const paybackButtonElement = document.getElementById("payback-button");
	const paybackElement = document.getElementById("payback");
	
	
	let getLoan = 0;
	

	
	/**
	* 
	 * @param {*} e 
	 * @returns 
	 * this handle payback handles the logic to pay back the loan 
	 * you can pay with what you have in balance and on top of that is a 10% additional interest.
	*/
	const handlePayback = e => {
	
	    const payAmount = prompt("how much woul'd ypu like to pay back? ");
	    if (payAmount === null) {
	        payAmount = 0;
	    }
	    if (payAmount <= earningValue) {
	
	
	        if (getLoan - payAmount < 0) {
	            const exesseMoney = (getLoan - payAmount) * -1;
	            earningValue += exesseMoney - payAmount;
                alert('thank you for the payment')
                if(getLoan==0){return}
	            
	            // return;
	        
	        }
	        const interest = (payAmount*0.1);
	        getLoan -= parseFloat(payAmount)- interest;
	        earningValue -= parseFloat(payAmount)+ interest;
	    }
	        getLoan = getLoan.toFixed(2);
	        loanElement.innerText = getLoan + "kr";    
	        const bankElement = document.getElementById("bank");
	        bankElement.innerText = earningValue + "kr";
	    
	}
	
	
	/**
	* 
	 * @param {*} e 
	 * @returns 
	 *  handleLoan has some if statements which is if you already taken a loan you cant get a new laon again until the amount is
	* paid back
	*/
	const handleLoan = e => {
	    
	    if (getLoan > 0) {
	        alert(" you cant take a loan, payback " + getLoan + " kr ");
	    }
	   const loanAmount = prompt("how much loan do you want? ");
	    if (loanAmount === null) {
	        loanAmount = 0;
	    }
	    if (loanAmount > earningValue*2) {
	        alert(" you cant get a loan higher than " + earningValue*2)
	    }else if (loanAmount <= earningValue*2) {
	        getLoan += parseFloat(loanAmount);
	        earningValue += getLoan;
	        alert(`Your loan: ${ getLoan.toFixed(2) }`);
	    }
	    
	    loanElement.innerText = getLoan + "sek";
	    
	    const bankElement = document.getElementById("bank");
	    bankElement.innerText = earningValue + "sek";
	}
	

	/**
	* added eventListener that triggers the function that ive created
	*/
	
	loanButtonElement.addEventListener("click", handleLoan);
	loanElement.addEventListener("click", handleLoan);
	paybackButtonElement.addEventListener("click", handlePayback);

    
