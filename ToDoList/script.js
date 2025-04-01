
document.getElementById('addButton').addEventListener('click', addItem);

function addItem() {
    const newItem = document.getElementById('newItem').value;
    if (newItem) {
        const li = document.createElement('li');
        li.textContent = newItem;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            this.parentElement.remove();
        };
        li.appendChild(removeButton);
        document.getElementById('todoItems').appendChild(li);
        document.getElementById('newItem').value = '';
    }
}
