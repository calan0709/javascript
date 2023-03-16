//datos del usuario-------------------------------------
const formulario = document.querySelector('#datos')

formulario.addEventListener('submit',(evt)=>{
        evt.preventDefault()
        let nombre = document.querySelector('.nombre').value
localStorage.setItem('Nombre',nombre)
         let apellido = document.querySelector('.apellido').value
localStorage.setItem("Apellido: ", apellido)
        let dni = document.querySelector('.dni').value
localStorage.setItem("DNI: ", dni)
        let paquete = document.querySelector('.paquete').value
localStorage.setItem("Paquete: " , paquete)  
alert("Procesado...")
} )
//destino del usuario------------------------------------

const paquetes = [
        {destino:"brasil", precio:70000, hospedaje:"Hotel", trasladoAereo:"AerolineasArgentina", trasladoTierra:"auto", excurciones:5, noches:9},
        {destino:"colombia",precio:90000, hospedaje:"Hotel", trasladoAereo:"United Airlines", trasladoTierra:"auto", excurciones:4, noches:10},
        {destino:"peru", precio:80000, hospedaje:"Hotel", trasladoAereo:"Copa Airlines", trasladoTierra:"auto", excurciones:4, noches:11}, 
];

/* for(let i = 0; i<paquetes.length; i+=1){
        console.log("Destino " + paquetes[i].destino + " Precio " + paquetes[i].precio + " Hospedaje " + paquetes[i].hospedaje + " Aereo " + paquetes[i].trasladoAereo + " Tierra " + paquetes[i].trasladoTierra +" Excurciones "+ paquetes[i].excurciones + " Noches " + paquetes[i].noches )
        } */

document.getElementById('brasildatos').value = paquetes[0].destino + " Precio " + paquetes[0].precio + " Hospedaje " + paquetes[0].hospedaje + " Aereo " + paquetes[0].trasladoAereo + " Tierra " + paquetes[0].trasladoTierra +" Excurciones "+ paquetes[0].excurciones + " Noches " + paquetes[0].noches
document.getElementById('perudatos').value = paquetes[1].destino + " Precio " + paquetes[1].precio + " Hospedaje " + paquetes[1].hospedaje + " Aereo " + paquetes[1].trasladoAereo + " Tierra " + paquetes[1].trasladoTierra +" Excurciones "+ paquetes[1].excurciones + " Noches " + paquetes[1].noches
document.getElementById('colombiadatos').value = paquetes[2].destino + " Precio " + paquetes[2].precio + " Hospedaje " + paquetes[2].hospedaje + " Aereo " + paquetes[2].trasladoAereo + " Tierra " + paquetes[2].trasladoTierra +" Excurciones "+ paquetes[2].excurciones + " Noches " + paquetes[2].noches


formulario.addEventListener('submit', (evt)=>{
        evt.preventDefault()
        const destino = document.querySelector('.paquete').value
        let paquete = destino
        switch(paquete){
                case "brasil":document.getElementById('destino').value = paquetes[0].destino + " Precio " + paquetes[0].precio + " Hospedaje " + paquetes[0].hospedaje + " Aereo " + paquetes[0].trasladoAereo + " Tierra " + paquetes[0].trasladoTierra +" Excurciones "+ paquetes[0].excurciones + " Noches " + paquetes[0].noches
                        break
                case "colombia":document.getElementById('destino').value = paquetes[1].destino + " Precio " + paquetes[1].precio + " Hospedaje " + paquetes[1].hospedaje + " Aereo " + paquetes[1].trasladoAereo + " Tierra " + paquetes[1].trasladoTierra +" Excurciones "+ paquetes[1].excurciones + " Noches " + paquetes[1].noches
                        break
                case "peru": document.getElementById('destino').value = paquetes[2].destino + " Precio " + paquetes[2].precio + " Hospedaje " + paquetes[2].hospedaje + " Aereo " + paquetes[2].trasladoAereo + " Tierra " + paquetes[2].trasladoTierra +" Excurciones "+ paquetes[2].excurciones + " Noches " + paquetes[2].noches
                        break
                        default: alert("Destino Incorrecto")
                }
})
 
//Pago del destino

formulario.addEventListener('submit', (evt)=>{
        evt.preventDefault()
        let paquete = document.querySelector('.paquete').value
        let viaje = paquete
        switch(viaje){
                case "brasil": document.querySelector('.costodepaquete').value = "70000"
                        break
                case "colombia": document.querySelector('.costodepaquete').value = "90000"
                        break
                case "peru": document.querySelector('.costodepaquete').value = "80000"
                        break
                        default: document.querySelector('.costodepaquete').value = "000000"
                }
        
}) 


const info = document.querySelector('.masinfo')
const boton1 = document.querySelector('.btn1')
const boton2 = document.querySelector('.btn2')
const boton3 = document.querySelector('.btn3')

function clicktarjeta(){
let x = document.querySelector('.costodepaquete').value
let r = x*10/100

document.querySelector('.llenar').textContent = "Cuotas"
document.querySelector('.cuotas').value = "3 , 6 , 12"
document.querySelector('.total').value = r

}

function trasferencia(){
let x = document.querySelector('.costodepaquete').value

document.querySelector('.llenar').textContent = "Transferencia Bancaria"
document.querySelector('.cuotas').value = "CBU : 3482342342/3"
document.querySelector('.total').value = x

}

function efectivo(){
let x = document.querySelector('.costodepaquete').value

document.querySelector('.llenar').textContent = "Sucursal de Pago"
document.querySelector('.cuotas').value = "A.Aven 3029,Palermo"
document.querySelector('.total').value = x

}

boton1.addEventListener('click', clicktarjeta )
boton2.addEventListener('click', trasferencia )
boton3.addEventListener('click', efectivo )

// guardado...
