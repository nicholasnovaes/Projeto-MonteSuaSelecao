const horas = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');

const relogio = setInterval(function time(){
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    if(h < 10){h = '0' + h}
    if(m < 10){m = '0' + m}
    if(s < 10){s = '0' + s}

    horas.textContent = h;
    minutos.textContent = m;
    segundos.textContent = s;

})
/*
const boxNameIdentifier = 'goalkeeper'
const goalKeeper = document.querySelector(`#${boxNameIdentifier} select`);
const goalKeeperButton = document.querySelector(`#${boxNameIdentifier} button`);
const fieldPosition = document.querySelector(`#field .${boxNameIdentifier} img`);

goalKeeperButton.addEventListener('click', () => {
    fieldPosition.src = `/images/${goalKeeper.value}.png`;
});
*/

/*
function goleiro(){
    const goalKeeper = document.querySelector('#goalkeeper select');
    const goalKeeperbutton = document.querySelector('#goalkeeper button');
    const fieldPosition = document.querySelector('#field .goalkeeper img');

    fieldPosition.src = `images/${(goalKeeper.value)}.png`;
}

function lateralDireito(){
    const rightBack = document.querySelector('#right-back select');
    const rightBackButton = document.querySelector('#right-back button');
    const fieldPosition = document.querySelector('#field .right-back img');

    fieldPosition.src = `images/${rightBack.value}.jpg`;
}

function lateralEsquerdo(){
    const leftBack = document.querySelector('#left-back select');
    const leftBackButton = document.querySelector('#left-back button');
    const fieldPosition = document.querySelector('#field .left-back img');

    fieldPosition.src = `images/${leftBack.value}.jpg`;
}
*/


function escalarJogador(position) {
    console.log(`Escalar jogador: ${position}`);
    const playerBox = document.querySelector(`#${position} select`);
    const fieldPosition = document.querySelector(`#field .${position} img`);

    fieldPosition.src = `images/${playerBox.value}.jpg`;
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.player-box button');
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            const position = event.target.getAttribute('data-position');
            escalarJogador(position);
        });
    });
});





/** 
 * Se desafie!
 * 
 * Tente colocar todas as posições do campo num Array, Map ou Set (Vai de vc, se gosta de jogar no hard use Map ou Set 😂 )
 * Daí tu lê essa lista substituindo o valor da variável boxNameIdentifier e re-executando o código da linha 23 à 29, em uma função, sem repetir código com Ctrl+C Ctrl+V.
 * Até o próximo encontro. 
 * 
 * Fui bacana demais te conhecer, boa sorte! 🍀 
 * 
 * Mulo
 */