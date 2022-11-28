
const list = document.querySelector('#target');


const first = document.createElement('li');
const second = document.createElement('li');
const thrd = document.createElement('li');

first.innerText = 'first item';
second.innerText = 'second item';
thrd.innerText = 'Third item' ;

list.appendChild(first);
list.appendChild(second);
list.appendChild(thrd);

second.classList.add('my-item')

