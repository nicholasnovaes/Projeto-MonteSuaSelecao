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

});


const boxNameIdentifier = 'goalkeeper'
const goalKeeper = document.querySelector(`#${boxNameIdentifier} select`);
const goalKeeperButton = document.querySelector(`#${boxNameIdentifier} button`);
const fieldPosition = document.querySelector(`#field .${boxNameIdentifier} img`);

goalKeeperButton.addEventListener('click', () => {
    fieldPosition.src = `/images/${goalKeeper.value}.png`;
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