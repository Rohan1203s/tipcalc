function calcTip(){
/* --------------------------------Step 1: grab the input values------------------------------------------------------ */
let tipAmount = document.getElementById("tipForm").value;
let billAmount = document.getElementById("billInput").value;

                                                          //sets a variable for the tip Amount selector to the VALUE of the #tipForm selector
                                                          //sets a variable for the bill amount selector using the VALUE of the #billInput selector


/* ---------------------------------------Step 2: turn strings into numbers, use parseFloat() method to do this.-----------  IE: let vairable = parseFloat(stringVariable)----------------------------- */
let tipAmountNum = parseFloat(tipAmount)                                                          // sets a variable for the Tip Amount that is a number
let billAmountNum = parseFloat(billAmount)                                            // sets a variable for the Bill Amount that is a number

/* --------------------------------Step 3: grab the elements---------------------------------------------------------- */
var bill = document.getElementById("bill-p");
var tip = document.getElementById("tip-p");
var total =  document.getElementById("total-p");                                                      // sets a var to the ID of 'bill-p'
                                                          // sets a var to the ID of 'tip-p'
                                                          // sets a var to the ID of 'total-p'

/* --------------------------------Step 4: Place your calculations here----------------------------------------------- */
var totalTip = tipAmountNum * billAmountNum;
console.log (totalTip);
var totalBill = totalTip + billAmountNum;
console.log (totalBill);

                       // calulate total tip (tip % * bill) and store it in the a new variable
                                 // calcualte total bill (totalTip + billAmount) and store it in a new variable


/* --------------------------------Step 5: Append your HTML content with the new information-----**use .fixed(2) to display the value with 2 decimal places.-------------------- */
                                                          // change the innerHTML of the tip var from step 3 to the total tip from step 4
  bill.innerHTML = "$" + billAmountNum.toFixed(2);                             // change the innterHTML of the bill var from step 3 to the total bill var from step 2
  tip.innerHTML =  "$" + totalTip.toFixed(2);
  total.innerHTML =  "$" + totalBill.toFixed(2);                       // change the innerHTML of the total var from step 3 to the total bill var from step 4
}
