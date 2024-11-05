function addContact(event) {
    event.preventDefault(); // Evita o envio do formulário

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (!name || !phone) {
    alert('Por favor, preencha todos os campos!');
    return;
    }

    const table = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cellName = newRow.insertCell(0);
    const cellPhone = newRow.insertCell(1);

    cellName.textContent = name;
    cellPhone.textContent = phone;

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
}

document.getElementById('contactForm').addEventListener('submit', addContact);
