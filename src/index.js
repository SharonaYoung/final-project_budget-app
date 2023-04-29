import 'bootstrap/dist/css/bootstrap.min.css';
import { submitBudget, chkCategory } from "./utils";
import './style.css';

const budgetAmtForm = document.querySelector('#budgetAmt')
const catForm = document.querySelector('#catForm');

// submit the starting budget amount
budgetAmtForm.addEventListener('submit', submitBudget);

// submit a category and amount
catForm.addEventListener('submit', chkCategory);