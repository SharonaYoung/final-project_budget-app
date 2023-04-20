const newCatBtn = document.querySelector('#newCat');

export function submitBudget() {
  document.getElementById('amt').classList.add('hidden');
  document.getElementById('categories').classList.remove('hidden');
}

let categories = [];
let amounts = [];
const catInputEl = document.getElementById('catInput');
const amtInputEl = document.getElementById('amtInput');


export function newCategory() {
  categories.push(catInputEl.value);
  catInputEl.value = "";
  amounts.push(amtInputEl.value);
  amtInputEl.value = "";
  console.log(categories);
  console.log(amounts);
}

