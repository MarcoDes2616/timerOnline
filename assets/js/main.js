// Contenedor de los botones
const panelBtn = document.getElementById("panel")
const btnStart = document.getElementById("btn_start")
const countMinuts = document.getElementById("minutos")
const countSeconds = document.getElementById('segundos')
const soundAlert = document.getElementById("sound")
const filename = 'alert'
let minuts = 0;
let seconds = 0;
let intervalCounter;

panelBtn.addEventListener("click", (e) =>{
    if(e.target.tagName === "BUTTON"){
        if(e.target.attributes.id.value == 'btn-start'){
            if(minuts == 0){
                alert('No has indicado el tiempo ')
            }else{
                intervalCounter = setInterval(cargarSegundos, 1000)
            }
        };
        e.target.classList.add("push")
        setTimeout(() => {
            e.target.classList.remove("push")
        }, 100)
    }

    if(e.target.attributes.id && e.target.attributes.id.value == 'btn-up'){
        e.target.classList.add("scale")
        minuts++
        if(minuts < 10){
            countMinuts.innerHTML= `0${minuts}`
        }else{
            countMinuts.innerHTML = `${minuts}`
        }
        setTimeout( () => {
            e.target.classList.remove("scale")
        }, 100)
    } else if (e.target.attributes.id && e.target.attributes.id.value == 'btn-down') {
        e.target.classList.add("scale")
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
    }
})

function cargarSegundos(){
    let displaySeconds;
    if(seconds < 0) seconds = 2;
    if(seconds < 10){
        displaySeconds = `0${seconds}`
    } else {
        displaySeconds = seconds
    }
    document.getElementById("segundos").innerText = displaySeconds;
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
        alertSound()
        alert('Se acabo el tiempo')
        clearInterval(intervalCounter)
        seconds = 0;
        return
    }
    if(minuts< 10 && minuts != 0){
        txtMinutos = `0${minuts}`
    }else{
        txtMinutos = minuts
    }
    document.getElementById("minutos").innerText = txtMinutos;
}

const alertSound = () => {
    var mp3Source = `<source src="assets/sounds/alert.mp3" type="audio/mpeg">`;
    var oggSource = `<source src="assets/sounds/alert.ogg" type="audio/ogg">`;
    var embedSource = `<embed hidden="true" autostart="true" loop="false" src="assets/sounds/alert.mp3">`;
    soundAlert.innerHTML = '<audio autoplay="autoplay">' + mp3Source + oggSource + embedSource + '</audio>';
}