import 'bootstrap/dist/css/bootstrap.min.css';
import { submitBudget, newCategory, showBudget } from "./utils";
import './style.css';

const budgetAmtForm = document.querySelector('#budgetAmt')
const CatForm = document.querySelector('#catForm');

// submit the starting budget amount
budgetAmtForm.addEventListener('submit', function(event){
  event.preventDefault();
  submitBudget();
  showBudget();
  console.log("budget amount");
});

// submit a category and amount
CatForm.addEventListener('submit', function(event) {
  event.preventDefault();
  newCategory();
})

console.log("Hello from index.js");