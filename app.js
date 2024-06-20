//Variables
/*Añadimos una variable actualizable por el user haciendo uso de la función prompt, con esta varible
definimos el tamaño del evento pseudo-aleatorio en el cual gira el juego*/
let limiteAleatoriedad = prompt("Ingrese una cantidad para elegir un número aleatoriamente");
//Actualizamos el numero secreto, en vez de dar un numero en concreto, el evento aleatorio depende del limite aleatorio establecido por el user
let numeroSecreto = Math.floor(Math.random()*limiteAleatoriedad)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 6;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${limiteAleatoriedad} por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}