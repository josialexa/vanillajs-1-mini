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
