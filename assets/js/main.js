// Contenedor de los botones
const panelBtn = document.getElementById("panel")
const count = document.getElementById("count")
const countMinuts = document.getElementById("minutos")
const countSeconds = document.getElementById('segundos')
const soundAlert = document.getElementById("sound")
const showStart = document.getElementById("c_start")
const showReset = document.getElementById("c_reset")
const masUno = document.getElementById("c_mas")
const menosUno = document.getElementById("c_menos")
const masDos = document.getElementById("c_dos")
const masCinco = document.getElementById("c_cinco")
const masDiez = document.getElementById("c_diez")
const masQuince = document.getElementById("c_quince")
const filename = 'cat-alert'
let minuts = 0;
let seconds = 0;
let intervalCounter;

// Detecta los eventos click en el panel de botones.
panelBtn.addEventListener("click", (e) =>{
    let element = e.target.attributes.id.value;
    // Agrega el efecto push a todos los botones.
    if(e.target.tagName === "BUTTON"){
        e.target.classList.add("push")
        setTimeout(() => {
            e.target.classList.remove("push")
        }, 100)
    }
    // Incrementa o Decrementa el contador del timer.
    if(element && element== 'btn-up'){
        e.target.classList.add("scale")
        masUno.classList.add("show")
        minuts++
        if(minuts < 10){
            countMinuts.innerHTML= `0${minuts}`
        }else{
            countMinuts.innerHTML = `${minuts}`
        }
        setTimeout( () => {
            e.target.classList.remove("scale")
        }, 100)
        setTimeout( () => {
            masUno.classList.remove("show")
        }, 700)
    } else if (element && element== 'btn-down') {
        e.target.classList.add("scale")
        menosUno.classList.add("show")
        if(minuts > 0 && minuts < 10){
            minuts--
            countMinuts.innerHTML = `0${minuts}`
        } else if (minuts > 0 && minuts > 10){
            minuts--
            countMinuts.innerHTML = `${minuts}`
        }
        setTimeout(() => {
            e.target.classList.remove("scale")
        }, 100)
        setTimeout( () => {
            menosUno.classList.remove("show")
        }, 700)
    }
    // Detecta que boton esta siendo presionado.
    switch(element){
        // Detecta si se ha ingresado tiempo e inicia la el contador de asi serlo.
        case 'btn-start':
            showStart.classList.add("show")
            setTimeout(() => {
                showStart.classList.remove("show")
            }, 700)
            if (minuts == 0) {
                alert('No has indicado el tiempo ')
            } else {
                intervalCounter = setInterval(cargarSegundos, 1000)
            }
            break
        // Limpia detiene el contador y limpia el valor en las variables.
        case 'btn-reset':
            showReset.classList.add("show")
            setTimeout(() => {
                showReset.classList.remove("show")
            }, 700)
            clearInterval(intervalCounter)
            minuts = 0
            seconds = 0
            countMinuts.innerHTML = `0${minuts}`
            countSeconds.innerHTML = `0${seconds}`
            break;
        // Incrementa el tiempo del contador en 2.
        case 'btn-two':
            masDos.classList.add("show")
            setTimeout(() => {
                masDos.classList.remove("show")
            }, 700)
            minuts += 2
            if(minuts < 10){
                countMinuts.innerHTML = `0${minuts}`
            }else{
                countMinuts.innerHTML = `${minuts}`
            }
            break;
            // Incrementa el tiempo del contador en 5.
        case 'btn-five':
            masCinco.classList.add("show")
            setTimeout(() => {
                masCinco.classList.remove("show")
            }, 700)
            minuts += 5
            if(minuts < 10){
                countMinuts.innerHTML = `0${minuts}`
            }else{
                countMinuts.innerHTML = `${minuts}`
            }
            break;
        // Incrementa el tiempo del contador en 10.
        case 'btn-ten':
            masDiez.classList.add("show")
            setTimeout(() => {
                masDiez.classList.remove("show")
            }, 700)
            minuts += 10
            if(minuts < 10){
                countMinuts.innerHTML = `0${minuts}`
            }else{
                countMinuts.innerHTML = `${minuts}`
            }
            break;
        // Incrementa el tiempo del contador en 15.
        case 'btn-fifteen':
            masQuince.classList.add("show")
            setTimeout(() => {
                masQuince.classList.remove("show")
            }, 700)
            minuts += 15
            if(minuts < 10){
                countMinuts.innerHTML = `0${minuts}`
            }else{
                countMinuts.innerHTML = `${minuts}`
            }
            break;
        // Detiene el cronometro hasta que se presione start de nuevo.
        case 'btn-stop':
            count.classList.add("stopCount")
            setTimeout(() => {
                count.classList.remove("stopCount")
            }, 3000)
            clearInterval(intervalCounter);
    }
})

function cargarSegundos(){
    let displaySeconds;
    // Inicializa el contador de segundos en 59.
    if(seconds < 0) seconds = 59;
    // en base al valor actual determina la forma en que se inserta el valor.
    if(seconds < 10){
        displaySeconds = `0${seconds}`
    } else {
        displaySeconds = `${seconds}`
    }
    countSeconds.innerText = displaySeconds;
    seconds--;
    cargarMinutos(seconds)
}

function cargarMinutos(segundos){
    let txtMinutos;
    if(segundos == -1 && minuts != 0){
        setTimeout(() => {
            minuts--
        }, 500)
    } else if(segundos == -1 && minuts == 0){
        alertSound(filename)
        clearInterval(intervalCounter)
        seconds = 0;
        alert('Se acabo el tiempo')
        return
    }
    if(minuts< 10 && minuts != 0){
        txtMinutos = `0${minuts}`
    }else{
        txtMinutos = minuts
    }
    countMinuts.innerText = txtMinutos;
}

// Inserta y reproduce el audio de alerta al ser llamada.
const alertSound = (filename) => {
    let mp3Source = `<source src="assets/sounds/${filename}.mp3" type="audio/mpeg">`;
    let oggSource = `<source src="assets/sounds/${filename}.ogg" type="audio/ogg">`;
    let embedSource = `<embed hidden="true" autostart="true" loop="false" src="assets/sounds/${filename}.mp3">`;
    soundAlert.innerHTML = '<audio autoplay="autoplay">' + mp3Source + oggSource + embedSource + '</audio>';
}