import Chart from 'chart.js/auto';
// import {budgetData} from './utils'

const budgetInput = document.querySelector('#budget');

export async function showChart() {
  const budgetChart = new Chart(
    document.getElementById('totalBudget'),
    {
      type: 'pie',
      data: { 
        labels: ['Remaining Budget'],    
        datasets: [
          {
            label: 'Total Monthly Budget',
            backgroundColor: ['#ed45a2', '#caeef2', '#000' ],
            data: budgetInput.value
          }
        ]
      }
    }
  )
}
