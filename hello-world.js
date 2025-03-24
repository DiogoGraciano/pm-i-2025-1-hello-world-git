const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');
const btnShowMessage = document.getElementById('btn-show-message');
const btnClearMessage = document.getElementById('btn-clear-message');

const clear = () => {
    nameInput.value = '';
    messageP.innerText = "";
}

nameInput.onkeyup = (event) => {
    if (nameInput.value === '') {
        messageP.innerText = '';
    }
}

nameInput.onkeydown = (event) => {
    if(event.keyCode == 13){
        messageP.innerText = `Hello World, ${nameInput.value}!`;
    }

    if(event.keyCode == 27){
        clear();
    }
}

btnClearMessage.onclick = (event) => {
    clear();
}

btnShowMessage.onclick = (event) => {
    messageP.innerText = `Hello World, ${nameInput.value}!`;
}