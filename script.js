clock_container = document.getElementById('clock');

setInterval(() => {
    clock_container.innerHTML = Date(Date.now()).split(' ')[4];
}, 100)