//------------------openBienvenidos---------------

document.addEventListener('DOMContentLoaded',(evt)=>{
        evt.preventDefault()
        document.querySelector('.Emergentebienvenido').style.display="block"}
        )
        
//---------------info de viajes-----------



const render = (packs) =>{

                document.querySelector('.caja1').innerHTML=` 
                <ul>
                <li>"Destino" ${packs[0].destino}</li>
                <li>"precio" ${packs[0].precio}</li>
                <li>"hospedaje" ${packs[0].hospedaje}</li>
                <li>"trasladoAereo" ${packs[0].trasladoAereo}</li>
                <li>"trasladoTierra" ${packs[0].trasladoTierra}</li>
                <li>"excurciones" ${packs[0].excurciones}</li>
                <li>"noches" ${packs[0].noches}</li>
                </ul>`

                document.querySelector('.caja2').innerHTML=` 
                <ul>
                <li>"Destino" ${packs[2].destino}</li>
                <li>"precio" ${packs[2].precio}</li>
                <li>"hospedaje" ${packs[2].hospedaje}</li>
                <li>"trasladoAereo" ${packs[2].trasladoAereo}</li>
                <li>"trasladoTierra" ${packs[2].trasladoTierra}</li>
                <li>"excurciones" ${packs[2].excurciones}</li>
                <li>"noches" ${packs[2].noches}</li>
                </ul>`
                
                document.querySelector('.caja3').innerHTML=` 
                <ul>
                <li>"Destino" ${packs[1].destino}</li>
                <li>"precio" ${packs[1].precio}</li>
                <li>"hospedaje" ${packs[1].hospedaje}</li>
                <li>"trasladoAereo" ${packs[1].trasladoAereo}</li>
                <li>"trasladoTierra" ${packs[1].trasladoTierra}</li>
                <li>"excurciones" ${packs[1].excurciones}</li>
                <li>"noches" ${packs[1].noches}</li>
                </ul>`

                document.querySelector('.caja4').innerHTML=` 
                <ul>
                <li>"Destino" ${packs[3].destino}</li>
                <li>"precio" ${packs[3].precio}</li>
                <li>"hospedaje" ${packs[3].hospedaje}</li>
                <li>"trasladoAereo" ${packs[3].trasladoAereo}</li>
                <li>"trasladoTierra" ${packs[3].trasladoTierra}</li>
                <li>"excurciones" ${packs[3].excurciones}</li>
                <li>"noches" ${packs[3].noches}</li>
                </ul>`
                
                document.querySelector('.caja5').innerHTML=` 
                <ul>
                <li>"Destino" ${packs[4].destino}</li>
                <li>"precio" ${packs[4].precio}</li>
                <li>"hospedaje" ${packs[4].hospedaje}</li>
                <li>"trasladoAereo" ${packs[4].trasladoAereo}</li>
                <li>"trasladoTierra" ${packs[4].trasladoTierra}</li>
                <li>"excurciones" ${packs[4].excurciones}</li>
                <li>"noches" ${packs[4].noches}</li>
                </ul>`

                document.querySelector('.caja6').innerHTML=` 
                <ul>
                <li>"Destino" ${packs[5].destino}</li>
                <li>"precio" ${packs[5].precio}</li>
                <li>"hospedaje" ${packs[5].hospedaje}</li>
                <li>"trasladoAereo" ${packs[5].trasladoAereo}</li>
                <li>"trasladoTierra" ${packs[5].trasladoTierra}</li>
                <li>"excurciones" ${packs[5].excurciones}</li>
                <li>"noches" ${packs[5].noches}</li>
                </ul>`

}

const Emergentebienvenido = document.querySelector('.Emergentebienvenido')

const cargardatos = async () =>{
        const res = await fetch('data.json')
        const json = await res.json()
        render(json) 
}       
document.addEventListener('DOMContentLoaded',cargardatos)

//----------------ver viajes-------------------
function open1 (){
        const verviajes = document.querySelector('.verviajes')
        verviajes.addEventListener('click', (evt)=>{
                evt.preventDefault()
                document.querySelector('.tarjetas').style.display="block"}
        )     
        verviajes.addEventListener('click', (evt)=>{
                evt.preventDefault()
                document.querySelector('.cuestion').style.display="none"}
        )     
        verviajes.addEventListener('click', (evt)=>{
                evt.preventDefault()
                document.querySelector('.reservasusuario').style.display="none"}
        )  
}
open1()
        
const brasil = document.querySelector('#brasil')
                brasil.addEventListener('click',(evt)=>{
                        evt.preventDefault()
                                document.querySelector('.reservasusuario').style.display="block"
                                document.querySelector('.tarjetas').style.display="none"
                        })
const peru = document.querySelector('#peru')
                peru.addEventListener('click',(evt)=>{
                         evt.preventDefault()
                                document.querySelector('.reservasusuario').style.display="block"
                                document.querySelector('.tarjetas').style.display="none"
                        })

const colombia = document.querySelector('#colombia')
                colombia.addEventListener('click',(evt)=>{
                        evt.preventDefault()
                                document.querySelector('.reservasusuario').style.display="block"
                                document.querySelector('.tarjetas').style.display="none"
                        })
const mexico = document.querySelector('#mexico')
                mexico.addEventListener('click',(evt)=>{
                        evt.preventDefault()
                                document.querySelector('.reservasusuario').style.display="block"
                                document.querySelector('.tarjetas').style.display="none"
                        })
const uruguay = document.querySelector('#uruguay')
                uruguay.addEventListener('click',(evt)=>{
                        evt.preventDefault()
                                document.querySelector('.reservasusuario').style.display="block"
                                document.querySelector('.tarjetas').style.display="none"
                        })
const chile = document.querySelector('#chile')
                chile.addEventListener('click',(evt)=>{
                        evt.preventDefault()
                                document.querySelector('.reservasusuario').style.display="block"
                                document.querySelector('.tarjetas').style.display="none"
                        })

//----------------ver consultas------------------------
function open2 (){
        const verconsultas = document.querySelector('.verconsultas')
        verconsultas.addEventListener('click', (evt)=>{
                evt.preventDefault()
                document.querySelector('.cuestion').style.display="block" }
        )
        verconsultas.addEventListener('click', (evt)=>{
                evt.preventDefault()
                document.querySelector('.tarjetas').style.display="none" }
        )
       verconsultas.addEventListener('click', (evt)=>{
                evt.preventDefault()
                document.querySelector('.reservasusuario').style.display="none" }
        ) 
        
}
open2()
const formulario = document.querySelector('#data')

formulario.addEventListener('submit',(evt)=>{
        evt.preventDefault()
        let name = document.querySelector('.name').value
localStorage.setItem('Nombre',name)
         let lastname = document.querySelector('.lastname').value
localStorage.setItem('Apellido', lastname)
        let mail = document.querySelector('.mail').value
localStorage.setItem('mail', mail)
        let writing = document.querySelector('#writing').value
localStorage.setItem('consulta', writing)
 })
 const enviando = document.querySelector('.enviando')
 enviando.addEventListener('click',()=>{
        document.querySelector('.cuestion').style.display="none"
        
})

//--------------------------ver reservas----------------------------
function open3 (){
        const verreservas = document.querySelector('.verreservas')
        verreservas.addEventListener('click', (evt)=>{
                evt.preventDefault()
                document.querySelector('.reservasusuario').style.display="block" }
        )
        verreservas.addEventListener('click', (evt)=>{
                evt.preventDefault()
                document.querySelector('.cuestion').style.display="none" }
        )
        verreservas.addEventListener('click', (evt)=>{
                evt.preventDefault()
                document.querySelector('.tarjetas').style.display="none" }
        )
}
open3()
function openviajes(){
        const btnselect = document.querySelector('.btnselect')
btnselect.addEventListener('click',(evt)=>{
        evt.preventDefault()
        document.querySelector('.tarjetas').style.display="block"
})
btnselect.addEventListener('click',()=>{
        document.querySelector('.reservasusuario').style.display="none"
})
}
openviajes()
//-----------------btncerrar----------------------
const cerrar = document.querySelector('#cerrar')
cerrar.addEventListener('click',()=>{
        document.querySelector('.cuestion').style.display="none"
})
const cerrartarjetas = document.querySelector('#cerrartarjetas')
cerrartarjetas.addEventListener('click',()=>{
        document.querySelector('.tarjetas').style.display="none"
})
const cerrarreserva = document.querySelector('#cerrarreserva')
cerrarreserva.addEventListener('click',()=>{
        document.querySelector('.reservasusuario').style.display="none"
})
//---------------------Bienvenidos a viajar--------------------
function open4(){
const formulario = document.querySelector('#datos')

formulario.addEventListener('submit',(evt)=>{
        evt.preventDefault()
        let nombre = document.querySelector('.nombre').value
localStorage.setItem('Nombre',nombre)
document.querySelector('.name').value=nombre
         let apellido = document.querySelector('.apellido').value
localStorage.setItem('Apellido', apellido)
document.querySelector('.lastname').value=apellido
 })
const cerrarbienvenida = document.querySelector('#cerrarbienvenida')
cerrarbienvenida.addEventListener('click',()=>{
        document.querySelector('.Emergentebienvenido').style.display="none"
        
})
const enviar = document.querySelector('.enviar')
enviar.addEventListener('click',()=>{
        document.querySelector('.Emergentebienvenido').style.display="none"     
})

}
open4()
//-------------------medio de pago--------------------------
const tarjeta = document.querySelector('.tarjeta')
tarjeta.addEventListener('click',(evt)=>{
        evt.preventDefault()
        document.querySelector('.metododepago').innerHTML=`<p>"Tarjeta de Credito"</p>`

})
const tranferencia = document.querySelector('.tranferencia')
tranferencia.addEventListener('click',(evt)=>{
        evt.preventDefault()
        document.querySelector('.metododepago').innerHTML=`<p>"Tranferencia Bancaria"</p>`

})
const efectivo = document.querySelector('.efectivo')
efectivo.addEventListener('click',(evt)=>{
        evt.preventDefault()
        document.querySelector('.metododepago').innerHTML=`<p>"Efectivo"</p>`

})
//----------------datosde reserva-----------------

const ventanas = document.querySelector('.ventanas')
ventanas.addEventListener('submit', (evt)=>{
        evt.preventDefault()
        const datanombre = document.querySelector('.datanombre').value
        const dataapellido = document.querySelector('.dataapellido').value
        const datadni = document.querySelector('.datadni').value
        const datamail = document.querySelector('.datamail').value
        const dataviaje = document.querySelector('.dataviaje').value
        const metododepago = document.querySelector('.metododepago').value

        document.querySelector('.paqueteseleccionado').innerHTML=`
                <ul>
                <li>"Nombre :" ${datanombre}</li>
                <li>"Apellido :" ${dataapellido}</li>
                <li>"DNI :" ${datadni}</li>
                <li>"Email :" ${datamail}</li>
                <li>"Destino :" ${dataviaje}</li>
                <li>"Metodo de pago :" ${metododepago}</li>
                </ul>
        `
        console.log(document.querySelector('.metododepago').value)

})

//datos del usuario-------------------------------------
/* const formulario = document.querySelector('#datos')

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
        {destino:"brasil", precio:15000, hospedaje:"Hotel", trasladoAereo:"AerolineasArgentina", trasladoTierra:"auto", excurciones:5, noches:9},
        {destino:"colombia",precio:17000, hospedaje:"Hotel", trasladoAereo:"United Airlines", trasladoTierra:"auto", excurciones:4, noches:10},
        {destino:"peru", precio:12000, hospedaje:"Hotel", trasladoAereo:"Copa Airlines", trasladoTierra:"auto", excurciones:4, noches:11}, 
        {destino:"mexico", precio:12000, hospedaje:"Hotel", trasladoAereo:"Copa Airlines", trasladoTierra:"auto", excurciones:4, noches:9}, 
        {destino:"uruguay", precio:10000, hospedaje:"Hotel", trasladoAereo:"AerolineasArgentina", trasladoTierra:"auto", excurciones:4, noches:8}, 
        {destino:"chile", precio:80000, hospedaje:"Hotel", trasladoAereo:"Copa Airlines", trasladoTierra:"auto", excurciones:4, noches:5}, 

];
console.log(paquetes)
/* for(let i = 0; i<paquetes.length; i+=1){
        console.log("Destino " + paquetes[i].destino + " Precio " + paquetes[i].precio + " Hospedaje " + paquetes[i].hospedaje + " Aereo " + paquetes[i].trasladoAereo + " Tierra " + paquetes[i].trasladoTierra +" Excurciones "+ paquetes[i].excurciones + " Noches " + paquetes[i].noches )
        } 

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

// guardado... */
