
alert("Bienvenidos a Viajar")
console.log("Bienvenidos a Viajar")

alert("Ingresa tus Datos")
console.log("datos")

nombre = prompt("ingresa tu nombre")
console.log("Nombre : " + nombre)

apellido = prompt("Ingresa Apellido")
console.log("Apellido : " + apellido)

documento = prompt("Ingresa DNI")
console.log("Documento : " + documento)
 

const paquetes = [
        {destino:"brasil", precio:70000 },
        {destino:"colombia",precio:90000 },
        {destino:"peru", precio:80000 },
];
//for( let i=0; i<paquetes.length; i+=1){console.log(paquetes[i].destino)}
for(let paquete of paquetes){alert("Paquete a " + paquete.destino + " Precio " + paquete.precio);
                                console.log("Paquete a " + paquete.destino + " Precio " + paquete.precio)}

let Destino = prompt("Ingrese Destino")
console.log("Destino : " + Destino)

if(Destino == "brasil"){
        //a cobrar
                 alert("Paquete a Brasil $70000")
                let monto = prompt ("ingresa monto")
                        if( monto == 70000){
                                console.log("transaccion Exitosa")}
                                else{
                                        console.log("Monto a Cobrar 70000")
                                }
                                //Pago
                        alert("Pagos con Efectivo,Cheque,Tarjeta")
                        let MetodoDePago = prompt("Ingrese Metodo de Pago")
                        switch(MetodoDePago){
                                case "efectivo":
                                        console.log("pagaste con efectivo");
                                        break
                                case "cheque":
                                        console.log("pagaste con cheque");
                                        break
                                case "tarjeta":
                                        console.log("pagaste con tarjeta");
                                //Cuotas
                                        for(let Cuotas=C=0;C<=24;C+=3){
                                                if(C==15){
                                                        break;
                                                }
                                                console.log("cuotas"+C)
                                        }
                                        break
                                default:
                                        console.log("pagaste con " + MetodoDePago)
                        }
                console.log("info Paquete")
                let Paquete = 70000
                        console.log("Paquete : " + Paquete)
                let hospedaje = "hotel"
                        console.log("Hospedaje : " + hospedaje)
                let trasladoaereo = "AerolineasArgentina"
                        console.log("Trasladoaereo : " + trasladoaereo)
                let trasladotierra = "Auto"
                        console.log("Trasladotierra : " + trasladotierra)
                let excursiones = 5
                        console.log("Excursiones : " + excursiones)
                let dias = 10
                        console.log("Dias : " + dias)}
else if(Destino == "colombia"){
         //Argumento
                alert("Paquete a Colombia $90000")
                let monto = prompt ("ingresa monto")
                        if( monto == 90000){
                                console.log("transaccion Exitosa")}
                                else{
                                        console.log("Monto a Cobrar 70000")
                                }
                                //Pago
                        alert("Pagos con Efectivo,Cheque,Tarjeta")
                        let MetodoDePago = prompt("Ingrese Metodo de Pago")
                        switch(MetodoDePago){
                                case "efectivo":
                                        console.log("pagaste con efectivo");
                                        break
                                case "cheque":
                                        console.log("pagaste con cheque");
                                        break
                                case "tarjeta":
                                        console.log("pagaste con tarjeta");
                                //Cuotas
                                        for(let Cuotas=C=0;C<=24;C+=3){
                                                if(C==15){
                                                        break;
                                                }
                                                console.log("cuotas"+C)
                                        }
                                        break
                                default:
                                        console.log("pagaste con " + MetodoDePago)
                        }
                console.log("info Paquete")
                let Paquete = 90000
                        console.log("Paquete : " + Paquete)
                let hospedaje = "hotel"
                        console.log("Hospedaje : " + hospedaje)
                let trasladoaereo = "United Airlines"
                        console.log("Trasladoaereo : " + trasladoaereo)
                let trasladotierra = "Auto"
                        console.log("Trasladotierra : " + trasladotierra)
                let excursiones = 5
                        console.log("Excursiones : " + excursiones)
                let dias = 10
                        console.log("Dias : " + dias)}
else if(Destino == "peru"){
        //Argumento
                alert("Paquete a Peru $80000")
                let monto = prompt ("ingresa monto")
                        if( monto == 80000){
                                console.log("transaccion Exitosa")}
                                else{
                                        console.log("Monto a Cobrar 70000")
                                }
                                //Pago
                        alert("Pagos con Efectivo,Cheque,Tarjeta")
                        let MetodoDePago = prompt("Ingrese Metodo de Pago")
                        switch(MetodoDePago){
                                case "efectivo":
                                        console.log("pagaste con efectivo");
                                        break
                                case "cheque":
                                        console.log("pagaste con cheque");
                                        break
                                case "tarjeta":
                                        console.log("pagaste con tarjeta");
                                //Cuotas
                                        for(let Cuotas=C=0;C<=24;C+=3){
                                                if(C==15){
                                                        break;
                                                }
                                                console.log("cuotas"+C)
                                        }
                                        break
                                default:
                                        console.log("pagaste con " + MetodoDePago)
                        }

                console.log("info Paquete")
                let Paquete = 80000
                        console.log("Paquete : " + Paquete)
                let hospedaje = "hotel"
                        console.log("Hospedaje : " + hospedaje)
                let trasladoaereo = "Copa Airlines"
                        console.log("Trasladoaereo : " + trasladoaereo)
                let trasladotierra = "Auto"
                        console.log("Trasladotierra : " + trasladotierra)
                let excursiones = 5
                        console.log("Excursiones : " + excursiones)
                let dias = 10
                        console.log("Dias : " + dias)}


