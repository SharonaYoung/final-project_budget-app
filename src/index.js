import 'bootstrap/dist/css/bootstrap.min.css';
import { submitBudget, chkCategory } from "./utils";
import './style.css';

const budgetAmtForm = document.querySelector('#budgetAmt')
const CatForm = document.querySelector('#catForm');

// submit the starting budget amount
budgetAmtForm.addEventListener('submit', submitBudget);

// submit a category and amount
CatForm.addEventListener('submit', chkCategory);

console.log("Hello from index.js");