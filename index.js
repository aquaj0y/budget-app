
const balanceElement = document.getElementById('balance');

const entryElement = document.querySelector("section ul");

const addBtn = document.querySelector("footer button");

const selectElement = document.getElementById('select1');

const input = document.querySelector("#input");




addBtn.onclick = function () {
  const descriptionElement = document.querySelector('#description-input');
  const amount = input.value;
  const operation = selectElement.value;
  
  let operator = "+";
  if (operation === "expense") {
    operator = "-";
  } 

  function addEntry() {
    const listEntry = document.createElement('div');
    listEntry.innerHTML = `
    <li class="item ${operation}">
      <span class="description">${descriptionElement.value}</span>
      <span id="operator">${operator}</span>
      <span id="amount">$${amount}</span>
    </li>
    `
    entryElement.appendChild(listEntry);
  }

  addEntry();

  descriptionElement.value = ""
  input.value = ""
  
  const balance = getBalance()
  balanceElement.textContent = "$" + balance;
}



// Calculate Balance

function getBalance() {
  let total = 0;
  let liElements = document.querySelectorAll('li')
  for (let item of liElements) {
    let amountElement = item.querySelector('#amount');
    let operatorElement = item.querySelector('#operator');
    let amount = parseFloat(amountElement.textContent.slice(1));
    let operator = operatorElement.textContent;
    if (operator === "+") {
      total += amount;
    } else {
      total -= amount;
    }
  }
  return total;
}


