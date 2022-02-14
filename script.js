const button = document.querySelector('#button');
const toasts = document.querySelector('#toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
];

const types = [
    'info',
    'danger',
    'success'
]

button.addEventListener('click', () => createNotification());


function createNotification(){
    const div = document.createElement('div');
    div.classList.add('toast');
    div.classList.add(getRandomTypes())
    div.innerText = getRandomMessage()
    toasts.appendChild(div)
    clearStatus()
}

function clearStatus(){
    const toast = document.querySelectorAll('.toast');

    setTimeout(() => {
        toast.forEach(element => {
            element.remove()
        })
    },2500)
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomTypes(){
    return types[Math.floor(Math.random() * types.length)]
}