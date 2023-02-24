// Select the table body element
const tbody = document.querySelector('table tbody');

// Create a function to add a new row to the table
function addRow() {
  // Get the form values
  const id = document.getElementById('id').value;
  const drugName = document.getElementById('drugName').value;
  const manufacturer = document.getElementById('manufacturer').value;
  const supplies = document.getElementById('supplies').value;
  const ndcExpiration = document.getElementById('ndcExpiration').value;
  const quantity = document.getElementById('quantity').value;
  const unitPrice = document.getElementById('unitPrice').value;
  
  // Create a new row
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${id}</td>
    <td>${drugName}</td>
    <td>${manufacturer}</td>
    <td>${supplies}</td>
    <td>${ndcExpiration}</td>
    <td>${quantity}</td>
    <td>${unitPrice}</td>
    <td><button onclick="editRow(this)">Edit</button><button onclick="deleteRow(this)">Delete</button></td>
  `;
  
  // Add the row to the table
  tbody.appendChild(newRow);
  
  // Reset the form
  document.getElementById('addForm').reset();
}

// Create a function to edit a row
function editRow(button) {
  // Get the row and cells to edit
  const row = button.parentNode.parentNode;
  const idCell = row.cells[0];
  const drugNameCell = row.cells[1];
  const manufacturerCell = row.cells[2];
  const suppliesCell = row.cells[3];
  const ndcExpirationCell = row.cells[4];
  const quantityCell = row.cells[5];
  const unitPriceCell = row.cells[6];
  
  // Replace the cells with input fields
  idCell.innerHTML = `<input type="text" value="${idCell.textContent}">`;
  drugNameCell.innerHTML = `<input type="text" value="${drugNameCell.textContent}">`;
  manufacturerCell.innerHTML = `<input type="text" value="${manufacturerCell.textContent}">`;
  suppliesCell.innerHTML = `<input type="text" value="${suppliesCell.textContent}">`;
  ndcExpirationCell.innerHTML = `<input type="text" value="${ndcExpirationCell.textContent}">`;
  quantityCell.innerHTML = `<input type="text" value="${quantityCell.textContent}">`;
  unitPriceCell.innerHTML = `<input type="text" value="${unitPriceCell.textContent}">`;
  
  // Replace the edit button with a save button
  button.innerHTML = 'Save';
  button.setAttribute('onclick', 'saveRow(this)');
}

// Create a function to save an edited row
function saveRow(button) {
  // Get the row and cells to save
  const row = button.parentNode.parentNode;
  const idCell = row.cells[0];
  const drugNameCell = row.cells[1];
  const manufacturerCell = row.cells[2];
  const suppliesCell = row.cells[3];
  const ndcExpirationCell = row.cells[4];
  const quantityCell = row.cells[5];
  const unitPriceCell = row.cells[6];
  
  // Get the input field values
  const id = idCell.querySelector('input').value;
  const drugName = drugNameCell.querySelector('input').value;
  const manufacturer = manufacturerCell.querySelector('input').value;
  const supplies = suppliesCell.querySelector('input').value;
  const ndcExpiration = ndcExpirationCell.querySelector('input').value;
  const quantity =
