const addBtn = document.querySelector('.add-btn');
let inputValue = document.querySelector('.add-input');
const container = document.querySelector('.container');

class ListItem {
    constructor(item) {
        this.createDiv(item);
    }

    createDiv(item) {
        let listItemElem = document.createElement('div');
        listItemElem.classList.add('list-item');

        let itemInput = document.createElement('input');
        itemInput.value = item;
        itemInput.disabled = true;
        itemInput.classList.add('item-input');
        itemInput.type = 'text';

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.innerHTML = '&#9999;';

        let delBtn = document.createElement('button');
        delBtn.classList.add('del-btn');
        delBtn.innerHTML = '&#10008;';

        container.appendChild(listItemElem);

        listItemElem.append(itemInput, editBtn, delBtn);

        editBtn.addEventListener('click', () => this.edit(itemInput, editBtn));
        delBtn.addEventListener('click', () => this.delete(listItemElem));
    }

    edit(input, editBtn) {
        input.disabled = !input.disabled;
        input.focus();
        if (!input.disabled) {
            input.style.color = 'cornflowerblue';
            editBtn.innerHTML = '&#10004;';
            editBtn.style.transform = "rotate(0deg)";
        }
        else {
            input.style.color = '#eee';
            editBtn.innerHTML = '&#9999;';
            editBtn.style.transform = "rotate(140deg)";
        }
    }

    delete(item) {
        container.removeChild(item);
    }
}

function checkValidInput() {
    if (inputValue.value != '') {
        new ListItem(inputValue.value);
        inputValue.value = '';
    }
}

addBtn.addEventListener('click', checkValidInput);

window.addEventListener('keydown', e => {
    if (e.which == 13) {
        checkValidInput();
    }
});