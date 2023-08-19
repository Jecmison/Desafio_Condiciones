// Ejercicio 1.

let img = document.querySelector('#img0');

img.addEventListener('click', () => {
    img.classList.toggle('border');
})

// Ejercicio 2.

function SumadorSticker() {
    let userSticker1 = Number(document.getElementById('kimetsu-1').value);
    let userSticker2 = Number(document.getElementById('kimetsu-2').value);
    let userSticker3 = Number(document.getElementById('kimetsu-3').value);
    let total = document.getElementById('verif');

    let stickerSum = userSticker1 + userSticker2 + userSticker3;

    if (stickerSum <= 10) {
        total.innerHTML = (`Tienes ${stickerSum} sticker`);
    } else {
        total.innerHTML = 'Llevas demasiados stickers';
    }
}

// Ejercicio 3.

function tuContraseña() {
    const userOption1 = Number(document.getElementById('caja1').value);
    const userOption2 = Number(document.getElementById('caja2').value);
    const userOption3 = Number(document.getElementById('caja3').value);
    const passwordResult = document.getElementById('verif-passw');
    let alertapassword = 'Password incorrecto';

    if (userOption1 === 9 && userOption2 === 1 && userOption3 === 1) {
        alertapassword = 'Password 1 es correcto';
    } else if (userOption1 === 7 && userOption2 === 1 && userOption3 === 4) {
        alertapassword = 'Password 2 es correcto';
    }
    passwordResult.innerHTML = alertapassword;
}