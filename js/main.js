const container = document.createElement('main');
container.classList.add('container');
document.body.appendChild(container);
// container.innerHTML = '<h1>Hello</h1>';
// console.log(container);

function movieQuote() {
    alert('I see dead people...');
}
let timer;
function callQuote() {
    // let timer = setTimeout(movieQuote, 5000);
    timer = setInterval(movieQuote, 10000);
    console.log('triggered');
}

function stopQuote() {
    clearInterval(timer);
    console.log('triggered again');
}

const button = document.createElement('button');
button.setAttribute('onclick', 'callQuote()');
button.innerText = 'Click for a movie quote!';
button.className = 'btn btn-primary btn-lg';
container.appendChild(button);

const stopButton = document.createElement('button');
stopButton.className = 'alert alert-danger border';
stopButton.setAttribute('onclick', 'stopQuote()');
stopButton.innerText = 'STOP';

button.addEventListener('click', () => {
    container.appendChild(stopButton);
});