let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

const mensaje = document.getElementById('mensaje');
const intentoInput = document.getElementById('intento');
const probarBtn = document.getElementById('probar');
const reiniciarBtn = document.getElementById('reiniciar');
const intentosP = document.getElementById('intentos');

probarBtn.onclick = function() {
    const intento = parseInt(intentoInput.value);
    if (isNaN(intento) || intento < 1 || intento > 100) {
        mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 100.';
        return;
    }
    intentos++;
    intentosP.textContent = 'Intentos: ' + intentos;
    if (intento < numeroSecreto) {
        mensaje.textContent = 'Demasiado bajo.';
    } else if (intento > numeroSecreto) {
        mensaje.textContent = 'Demasiado alto.';
    } else {
        mensaje.textContent = `¡Felicidades! El número era ${numeroSecreto}. Lo lograste en ${intentos} intentos.`;
        probarBtn.disabled = true;
        intentoInput.disabled = true;
    }
};

reiniciarBtn.onclick = function() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    mensaje.textContent = 'Estoy pensando en un número del 1 al 100.';
    intentosP.textContent = 'Intentos: 0';
    probarBtn.disabled = false;
    intentoInput.disabled = false;
    intentoInput.value = '';
};
