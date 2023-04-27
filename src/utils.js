import Chart from 'chart.js/auto';

const budgetInput = document.querySelector('#budget');
let budgetStart;

// submit budget amount and switch input fields displayed
export function submitBudget(event) {
  event.preventDefault();
  document.getElementById('amt').classList.add('hidden');
  document.getElementById('categories').classList.remove('hidden');
  document.getElementById('budgetDisplay').classList.remove('hidden');
  showBudget();
};

const catInputEl = document.querySelector('#catInput');
const amtInputEl = document.querySelector('#amtInput');
let budgetRemaining;

function showBudget() {
  budgetStart = parseInt(budgetInput.value);
  budgetRemaining = budgetStart;
  randomColor();
  addToChart(budgetRemaining);

  // display budget values to the DOM
  document.getElementById('total').innerHTML = budgetStart
  document.getElementById('balance').innerHTML = budgetRemaining;
}

let categories = [];
let amounts = [];

// check if budget has enough 
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
}

// get values from input boxes and add to an array
function newCategory() {
  categories.push({"category": catInputEl.value, "amount": (parseInt(amtInputEl.value))});
  catInputEl.value = "";
  amounts.push(parseInt(amtInputEl.value));
  addToChart(amtInputEl.value);
  budgetRemaining = budgetStart -= amtInputEl.value;
  amtInputEl.value = "";
  // update remaining balance amount
  document.getElementById('balance').innerHTML = budgetRemaining;
  console.log('remaining budget:  ' + budgetRemaining);
  randomColor();
  updateChart();
}

let colors = [];
function randomColor() {
  colors.push('#' + Math.floor(Math.random() * 10000).toString(16))
}

// display chart
const budgetChart = new Chart(
  document.getElementById('totalBudget'),
  {
    type: 'pie',
    data: { 
      labels: ['Remaining Budget'],    
      datasets: [
        {
          label: 'Total Monthly Budget',
          backgroundColor: colors,
          data: []
        }
      ]
    }
  }
)

function addToChart(data){      
  budgetChart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
  });
  console.log('updated chart data is: ' + budgetChart.data.datasets[0].data)
}
function updateChart() {
  budgetChart.update();
}
