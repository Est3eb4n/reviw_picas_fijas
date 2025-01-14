function generarNumero() { // crea un numero aleatorio de cuatro dijitos
    const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];// crea un array con los dijitos de 0 al 9
    let numeroAleatorio = [];
  
    for (let i = 0; i < 4; i++) {
      const indiceAleatorio = Math.floor(Math.random() * numeros.length);
      numeroAleatorio.push(numeros.splice(indiceAleatorio, 1)[0]);
    }// con un bucle selecciona aletoriamente un numero del array
  
    return numeroAleatorio.join('');// une los dijitos de una cadena y los retorna
  }
  
  function jugar() {// genera el numero aleatorio que el jugador debe adivinar
    const numeroAleatorio = generarNumero();
    console.log(numeroAleatorio); // Para verificar (quitar en producción)
  
    let intentos = 0;// inicializa el contador de intentos y el numero maximo de intentos
    const maxIntentos = 10;
  
    while (intentos < maxIntentos){// se ingresa el bucle hasta que el jugador adivine o se acaben los intentos
      const respuesta = prompt("Ingresa por favor un número de cuatro cifras:");// solicita el numero
  
      if (respuesta.length !== 4 || isNaN(respuesta)){// valida que la entrada sea un nuemero de cuatro dijitos
        console.log("Por favor, ingresa un número de cuatro cifras.");
        continue;//Imprime un mensaje al usuario indicando el número de fijas y picas.
      }
  
      let fijas = 0;
      let picas = 0;
  
      for (let i = 0; i < 4; i++) {
        if (respuesta[i] === numeroAleatorio[i]) {
          fijas++;
        } else if (numeroAleatorio.includes(respuesta[i])) {
          picas++;
        }
      }
  
      console.log(`Tienes ${fijas} fijas y ${picas} picas.`);
  
      if (fijas === 4) {
        console.log("Felicidades, ganaste!");
        break;
      } else if (intentos === maxIntentos - 1) {
        console.log("Lo siento, se te acabaron los intentos. El número era:", numeroAleatorio);
      }
  
      intentos++;
    }
  }
  
  jugar();