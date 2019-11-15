console.log('Hello World');

let count = 0;
let element = document.getElementById('counter');

const increase = () => {
    count++;
    element.innerText = count;
};

const decrease = () => {
    count--;
    element.innerText = count;
};

const reset = () => {
    count = 0;
    element.innerHTML = `<mark>${count}</mark>`;
};

const selectTheme = (theme) => {
    document.getElementsByTagName('body')[0].className = theme;
    document.getElementsByTagName('main')[0].className = theme;
    
    let buttons = document.getElementsByTagName('button');

    buttons.array.forEach(element => {
        element.className = theme;
    });
};