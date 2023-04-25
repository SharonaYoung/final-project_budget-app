// submit budget amount and switch input fields displayed
export function submitBudget(event) {
  event.preventDefault();
  document.getElementById('amt').classList.add('hidden');
  document.getElementById('categories').classList.remove('hidden');
  document.getElementById('budgetDisplay').classList.remove('hidden');
  showBudget();
};

// display budget values to the DOM
const budgetInput = document.querySelector('#budget');
const catInputEl = document.querySelector('#catInput');
const amtInputEl = document.querySelector('#amtInput');
let budgetStart;
let budgetRemaining;

function showBudget() {
  budgetStart = parseInt(budgetInput.value);
  budgetRemaining = budgetStart;
  console.log(budgetStart);

  // display budget values to the DOM
  document.getElementById('total').innerHTML = budgetStart
  document.getElementById('balance').innerHTML = budgetRemaining;
}

let categories = [];
let amounts = [];

// get values from input boxes and add to an array
export function chkCategory(event) {
  event.preventDefault();
  if(budgetStart === 0){
    alert("Balance is 0!!");
    catInputEl.value = "";
    amtInputEl.value = "";
  }
  else if(amtInputEl.value > budgetRemaining){
    alert("Not enough in budget, enter lower amount");
    amtInputEl.value = "";
  } 
  else {
    newCategory();
  }
  console.log(categories, amounts);
}

function newCategory() {
  categories.push(catInputEl.value);
    catInputEl.value = "";
    amounts.push(parseInt(amtInputEl.value));
    budgetRemaining = budgetStart -= amtInputEl.value;
    amtInputEl.value = "";
    // update remaining balance amount
    document.getElementById('balance').innerHTML = budgetRemaining;
    console.log('remaining budget: ' + budgetRemaining);
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


