// submit budget amount and switch input fields displayed
export function submitBudget() {
  document.getElementById('amt').classList.add('hidden');
  document.getElementById('categories').classList.remove('hidden');
  document.getElementById('budgetDisplay').classList.remove('hidden');
};

let categories = [];
let amounts = [];
const catInputEl = document.getElementById('catInput');
const amtInputEl = document.getElementById('amtInput');

// display budget values to the DOM
const budgetDisplayEl = document.querySelector('#budgetDisplay');
const budgetInput = document.querySelector('#budget');
let budgetStart;
let budgetRemaining;
export function showBudget() {
  budgetStart = parseInt(budgetInput.value);
  console.log(budgetStart);

  // display budget values to the DOM
  document.getElementById('total').innerHTML = budgetStart
  document.getElementById('balance').innerHTML = budgetStart;
}

// get values from input boxes and add to an array
export function newCategory() {
  if(budgetStart <= 0){
    alert("Balance is 0!!");
    catInputEl.value = "";
    amtInputEl.value = "";
  }
  if(amtInputEl.value > budgetRemaining){
    alert("Not enough in budget, enter lower amount");
    amtInputEl.value = "";
  }
  else {
    categories.push(catInputEl.value);
    catInputEl.value = "";
    amounts.push(parseInt(amtInputEl.value));
    budgetRemaining = budgetStart -= amtInputEl.value;
    amtInputEl.value = "";
    // update remaining balance amount
    document.getElementById('balance').innerHTML = budgetRemaining;
    console.log('remainging budget: ' + budgetRemaining);
  }
}

/*
export function display() {  
  budgetStart = parseInt(budgetInput.value);
  console.log(budgetStart);
// display budget values to the DOM
const totalBudget = `
  <p>Total Budget $${budgetStart}</p>
  <p>Remaining Budget $${budgetStart}</p>
  <p>Budget Breakdown: </p>
`;
budgetDisplayEl.innerHTML = totalBudget;
}
*/


