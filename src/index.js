import { submitBudget } from "./utils";

const submitBudgetEl = document.querySelector('#submitBudget')

submitBudgetEl.addEventListener('click', function(event){
  event.preventDefault();
  submitBudget();
  submitBudgetEl.classList.add('hidden');
});

console.log("Hello from index.js");