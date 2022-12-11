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
    let element = e.target.attributes.id.value;
    if(e.target.tagName === "BUTTON"){
        e.target.classList.add("push")
        setTimeout(() => {
            e.target.classList.remove("push")
        }, 100)
    }

    if(element && element== 'btn-up'){
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
    } else if (element && element== 'btn-down') {
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
    // console.log(element)
    switch(element){
        case 'btn-start':
            if (minuts == 0) {
                alert('No has indicado el tiempo ')
            } else {
                intervalCounter = setInterval(cargarSegundos, 1000)
            }
            break
        case 'btn-reset':
            clearInterval(intervalCounter)
            minuts = 0
            seconds = 0
            countMinuts.innerHTML = `0${minuts}`
            countSeconds.innerHTML = `0${seconds}`
            break;
        case 'btn-two':
            minuts += 2
            if(minuts < 10){
                countMinuts.innerHTML = `0${minuts}`
            }else{
                countMinuts.innerHTML = `${minuts}`
            }
            break;
        case 'btn-five':
            minuts += 5
            if(minuts < 10){
                countMinuts.innerHTML = `0${minuts}`
            }else{
                countMinuts.innerHTML = `${minuts}`
            }
            break;
        case 'btn-ten':
            minuts += 10
            if(minuts < 10){
                countMinuts.innerHTML = `0${minuts}`
            }else{
                countMinuts.innerHTML = `${minuts}`
            }
            break;
        case 'btn-fifteen':
            minuts += 15
            if(minuts < 10){
                countMinuts.innerHTML = `0${minuts}`
            }else{
                countMinuts.innerHTML = `${minuts}`
            }
            break;
    }

})

function cargarSegundos(){
    let displaySeconds;
    if(seconds < 0) seconds = 59;
    if(seconds < 10){
        displaySeconds = `0${seconds}`
    } else {
        displaySeconds = seconds
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
    countMinuts.innerText = txtMinutos;
}

const alertSound = (filename) => {
    let mp3Source = `<source src="assets/sounds/${filename}.mp3" type="audio/mpeg">`;
    let oggSource = `<source src="assets/sounds/${filename}.ogg" type="audio/ogg">`;
    let embedSource = `<embed hidden="true" autostart="true" loop="false" src="assets/sounds/${filename}.mp3">`;
    soundAlert.innerHTML = '<audio autoplay="autoplay">' + mp3Source + oggSource + embedSource + '</audio>';
}