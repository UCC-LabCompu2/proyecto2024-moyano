
// Función para iniciar la cuenta regresiva
function temporizador(min,seconds) {
    let countdownElement = document.getElementById('temporizador');

    // Actualiza el contador cada segundo
    let countdownInterval = setInterval(function() {
        countdownElement.textContent = 'Cuenta regresiva: ' +min +':'+ seconds ;
        seconds--;


        // Si el contador llega a cero, detiene la cuenta regresiva
        if (seconds < 0) {
            if(min>0){
                min--;
                seconds=59;
            }else{
                    clearInterval(countdownInterval);
                    countdownElement.textContent = '¡Tiempo terminado!';
                              }
        }
    }, 1000);
}
function reset(){
    clearInterval(temporizador);
    clearTimeout(temporizador);
}