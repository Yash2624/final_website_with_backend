let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function alertmsg() {
    alert("Email sent succesfully.");
}

let d = document,
    [inputs, knapp] = [
        d.querySelectorAll('[type="text"]'),
        d.querySelector('#skicka')
    ]
knapp.disabled = true

for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', () => {
        let values = []
        inputs.forEach(v => values.push(v.value))
        knapp.disabled = values.includes('')
    })
}