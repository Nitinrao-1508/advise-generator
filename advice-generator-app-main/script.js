const advicecall = document.querySelector('#generator');
const advicetext = document.querySelector('.advice'); 
const advicebtn = document.querySelector('.btn');

function getadvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => {
        return response.json();
    })
    .then(newadvices => {
        const newadvices1 = newadvices.slip.id;
        const newadvices2 = newadvices.slip.advice;

        advicecall.textContent = `advice#${newadvices1}`;
        advicetext.innerHTML = `<q>${newadvices2}</q>`; // Wrapped advice in <q> tag

    })
    .catch(error => {
        console.log(error);
    });
}

advicebtn.addEventListener('click', function(){ // Corrected typo in addEventListener
    getadvice();
});