async function updateOutput() {
    let hoursworked = document.getElementById("hours-worked");
    let payrate = document.getElementById("pay-rate");
    let amountearned = document.getElementById("amount-earned");
    let ucmax = document.getElementById("uc-max-amount");
    let ucrecieved = document.getElementById("uc-amount-earned");
    let totalrecieved = document.getElementById("total");
  
    amountearned.value = (hoursworked.value * payrate.value).toFixed(2);
    let ucAmount = ucmax.value - (Number(amountearned.value) * 0.55);
    ucrecieved.value = ucAmount.toFixed(2);
      if(ucAmount >= 0){
          totalrecieved.value = (ucAmount + Number(amountearned.value)).toFixed(2);
      } else {
          totalrecieved.value = Number(amountearned.value).toFixed(2);
      }
    if(ucAmount <= 0){
      ucrecieved.value = "No UC";
    }
  }
  
  // Call the updateOutput function initially
  updateOutput();
  
  // Add event listeners to the hoursworked and payrate inputs
  let hoursworkedInput = document.getElementById("hours-worked");
  let payrateInput = document.getElementById("pay-rate");
  hoursworkedInput.addEventListener("input", updateOutput);
  payrateInput.addEventListener("input", updateOutput);
  
  const downloadBtn = document.querySelector('#download-btn');
  
  downloadBtn.addEventListener('click', () => {
    // Create a string with the variable values
    let outputText = "Hours worked: " + hoursworked.value + "\n" +
                     "Pay rate: " + payrate.value + "\n" +
                     "Amount earned: " + amountearned.value + "\n" +
                     "UC max amount: " + ucmax.value + "\n" +
                     "UC amount received: " + ucrecieved.value + "\n" +
                     "Total received: " + totalrecieved.value;
  
    // Copy the string to the clipboard
    navigator.clipboard.writeText(outputText);
  });
  