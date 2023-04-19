import 'bootstrap/dist/css/bootstrap.min.css';
import { submitBudget } from "./utils";
import './style.css';

const submitBudgetEl = document.querySelector('#submitBudget')

submitBudgetEl.addEventListener('click', function(event){
  event.preventDefault();
  submitBudget();
  document.getElementById('budgetAmt').classList.add('hidden');
});

console.log("Hello from index.js");