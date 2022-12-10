const btnTwo = document.getElementById("btn_two")

const btnFive = document.getElementById("btn_five")

const btnTen = document.getElementById("btn_ten")

const btnFifteen = document.getElementById("btn_fifteen")

const btnStart = document.getElementById("btn_start")

const btnUp = document.getElementById("btn_up")

const btnDown = document.getElementById("btn_down")

const btnStop = document.getElementById("btn_stop")

const btnReset = document.getElementById("btn_reset")

const countMinuts = document.getElementById("minutos")

const panelBtn = document.getElementById("panel")

let minutos

//panelBtn.addEventListener("click", (e) =>{
   // if(e.target.name === "buttom")
//})


btnTwo.addEventListener("click", () =>{
    countMinuts.innerText = 02
    btnTwo.classList.add("push")
    setTimeout( () => {
        btnTwo.classList.remove("push")
    }, 100)
})

btnFive.addEventListener("click", () =>{
    countMinuts.innerText = 05
    btnFive.classList.add("push")
    setTimeout( () => {
        btnFive.classList.remove("push")
    }, 100)
})

btnTen.addEventListener("click", () =>{
    countMinuts.innerText = 10
    btnTen.classList.add("push")
    setTimeout( () => {
        btnTen.classList.remove("push")
    }, 100)
})

btnFifteen.addEventListener("click", () =>{
    countMinuts.innerText = 15
    btnFifteen.classList.add("push")
    setTimeout( () => {
        btnFifteen.classList.remove("push")
    }, 100)
})



btnStop.addEventListener("click", () =>{
    //countMinuts.innerText = ""
    btnStop.classList.add("push")
    setTimeout( () => {
        btnStop.classList.remove("push")
    }, 100)
})

btnReset.addEventListener("click", () =>{
    btnReset.classList.add("push")
    setTimeout( () => {
        btnReset.classList.remove("push")
    }, 100)
})

btnUp.addEventListener("click", () =>{
    countMinuts.innerText++
    btnUp.classList.add("scale")
    setTimeout( () => {
        btnUp.classList.remove("scale")
    }, 100)
})

btnDown.addEventListener("click", () =>{
    if(countMinuts.innerText >= 1){
        countMinuts.innerText--
    }
    btnDown.classList.add("scale")
    setTimeout( () => {
        btnDown.classList.remove("scale")
    }, 100)
})

let segundos = 0
minutos = 10

btnStart.addEventListener("click", () =>{
    
    cargarSegundos()
    btnStart.classList.add("push")
    setTimeout( () => {
        btnStart.classList.remove("push")
    }, 100)
})

cargarSegundos()

function cargarSegundos(){
    let txtsegundos;
    if(segundos < 0){
        segundos = 59
    }
    if(segundos < 10){
        txtsegundos = `0${segundos}`
    } else {
        txtsegundos = segundos
    }
    document.getElementById("segundos").innerText = txtsegundos;
    segundos--;

    cargarMinutos(segundos)
}

setInterval(cargarSegundos, 1000)

function cargarMinutos(segundos){
    let txtMinutos;
    if(segundos == -1 && minutos != 0){
        setTimeout(() => {
            minutos--
        }, 500)
    } else if(segundos == -1 && minutos == 0){
        //setTimeout(() => {
            //minutos = 59
        //}, 500)
        return
    }
    if(minutos<10){
        txtMinutos = `0${minutos}`
    } else {
        txtMinutos = minutos
    }
    document.getElementById("minutos").innerText = txtMinutos;
}
