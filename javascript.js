function form(){
    
document.getElementById('transaction-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;

    if (type && name && amount) {
        const table = document.getElementById('transaction-table');
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${type}</td>
            <td>${name}</td>
            <td>$${amount}</td>
            <td><a href="#" onclick="deleteRow(this)">Delete</a></td>
        `;
        
        table.appendChild(row);
        document.getElementById('transaction-form').reset();
    }
});


}
function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}