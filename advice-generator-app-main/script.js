const advicecall = document.querySelector('#generator');
const advicetext = document.querySelector('#quotes');
const advicebtn = document.querySelector('#btn');

fetch('https://api.adviceslip.com/advice')
.then(response =>{
    return response.json();
}).then(newadvices =>{
    const newadvices1 = advicedata.slip.id;
    const newadvices2 = advicedata.slip.advice;


    advicecall.textContent = newadvices1;
    advicetext.

})