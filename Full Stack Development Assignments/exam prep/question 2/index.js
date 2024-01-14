const addItem = () => {
    const main = document.getElementById('main');
    const p = document.createElement('p');
    p.textContent = 'Hello'
    main.appendChild(p);
}