// AJAXX ///////////////////
// $(function(){
//     $.ajax({
//         // method: 'GET',
//         url: 'datos.json',
//         success: function(data,status,xhr){     
//             console.log(data)   
//             console.log(status)  
//             console.log(xhr)          
//             console.log("==========================")  
//             panDeJamon = new producto(data[0].productoJson.nombre, data[0].productoJson.precio, data[0].productoJson.cantidad, data[0].productoJson.moneda, data[0].productoJson.tipo);  
//             panDeJamonT = new producto(data[1].productoJson.nombre, data[1].productoJson.precio, data[1].productoJson.cantidad, data[1].productoJson.moneda, data[1].productoJson.tipo);   
//             panDeJamonH = new producto(data[2].productoJson.nombre, data[2].productoJson.precio, data[2].productoJson.cantidad, data[2].productoJson.moneda, data[2].productoJson.tipo);                      // success puede recibir hasta 3 parametros; 1) la respuesta del recurso que estamos consultando, 2) estatus, 3) 
//             golfeado = new producto(data[3].productoJson.nombre, data[3].productoJson.precio, data[3].productoJson.cantidad, data[3].productoJson.moneda, data[3].productoJson.tipo);                      // success puede recibir hasta 3 parametros; 1) la respuesta del recurso que estamos consultando, 2) estatus, 3) 
//             golfeadoQ = new producto(data[4].productoJson.nombre, data[4].productoJson.precio, data[4].productoJson.cantidad, data[4].productoJson.moneda, data[4].productoJson.tipo);                      // success puede recibir hasta 3 parametros; 1) la respuesta del recurso que estamos consultando, 2) estatus, 3) 

//         },                                                      
//         error: function(xhr,status,errorThrown){
//             console.log(xhr)  
//             console.log(status)
//             console.log(errorThrown)  
//         }               

//     })
// })
/////////////////////////////////////////////////////////////////// PRODUCTOS - CONSTRUCTOR /////////////////////////////////////////////////////////////////////////////////////////
function producto(nombre, precio, cantidad, moneda, tipo){
    this.nombre = nombre;//el this hace refencia a la instancia del objeto que se esta creando
    this.precio = precio;
    this.cantidad = cantidad;
    this.moneda = moneda;
    this.tipo = tipo;
}


/////////////////////////////////////////////////////////////////// PRODUCTOS - OBJETOS /////////////////////////////////////////////////////////////////////////////////////////////
let producto1=3
let producto2=20
let producto3=15
let producto4= 30
let producto5= 20
let producto6= 10



let mermeladaFrutilla = new producto("Mermelada de Frutilla", 250, producto1, "$", "Mermeladas");
let mermeladaManzana = new producto("Mermelada de Manzana y Pera", 270, producto2, "$", "Mermeladas");
let mermeladaNaranja = new producto("Mermelada de Naranja", 260, producto3, "$", "Mermeladas");
let panDeJamon = []
let panDeJamonT = []
let panDeJamonH = []
let golfeado = []
let golfeadoQ = []


/////////////////////////////////////////////////////////////////// VARIABLES Y ARREGLOS ////////////////////////////////////////////////////////////////////////////////////////////

let total = 0
let totalDolar = 0
let carrito = []
let carritoP = []
let final = []                                                                          // Aqui uni dos arrays, desafio de la clase
const totalDom = document.querySelector('#total');
// const totalDom2 = document.querySelector('#total2');
/// 20/12/2020: despues se integra mejora para hacer un solo querySelector


/////////////////////////////////////////////////////////////////// ARROW ///////////////////////////////////////////////////////////////////////////////////////////////////////////
// para sumar la variable total en cada funcion
let reducer = (accumulator, currentValue) => accumulator + currentValue;                // return incluido
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce


/////////////////////////////////////////////////////////////////// FUNCIONES DE COMPRA /////////////////////////////////////////////////////////////////////////////////////////////



function comprar(){
    if(compras==="frutilla"){
        if(producto1 > 0){
            for (let i = 0; i < cantidadItem1; i++){
                carrito.push(mermeladaFrutilla.precio);                                             // totalizador de la compra
                carritoP.push(mermeladaFrutilla);     
                
            }
            // carrito.push(mermeladaFrutilla.precio);                                             // totalizador de la compra
            // carritoP.push(mermeladaFrutilla);                                                   // mi array de objetos
            console.log(carrito);                                                                   
            // alert("Has agregado una mermelada de Fresa al carrito.");
            total = carrito.reduce(reducer);                                                        // add
            // alert("el precio total es de " + total + "pesos")
            final = carrito.concat(carritoP);                                                   
            console.log(final);
            console.log("ahora el total del carrito es "+ total + "pesos")
            totalDom.innerHTML = `${total}`
            carritoText()
            console.log(`${carritoP}`)
            producto1 = producto1-cantidadItem1
            cantDis1.innerHTML = `${producto1}`
            resetProducto()
            cantLand1C.innerHTML = `${mermeladaFrutilla.cantidad - producto1}`
            sub1.innerHTML = `${(mermeladaFrutilla.cantidad - producto1) * mermeladaFrutilla.precio}`
            $( ".disappear1").show();
            console.log(total)
            avisoLens()
            alertaSuccess()
            noBorrarFav=false
        }
        else{
            noBorrarFav=true
            // alert('ya no hay')
            alertaWarning()
        }
    }else if(compras==="manzana"){
        if(producto2 > 0){  
            for (let i = 0; i < cantidadItem2; i++){
                carrito.push(mermeladaManzana.precio);                                              // totalizador de la compra
                carritoP.push(mermeladaManzana);   
            }
            // carrito.push(mermeladaManzana.precio);                                              // totalizador de la compra
            // carritoP.push(mermeladaManzana);                                                    // mi array de objetos
            console.log(carrito);                                                                   
            // alert("Has agregado una mermelada de Manzana al carrito.");
            total = carrito.reduce(reducer);                                                    // add
            // alert("el precio total es de " + total + "pesos")
            final = carrito.concat(carritoP);                                                   
            console.log(final);
            console.log("ahora el total del carrito es "+ total + "pesos")
            totalDom.innerHTML = `${total}`
            carritoText()
            console.log(`${carritoP}`)
            producto2 = producto2-cantidadItem2
            cantDis2.innerHTML = `${producto2}`
            resetProducto()
            // subtotal2 = subtotal2 + (mermeladaManzana.precio * cantidadItem2)    
            cantLand2C.innerHTML = `${mermeladaManzana.cantidad - producto2}`
            sub2.innerHTML = `${(mermeladaManzana.cantidad - producto2) * mermeladaManzana.precio}`
            $( ".disappear2").show(); 
            avisoLens()
            alertaSuccess()
        }
        else{
            // alert('ya no hay')
            alertaWarning()
        }

    }else if(compras==="naranja"){
        if(producto3 > 0){
            for (let i = 0; i < cantidadItem3; i++){
                carrito.push(mermeladaNaranja.precio);                                              // totalizador de la compra
                carritoP.push(mermeladaNaranja);     
            }
            // carrito.push(mermeladaNaranja.precio);                                              // totalizador de la compra
            // carritoP.push(mermeladaNaranja);                                                    // mi array de objetos
            console.log(carrito);                                                                   
            // alert("Has agregado una mermelada de Naranja al carrito.");
            total = carrito.reduce(reducer);                                                    // add
            // alert("el precio total es de " + total + "pesos")
            final = carrito.concat(carritoP);                                                   
            console.log(final);
            console.log("ahora el total del carrito es "+ total + "pesos")
            totalDom.innerHTML = `${total}`
            carritoText()
            console.log(`${carritoP}`)
            producto3 = producto3-cantidadItem3
            cantDis3.innerHTML = `${producto3}`
            resetProducto()
            cantLand3C.innerHTML = `${mermeladaNaranja.cantidad - producto3}`
            sub3.innerHTML = `${(mermeladaNaranja.cantidad - producto3) * mermeladaNaranja.precio}`
            $( ".disappear3").show();
            avisoLens()
            alertaSuccess()
        }
        else{
            // alert('ya no hay')
            alertaWarning()
        }
    }else     if(compras==="frutilla2"){ //temporada2
        if(producto4 > 0){
            for (let i = 0; i < cantidadItem4; i++){
                carrito.push(golfeado.precio);                                             // totalizador de la compra
                carritoP.push(golfeado);     
                
            }
            // carrito.push(mermeladaFrutilla.precio);                                             // totalizador de la compra
            // carritoP.push(mermeladaFrutilla);                                                   // mi array de objetos
            console.log(carrito);                                                                   
            // alert("Has agregado una mermelada de Fresa al carrito.");
            total = carrito.reduce(reducer);                                                        // add
            // alert("el precio total es de " + total + "pesos")
            final = carrito.concat(carritoP);                                                   
            console.log(final);
            console.log("ahora el total del carrito es "+ total + "pesos")
            totalDom.innerHTML = `${total}`
            carritoText()
            console.log(`${carritoP}`)
            producto4 = producto4-cantidadItem4
            cantDis4.innerHTML = `${producto4}`
            resetProducto()
            cantLand4C.innerHTML = `${golfeado.cantidad - producto4}`
            sub4.innerHTML = `${(golfeado.cantidad - producto4) * golfeado.precio}`
            $( ".disappear4").show();
            console.log(total)
            avisoLens()
            alertaSuccess()
            noBorrarFav=false
        }
        else{
            noBorrarFav=true
            // alert('ya no hay')
            alertaWarning()
        }
    }else if(compras==="manzana2"){
        if(producto5 > 0){  
            for (let i = 0; i < cantidadItem5; i++){
                carrito.push(golfeadoQ.precio);                                              // totalizador de la compra
                carritoP.push(golfeadoQ);   
            }
            // carrito.push(mermeladaManzana.precio);                                              // totalizador de la compra
            // carritoP.push(mermeladaManzana);                                                    // mi array de objetos
            console.log(carrito);                                                                   
            // alert("Has agregado una mermelada de Manzana al carrito.");
            total = carrito.reduce(reducer);                                                    // add
            // alert("el precio total es de " + total + "pesos")
            final = carrito.concat(carritoP);                                                   
            console.log(final);
            console.log("ahora el total del carrito es "+ total + "pesos")
            totalDom.innerHTML = `${total}`
            carritoText()
            console.log(`${carritoP}`)
            producto5 = producto5-cantidadItem5
            cantDis5.innerHTML = `${producto5}`
            resetProducto()
            // subtotal2 = subtotal2 + (mermeladaManzana.precio * cantidadItem2)    
            cantLand5C.innerHTML = `${golfeadoQ.cantidad - producto5}`
            sub5.innerHTML = `${(golfeadoQ.cantidad - producto5) * golfeadoQ.precio}`
            $( ".disappear5").show(); 
            avisoLens()
            alertaSuccess()
        }
        else{
            // alert('ya no hay')
            alertaWarning()
        }

    }else if(compras==="naranja2"){
        if(producto6 > 0){
            for (let i = 0; i < cantidadItem6; i++){
                carrito.push(panDeJamon.precio);                                              // totalizador de la compra
                carritoP.push(panDeJamon);     
            }
            // carrito.push(mermeladaNaranja.precio);                                              // totalizador de la compra
            // carritoP.push(mermeladaNaranja);                                                    // mi array de objetos
            console.log(carrito);                                                                   
            // alert("Has agregado una mermelada de Naranja al carrito.");
            total = carrito.reduce(reducer);                                                    // add
            // alert("el precio total es de " + total + "pesos")
            final = carrito.concat(carritoP);                                                   
            console.log(final);
            console.log("ahora el total del carrito es "+ total + "pesos")
            totalDom.innerHTML = `${total}`
            carritoText()
            console.log(`${carritoP}`)
            producto6 = producto6-cantidadItem6
            cantDis6.innerHTML = `${producto6}`
            resetProducto()
            cantLand6C.innerHTML = `${panDeJamon.cantidad - producto6}`
            sub6.innerHTML = `${(panDeJamon.cantidad - producto6) * panDeJamon.precio}`
            $( ".disappear6").show();
            avisoLens()
            alertaSuccess()
        }
        else{
            // alert('ya no hay')
            alertaWarning()
        }
    }
}

//////COMPRAR 2

function comprar2(){
    if(compras==="frutilla"){
        if(producto1 > 0){
            for (let i = 0; i < cantidadItem1; i++){
                carrito.push(mermeladaFrutilla.precio);                                             // totalizador de la compra
                carritoP.push(mermeladaFrutilla);     
                
            }
            // carrito.push(mermeladaFrutilla.precio);                                             // totalizador de la compra
            // carritoP.push(mermeladaFrutilla);                                                   // mi array de objetos
            console.log(carrito);                                                                   
            total = carrito.reduce(reducer);                                                        // add
            final = carrito.concat(carritoP);                                                   
            console.log(final);
            console.log("ahora el total del carrito es "+ total + "pesos")
            totalDom.innerHTML = `${total}`
            carritoText()
            console.log(`${carritoP}`)
            producto1 = producto1-cantidadItem1
            cantDis1.innerHTML = `${producto1}`
            resetProducto()
            cantLand1C.innerHTML = `${mermeladaFrutilla.cantidad - producto1}`
            sub1.innerHTML = `${(mermeladaFrutilla.cantidad - producto1) * mermeladaFrutilla.precio}`
            $( ".disappear1").show();
            console.log(total)
            avisoLens()
            totalUp()
        }
        else{
            // alert('ya no hay')
            alertaWarning()
            sub1.innerHTML = `${(mermeladaFrutilla.cantidad - producto1) * mermeladaFrutilla.precio}`
        }
    }else if(compras==="manzana"){
        if(producto2 > 0){  
            for (let i = 0; i < cantidadItem2; i++){
                carrito.push(mermeladaManzana.precio);                                              // totalizador de la compra
                carritoP.push(mermeladaManzana);   
            }
            // carrito.push(mermeladaManzana.precio);                                              // totalizador de la compra
            // carritoP.push(mermeladaManzana);                                                    // mi array de objetos
            console.log(carrito);                                                                   
            total = carrito.reduce(reducer);                                                    // add
            final = carrito.concat(carritoP);                                                   
            console.log(final);
            console.log("ahora el total del carrito es "+ total + "pesos")
            totalDom.innerHTML = `${total}`
            carritoText()
            console.log(`${carritoP}`)
            producto2 = producto2-cantidadItem2
            cantDis2.innerHTML = `${producto2}`
            resetProducto()
            // subtotal2 = subtotal2 + (mermeladaManzana.precio * cantidadItem2)    
            cantLand2C.innerHTML = `${mermeladaManzana.cantidad - producto2}`
            sub2.innerHTML = `${(mermeladaManzana.cantidad - producto2) * mermeladaManzana.precio}`
            $( ".disappear2").show(); 
            avisoLens()
            totalUp()
        }
        else{
            // alert('ya no hay')
            alertaWarning()
            sub2.innerHTML = `${(mermeladaManzana.cantidad - producto2) * mermeladaManzana.precio}`
        }

    }else if(compras==="naranja"){
        if(producto3 > 0){
            for (let i = 0; i < cantidadItem3; i++){
                carrito.push(mermeladaNaranja.precio);                                              // totalizador de la compra
                carritoP.push(mermeladaNaranja);     
            }
            // carrito.push(mermeladaNaranja.precio);                                              // totalizador de la compra
            // carritoP.push(mermeladaNaranja);                                                    // mi array de objetos
            console.log(carrito);                                                                   
            total = carrito.reduce(reducer);                                                    // add
            final = carrito.concat(carritoP);                                                   
            console.log(final);
            console.log("ahora el total del carrito es "+ total + "pesos")
            totalDom.innerHTML = `${total}`
            carritoText()
            console.log(`${carritoP}`)
            producto3 = producto3-cantidadItem3
            cantDis3.innerHTML = `${producto3}`
            resetProducto()
            cantLand3C.innerHTML = `${mermeladaNaranja.cantidad - producto3}`
            sub3.innerHTML = `${(mermeladaNaranja.cantidad - producto3) * mermeladaNaranja.precio}`
            $( ".disappear3").show();
            avisoLens()
            totalUp()
        }
        else{
            // alert('ya no hay')
            alertaWarning()
            sub3.innerHTML = `${(mermeladaNaranja.cantidad - producto3) * mermeladaNaranja.precio}`
        }
    }else     if(compras==="frutilla2"){ // temporada2
        if(producto4 > 0){
            for (let i = 0; i < cantidadItem4; i++){
                carrito.push(golfeado.precio);                                             // totalizador de la compra
                carritoP.push(golfeado);     
                
            }
            // carrito.push(mermeladaFrutilla.precio);                                             // totalizador de la compra
            // carritoP.push(mermeladaFrutilla);                                                   // mi array de objetos
            console.log(carrito);                                                                   
            total = carrito.reduce(reducer);                                                        // add
            final = carrito.concat(carritoP);                                                   
            console.log(final);
            console.log("ahora el total del carrito es "+ total + "pesos")
            totalDom.innerHTML = `${total}`
            carritoText()
            console.log(`${carritoP}`)
            producto4 = producto4-cantidadItem4
            cantDis4.innerHTML = `${producto4}`
            resetProducto()
            cantLand4C.innerHTML = `${golfeado.cantidad - producto4}`
            sub4.innerHTML = `${(golfeado.cantidad - producto4) * golfeado.precio}`
            $( ".disappear4").show();
            console.log(total)
            avisoLens()
            totalUp()
        }
        else{
            // alert('ya no hay')
            alertaWarning()
            sub4.innerHTML = `${(golfeado.cantidad - producto4) * golfeado.precio}`
        }
    }else if(compras==="manzana2"){
        if(producto5 > 0){  
            for (let i = 0; i < cantidadItem5; i++){
                carrito.push(golfeadoQ.precio);                                              // totalizador de la compra
                carritoP.push(golfeadoQ);   
            }
            // carrito.push(mermeladaManzana.precio);                                              // totalizador de la compra
            // carritoP.push(mermeladaManzana);                                                    // mi array de objetos
            console.log(carrito);                                                                   
            total = carrito.reduce(reducer);                                                    // add
            final = carrito.concat(carritoP);                                                   
            console.log(final);
            console.log("ahora el total del carrito es "+ total + "pesos")
            totalDom.innerHTML = `${total}`
            carritoText()
            console.log(`${carritoP}`)
            producto5 = producto5-cantidadItem5
            cantDis5.innerHTML = `${producto5}`
            resetProducto()
            // subtotal2 = subtotal2 + (mermeladaManzana.precio * cantidadItem2)    
            cantLand5C.innerHTML = `${golfeadoQ.cantidad - producto5}`
            sub5.innerHTML = `${(golfeadoQ.cantidad - producto5) * golfeadoQ.precio}`
            $( ".disappear5").show(); 
            avisoLens()
            totalUp()
        }
        else{
            // alert('ya no hay')
            alertaWarning()
            sub5.innerHTML = `${(golfeadoQ.cantidad - producto5) * golfeadoQ.precio}`
        }

    }else if(compras==="naranja2"){
        if(producto6 > 0){
            for (let i = 0; i < cantidadItem6; i++){
                carrito.push(panDeJamon.precio);                                              // totalizador de la compra
                carritoP.push(panDeJamon);     
            }
            // carrito.push(mermeladaNaranja.precio);                                              // totalizador de la compra
            // carritoP.push(mermeladaNaranja);                                                    // mi array de objetos
            console.log(carrito);                                                                   
            total = carrito.reduce(reducer);                                                    // add
            final = carrito.concat(carritoP);                                                   
            console.log(final);
            console.log("ahora el total del carrito es "+ total + "pesos")
            totalDom.innerHTML = `${total}`
            carritoText()
            console.log(`${carritoP}`)
            producto6 = producto6-cantidadItem6
            cantDis6.innerHTML = `${producto6}`
            resetProducto()
            cantLand6C.innerHTML = `${panDeJamon.cantidad - producto6}`
            sub6.innerHTML = `${(panDeJamon.cantidad - producto6) * panDeJamon.precio}`
            $( ".disappear6").show();
            avisoLens()
            totalUp()
        }
        else{
            // alert('ya no hay')
            alertaWarning()
            sub6.innerHTML = `${(panDeJamon.cantidad - producto6) * panDeJamon.precio}`
        }
    }
}

//////////////// restar 2

function restar2(){
    if(compras==="frutilla"){
        // if(producto1 > 0){
            if((mermeladaFrutilla.cantidad - producto1)>1){
                carrito.push(-250); 
                console.log(carrito);                                                                   
                total = carrito.reduce(reducer);                                                        // add
                console.log("ahora el total del carrito es "+ total + "pesos")
                totalDom.innerHTML = `${total}`
                carritoText()
                console.log(`${carritoP}`)
                producto1 = producto1+1
                cantDis1.innerHTML = `${producto1}`
                resetProducto()
                cantLand1C.innerHTML = `${mermeladaFrutilla.cantidad - producto1}`
                sub1.innerHTML = `${((mermeladaFrutilla.cantidad - producto1) * mermeladaFrutilla.precio)}`
                console.log(total)
                totalDown()
            }else{
                console.log(total)
            }

    }else if(compras==="manzana"){
        // if(producto1 > 0){
            if((mermeladaManzana.cantidad - producto2)>1){
                carrito.push(-270); 
                console.log(carrito);                                                                   
                total = carrito.reduce(reducer);                                                        // add
                console.log("ahora el total del carrito es "+ total + "pesos")
                totalDom.innerHTML = `${total}`
                carritoText()
                console.log(`${carritoP}`)
                producto2 = producto2+1
                cantDis2.innerHTML = `${producto2}`
                resetProducto()
                cantLand2C.innerHTML = `${mermeladaManzana.cantidad - producto2}`
                sub2.innerHTML = `${((mermeladaManzana.cantidad - producto2) * mermeladaManzana.precio)}`
                console.log(total)
                totalDown()
            }else{
                console.log(total)
            }

    }else if(compras==="naranja"){
        // if(producto1 > 0){
            if((mermeladaNaranja.cantidad - producto3)>1){
                carrito.push(-260); 
                console.log(carrito);                                                                   
                total = carrito.reduce(reducer);                                                        // add
                console.log("ahora el total del carrito es "+ total + "pesos")
                totalDom.innerHTML = `${total}`
                carritoText()
                console.log(`${carritoP}`)
                producto3 = producto3+1
                cantDis3.innerHTML = `${producto3}`
                resetProducto()
                cantLand3C.innerHTML = `${mermeladaNaranja.cantidad - producto3}`
                sub3.innerHTML = `${((mermeladaNaranja.cantidad - producto3) * mermeladaNaranja.precio)}`
                console.log(total)
                totalDown()
            }else{
                console.log(total)
            }

            
        // }
        // else{
        //     alert('ya no hay')
        // }
    }else     if(compras==="frutilla2"){ //temporada 2
        // if(producto1 > 0){
            if((golfeado.cantidad - producto4)>1){
                carrito.push(-220); 
                console.log(carrito);                                                                   
                total = carrito.reduce(reducer);                                                        // add
                console.log("ahora el total del carrito es "+ total + "pesos")
                totalDom.innerHTML = `${total}`
                carritoText()
                console.log(`${carritoP}`)
                producto4 = producto4+1
                cantDis4.innerHTML = `${producto4}`
                resetProducto()
                cantLand4C.innerHTML = `${golfeado.cantidad - producto4}`
                sub4.innerHTML = `${((golfeado.cantidad - producto4) * golfeado.precio)}`
                console.log(total)
                totalDown()
            }else{
                console.log(total)
            }

    }else if(compras==="manzana2"){
        // if(producto1 > 0){
            if((golfeadoQ.cantidad - producto5)>1){
                carrito.push(-300); 
                console.log(carrito);                                                                   
                total = carrito.reduce(reducer);                                                        // add
                console.log("ahora el total del carrito es "+ total + "pesos")
                totalDom.innerHTML = `${total}`
                carritoText()
                console.log(`${carritoP}`)
                producto5 = producto5+1
                cantDis5.innerHTML = `${producto5}`
                resetProducto()
                cantLand5C.innerHTML = `${golfeadoQ.cantidad - producto5}`
                sub5.innerHTML = `${((golfeadoQ.cantidad - producto5) * golfeadoQ.precio)}`
                console.log(total)
                totalDown()
            }else{
                console.log(total)
            }

    }else if(compras==="naranja2"){
        // if(producto1 > 0){
            if((panDeJamon.cantidad - producto6)>1){
                carrito.push(-1000); 
                console.log(carrito);                                                                   
                total = carrito.reduce(reducer);                                                        // add
                console.log("ahora el total del carrito es "+ total + "pesos")
                totalDom.innerHTML = `${total}`
                carritoText()
                console.log(`${carritoP}`)
                producto6 = producto6+1
                cantDis6.innerHTML = `${producto6}`
                resetProducto()
                cantLand6C.innerHTML = `${panDeJamon.cantidad - producto6}`
                sub6.innerHTML = `${((panDeJamon.cantidad - producto6) * panDeJamon.precio)}`
                console.log(total)
                totalDown()
            }else{
                console.log(total)
            }

            
        // }
        // else{
        //     alert('ya no hay')
        // }
    }
}



/////////////////////////////////////////////////////////////////// test & DOM     ///////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////// LISTENER & DOM     ///////////////////////////////////////////////////////////////////////////////////////////////

/// BLOQUE DE BOTONES SUMAR RESTAR CANTIDAD
let item = ""
let cantidadItem1 = 1
let cantidadItem2 = 1
let cantidadItem3 = 1
let cantidadItem4 = 1
let cantidadItem5 = 1
let cantidadItem6 = 1
// let cantidadItem1C = 1
// let cantidadItem2C = 1
// let cantidadItem3C = 1
let subtotal1 = mermeladaFrutilla.precio * cantidadItem1
let subtotal2 = mermeladaManzana.precio * cantidadItem2
let subtotal3 = mermeladaNaranja.precio * cantidadItem3
let subtotal4 = golfeado.precio * cantidadItem4
let subtotal5 = golfeadoQ.precio * cantidadItem5
let subtotal6 = panDeJamon.precio * cantidadItem6
const cantLand1 = document.querySelector('.cantidadItem1');
const cantLand1C = document.querySelector('.cantidadItem1C');
const cantLand2 = document.querySelector('.cantidadItem2');
const cantLand2C = document.querySelector('.cantidadItem2C');
const cantLand3 = document.querySelector('.cantidadItem3');
const cantLand3C = document.querySelector('.cantidadItem3C'); 
const cantLand4 = document.querySelector('.cantidadItem4'); //temporada 2
const cantLand4C = document.querySelector('.cantidadItem4C');
const cantLand5 = document.querySelector('.cantidadItem5');
const cantLand5C = document.querySelector('.cantidadItem5C');
const cantLand6 = document.querySelector('.cantidadItem6');
const cantLand6C = document.querySelector('.cantidadItem6C');
const sub1 = document.querySelector('.sub1');
const sub2 = document.querySelector('.sub2');
const sub3 = document.querySelector('.sub3');
const sub4 = document.querySelector('.sub4');
const sub5 = document.querySelector('.sub5');
const sub6 = document.querySelector('.sub6');
sub1.innerHTML = `${subtotal1}`
sub2.innerHTML = `${subtotal2}`
sub3.innerHTML = `${subtotal3}`
sub4.innerHTML = `${subtotal4}`
sub5.innerHTML = `${subtotal5}`
sub6.innerHTML = `${subtotal6}`
cantLand1.innerHTML = `${cantidadItem1}`
cantLand1C.innerHTML = `${cantidadItem1}`
// cantLand1C.innerHTML = `${subtotal1/mermeladaFrutilla.precio}`
cantLand2.innerHTML = `${cantidadItem2}`
cantLand2C.innerHTML = `${cantidadItem2}`
cantLand3.innerHTML = `${cantidadItem3}`
cantLand3C.innerHTML = `${cantidadItem3}`
cantLand4.innerHTML = `${cantidadItem4}`
cantLand4C.innerHTML = `${cantidadItem4}`
cantLand5.innerHTML = `${cantidadItem5}`
cantLand5C.innerHTML = `${cantidadItem5}`
cantLand6.innerHTML = `${cantidadItem6}`
cantLand6C.innerHTML = `${cantidadItem6}`
const cantDis1 = document.querySelector('#cFrutilla');
const cantDis2 = document.querySelector('#cManzana');
const cantDis3 = document.querySelector('#cNaranja');
const cantDis4 = document.querySelector('#cFrutilla2');
const cantDis5 = document.querySelector('#cManzana2');
const cantDis6 = document.querySelector('#cNaranja2');
cantDis1.innerHTML = `${producto1}`
cantDis2.innerHTML = `${producto2}`
cantDis3.innerHTML = `${producto3}`
cantDis4.innerHTML = `${producto4}`
cantDis5.innerHTML = `${producto5}`
cantDis6.innerHTML = `${producto6}`



function sumarCant(){
    if(item == "addFrutilla"){
        if(cantidadItem1 < mermeladaFrutilla.cantidad && cantidadItem1 < producto1){
            // cantidadItem1 = cantidadItem1 + 1
            cantidadItem1 = cantidadItem1 + 1
            cantLand1.innerHTML = `${cantidadItem1}`
            cantLand1C.innerHTML = `${cantidadItem1}`
        }
    }else if(item =="addManzana"){
        if(cantidadItem2 < mermeladaManzana.cantidad && cantidadItem2 < producto2){
            cantidadItem2 = cantidadItem2 + 1
            // cantidadItem2 = subtotal2 / mermeladaManzana.precio + 1
            cantLand2.innerHTML = `${cantidadItem2}`
            cantLand2C.innerHTML = `${cantidadItem2}`
        }
    }else if(item =="addNaranja"){
        if(cantidadItem3 < mermeladaNaranja.cantidad && cantidadItem3 < producto3){
            cantidadItem3 = cantidadItem3 + 1
            cantLand3.innerHTML = `${cantidadItem3}`
            cantLand3C.innerHTML = `${cantidadItem3}`
        }

    }else     if(item == "addFrutilla2"){ //temporada2
        if(cantidadItem4 < golfeado.cantidad && cantidadItem4 < producto4){
            // cantidadItem1 = cantidadItem1 + 1
            cantidadItem4 = cantidadItem4 + 1
            cantLand4.innerHTML = `${cantidadItem4}`
            cantLand4C.innerHTML = `${cantidadItem4}`
        }
    }else if(item =="addManzana2"){
        if(cantidadItem5 < golfeadoQ.cantidad && cantidadItem5 < producto5){
            cantidadItem5 = cantidadItem5 + 1
            // cantidadItem2 = subtotal2 / mermeladaManzana.precio + 1
            cantLand5.innerHTML = `${cantidadItem5}`
            cantLand5C.innerHTML = `${cantidadItem5}`
        }
    }else if(item =="addNaranja2"){
        if(cantidadItem6 < panDeJamon.cantidad && cantidadItem6 < producto6){
            cantidadItem6 = cantidadItem6 + 1
            cantLand6.innerHTML = `${cantidadItem6}`
            cantLand6C.innerHTML = `${cantidadItem6}`
        }

    }
}

function restarCant(){
    if(item == "removeFrutilla"){
        if(cantidadItem1 >1){
            cantidadItem1 = cantidadItem1 - 1
            cantLand1.innerHTML = `${cantidadItem1}`
            cantLand1C.innerHTML = `${cantidadItem1}`
        }
    }else if(item =="removeManzana"){
        if(cantidadItem2 >1){
            // cantidadItem2 = cantidadItem2 - 1
            cantidadItem2 = cantidadItem2 - 1
            cantLand2.innerHTML = `${cantidadItem2}`
            cantLand2C.innerHTML = `${cantidadItem2}`
        }
    }else if(item =="removeNaranja"){
        if(cantidadItem3 >1){
            cantidadItem3 = cantidadItem3 - 1
            cantLand3.innerHTML = `${cantidadItem3}`
            cantLand3C.innerHTML = `${cantidadItem3}`
        }
    }else     if(item == "removeFrutilla2"){ //temporada2
        if(cantidadItem4 >1){
            cantidadItem4 = cantidadItem4 - 1
            cantLand4.innerHTML = `${cantidadItem4}`
            cantLand4C.innerHTML = `${cantidadItem4}`
        }
    }else if(item =="removeManzana2"){
        if(cantidadItem5 >1){
            // cantidadItem2 = cantidadItem2 - 1
            cantidadItem5 = cantidadItem5 - 1
            cantLand5.innerHTML = `${cantidadItem5}`
            cantLand5C.innerHTML = `${cantidadItem5}`
        }
    }else if(item =="removeNaranja2"){
        if(cantidadItem6 >1){
            cantidadItem6 = cantidadItem6 - 1
            cantLand6.innerHTML = `${cantidadItem6}`
            cantLand6C.innerHTML = `${cantidadItem6}`
        }
    }
}



const sumarNow = document.querySelectorAll('.sumarNow');
for (let i = 0; i < sumarNow.length; i++) {
    sumarNow[i].addEventListener("click", function(e) {
        
        switch(e.target.accessKey){
            case "addFrutilla":
                item=e.target.accessKey
                console.log(item)
                sumarCant();
                subtotal1 = mermeladaFrutilla.precio * cantidadItem1
                sub1.innerHTML = `${subtotal1}`
                break;
            case "addNaranja":
                item=e.target.accessKey
                console.log(item)
                sumarCant();
                subtotal3 = mermeladaNaranja.precio * cantidadItem3
                sub3.innerHTML = `${subtotal3}`
                break;
            case "addManzana":
                item=e.target.accessKey
                console.log(item)
                sumarCant();
                subtotal2 = mermeladaManzana.precio * cantidadItem2
                sub2.innerHTML = `${subtotal2}`
                break;   
            case "addFrutilla2":
                item=e.target.accessKey
                console.log(item)
                sumarCant();
                subtotal4 = golfeado.precio * cantidadItem4
                sub4.innerHTML = `${subtotal4}`
                break;
            case "addManzana2":
                item=e.target.accessKey
                console.log(item)
                sumarCant();
                subtotal5 = golfeadoQ.precio * cantidadItem5
                sub5.innerHTML = `${subtotal5}`
                break; 
            case "addNaranja2":
                item=e.target.accessKey
                console.log(item)
                sumarCant();
                subtotal6 = panDeJamon.precio * cantidadItem6
                sub6.innerHTML = `${subtotal6}`
                break;
            default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
            }

     });
 };

 const restarNow = document.querySelectorAll('.restarNow');
 for (let i = 0; i < restarNow.length; i++) {
    restarNow[i].addEventListener("click", function(e) {
         
         switch(e.target.accessKey){
             case "removeFrutilla":
                 item=e.target.accessKey
                 console.log(item)
                 restarCant();
                 subtotal1 = mermeladaFrutilla.precio * cantidadItem1
                 sub1.innerHTML = `${subtotal1}`
                 break;
             case "removeNaranja":
                 item=e.target.accessKey
                 console.log(item)
                 restarCant();
                 subtotal3 = mermeladaNaranja.precio * cantidadItem3
                 sub3.innerHTML = `${subtotal3}`
                 break;
             case "removeManzana":
                 item=e.target.accessKey
                 console.log(item)
                 restarCant();
                 subtotal2 = mermeladaManzana.precio * cantidadItem2
                 sub2.innerHTML = `${subtotal2}`
                 break;  
            case "removeFrutilla2":
                item=e.target.accessKey
                console.log(item)
                restarCant();
                subtotal4 = golfeado.precio * cantidadItem4
                sub4.innerHTML = `${subtotal4}`
                break;
            case "removeManzana2":
                item=e.target.accessKey
                console.log(item)
                restarCant();
                subtotal5 = golfeadoQ.precio * cantidadItem5
                sub5.innerHTML = `${subtotal5}`
                break;  
            case "removeNaranja2":
                item=e.target.accessKey
                console.log(item)
                restarCant();
                subtotal6 = panDeJamon.precio * cantidadItem6
                sub6.innerHTML = `${subtotal6}`
                break;
             default:
                 //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                 break;
             }
 
      });
  };
/////////////

const sumarNowC = document.querySelectorAll('.sumarNowC');
for (let i = 0; i < sumarNow.length; i++) {
    sumarNowC[i].addEventListener("click", function(e) {
        
        switch(e.target.accessKey){
            case "addFrutilla":
                item=e.target.accessKey
                console.log(item)
                // sumarCant();
                subtotal1 = mermeladaFrutilla.precio * cantidadItem1
                sub1.innerHTML = `${subtotal1}`
                compras = "frutilla"
                comprar2();
                break;
            case "addNaranja":
                item=e.target.accessKey
                console.log(item)
                // sumarCant();
                subtotal3 = mermeladaNaranja.precio * cantidadItem3
                sub3.innerHTML = `${subtotal3}`
                compras = "naranja"
                comprar2();
                break;
            case "addManzana":
                item=e.target.accessKey
                console.log(item)
                // sumarCant();
                subtotal2 = mermeladaManzana.precio * cantidadItem2
                sub2.innerHTML = `${subtotal2}`
                compras = "manzana"
                comprar2();
                break;    
            case "addFrutilla2":
                item=e.target.accessKey
                console.log(item)
                // sumarCant();
                subtotal4 = golfeado.precio * cantidadItem4
                sub4.innerHTML = `${subtotal4}`
                compras = "frutilla2"
                comprar2();
                break;
            case "addManzana2":
                item=e.target.accessKey
                console.log(item)
                // sumarCant();
                subtotal5 = golfeadoQ.precio * cantidadItem5
                sub5.innerHTML = `${subtotal5}`
                compras = "manzana2"
                comprar2();
                break;
            case "addNaranja2":
                item=e.target.accessKey
                console.log(item)
                // sumarCant();
                subtotal6 = panDeJamon.precio * cantidadItem6
                sub6.innerHTML = `${subtotal6}`
                compras = "naranja2"
                comprar2();
                break;
            default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
            }

     });
 };

 const restarNowC = document.querySelectorAll('.restarNowC');
 for (let i = 0; i < restarNowC.length; i++) {
    restarNowC[i].addEventListener("click", function(e) {
         
         switch(e.target.accessKey){
             case "removeFrutilla":
                 item=e.target.accessKey
                 console.log(item)
                 restarCant();
                 subtotal1 = mermeladaFrutilla.precio * cantidadItem1
                 sub1.innerHTML = `${subtotal1}`
                 compras = "frutilla"
                 restar2();
                 break;
             case "removeNaranja":
                 item=e.target.accessKey
                 console.log(item)
                 restarCant();
                 subtotal3 = mermeladaNaranja.precio * cantidadItem3
                 sub3.innerHTML = `${subtotal3}`
                 compras = "naranja"
                 restar2();
                 break;
             case "removeManzana":
                 item=e.target.accessKey
                 console.log(item)
                 restarCant();
                 subtotal2 = mermeladaManzana.precio * cantidadItem2
                 sub2.innerHTML = `${subtotal2}`
                 compras = "manzana"
                 restar2();
                 break;    
            case "removeFrutilla2":
                item=e.target.accessKey
                console.log(item)
                restarCant();
                subtotal4 = golfeado.precio * cantidadItem4
                sub4.innerHTML = `${subtotal4}`
                compras = "frutilla2"
                restar2();
                break;
            case "removeManzana2":
                item=e.target.accessKey
                console.log(item)
                restarCant();
                subtotal5 = golfeadoQ.precio * cantidadItem5
                sub5.innerHTML = `${subtotal5}`
                compras = "manzana2"
                restar2();
                break;
            case "removeNaranja2":
                item=e.target.accessKey
                console.log(item)
                restarCant();
                subtotal6 = panDeJamon.precio * cantidadItem6
                sub6.innerHTML = `${subtotal6}`
                compras = "naranja2"
                restar2();
                break;
             default:
                 //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                 break;
             }
 
      });
  };



// sumarNow.addEventListener("click", function(e){
    
//     console.log(e.target);
//     console.log(e);
//     console.log(this);
//     console.log(e.target)
//     sumarCant()

// })



/////
function carritoText(){
    // let carritoback = document.querySelector('.carFull');
    let carritotext2 = document.querySelector('#total2');
    // let carritotext1 = document.querySelector('.saint-button2');
    // carritotext1.innerHTML = `<strong style="color: green">Comprar</strong>`
    // carritotext2.innerHTML = ``
    // carritoback.innerHTML = `Volver`
}




// SOBRE EL LISTENER
// ESTO ES UN EJEMPLO DE LO QUE VIMOS EN CLASE:
//
//              const boton2 = document.querySelectorAll('.SELECTOR');
//              boton2.addEventListener("click", function(e){
//                  console.log(e.target.parentElement.id);
//                  console.log(e);
//                   console.log(this);
//                   console.log(e.target)
//              })

// El addEventListener no funciona con una funcion simple si el selector apunta a una clase CSS que esta repetida mas de una vez. En este caso la clase ".BotonNow" esta puesta en todos los botones
// Con un Ciclo FOR se puede recorrer la cantidad de botones que tengamos (clases CSS), y la solucion que encontre es anidar un switch para llamar a cada funcion.
//
// SOLUTION: https://stackoverflow.com/questions/50643302/addeventlistener-on-a-queryselectorall-with-classlist
// 
// NOTA: Para algo tan simple como una pagina con pocos productos, la solucion onclick="miFuncion()" en el HTML parece mas sencilla.
const botonNow = document.querySelectorAll('.botonNow');

let compras = ""
for (let i = 0; i < botonNow.length; i++) {
    botonNow[i].addEventListener("click", function(e) {
        
        switch(e.target.accessKey){
            case "frutilla":
                compras = e.target.accessKey
                // console.log(compras)
                // console.log("test")
                comprar();
                // for (let i = 0; i < cantidadItem1; i++){
                //     compraFrutilla();
                // }
                break;
            case "naranja":
                compras = e.target.accessKey
                comprar();
                // for (let i = 0; i < cantidadItem3; i++){
                //     compraNaranja();
                // }
                break;
            case "manzana":
                compras = e.target.accessKey
                comprar();
                // for (let i = 0; i < cantidadItem2; i++){
                //     compraManzana();
                // }
                break; 
            case "frutilla2":
                compras = e.target.accessKey
                // console.log(compras)
                // console.log("test")
                comprar();
                // for (let i = 0; i < cantidadItem1; i++){
                //     compraFrutilla();
                // }
                break;
            case "manzana2":
                compras = e.target.accessKey
                comprar();
                // for (let i = 0; i < cantidadItem3; i++){
                //     compraNaranja();
                // }
                break;
            case "naranja2":
                compras = e.target.accessKey
                comprar();
                // for (let i = 0; i < cantidadItem3; i++){
                //     compraNaranja();
                // }
                break;
            default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
            }
     });
 }

function resetProducto(){
    cantidadItem1 = 1
    cantidadItem2 = 1
    cantidadItem3 = 1
    cantidadItem4 = 1
    cantidadItem5 = 1
    cantidadItem6 = 1
    cantLand1.innerHTML = `${cantidadItem1}`
    cantLand2.innerHTML = `${cantidadItem2}`
    cantLand3.innerHTML = `${cantidadItem3}`
    cantLand4.innerHTML = `${cantidadItem4}`
    cantLand5.innerHTML = `${cantidadItem5}`
    cantLand6.innerHTML = `${cantidadItem6}`
}
resetProducto()

function helpMe(){
    if(carrito.length==0){
        total = 0 
    }
    else {
        total = carrito.reduce(reducer);   
    }
}

// JQUERY
$( ".disappear1").hide();
$( ".disappear2").hide();
$( ".disappear3").hide();
$( ".disappear4").hide();
$( ".disappear5").hide();
$( ".disappear6").hide();

$(document).ready(function(){
    $(".test1").click(function(){
      $(".disappear1").hide();
      producto1=mermeladaFrutilla.cantidad
      cantDis1.innerHTML = `${producto1}`

    console.log(total)
    for(let i=0; i<carrito.length; i++) {

        if (carrito[i] === mermeladaFrutilla.precio || carrito[i] === -250) {
            // delete carrito[i]
            carrito[i]=0
        }}
        // total = carrito.reduce(reducer);  
        total = carrito.reduce(reducer);  
        totalDom.innerHTML = `${total}`
        avisoLens()
        alertafailure()
    });
});


$(document).ready(function(){
    $(".test2").click(function(){
      $(".disappear2").hide();
      producto2=mermeladaManzana.cantidad
      cantDis2.innerHTML = `${producto2}`
    console.log(total)
    for(let i=0; i<carrito.length; i++) {

        if (carrito[i] === mermeladaManzana.precio || carrito[i] === -270) {
            // delete carrito[i]
            carrito[i]=0
        }}
        // total = carrito.reduce(reducer);  
        total = carrito.reduce(reducer);  
        totalDom.innerHTML = `${total}`
        avisoLens()
        alertafailure()
    });
});

$(document).ready(function(){
    $(".test3").click(function(){
      $(".disappear3").hide();
      producto3=mermeladaNaranja.cantidad
      cantDis3.innerHTML = `${producto3}`
      //total = 0
    console.log(total)
    // resetArray() 
    // for(let i=0; i<carrito.length; i++) {

    //     if (carrito[i] === mermeladaNaranja.precio) {
    //         carrito.splice(i)
    //     }}
    //     helpMe() 
    //     totalDom.innerHTML = `${total}`
    for(let i=0; i<carrito.length; i++) {

        if (carrito[i] === mermeladaNaranja.precio || carrito[i] === -260) {
            // delete carrito[i]
            carrito[i]=0
        }}
        // total = carrito.reduce(reducer);  
        total = carrito.reduce(reducer);  
        totalDom.innerHTML = `${total}`
        avisoLens()
        alertafailure()
    });
});

///////////TEMPORADA "2"
$(document).ready(function(){
    $(".test4").click(function(){
      $(".disappear4").hide();
      producto4=golfeado.cantidad
      cantDis4.innerHTML = `${producto4}`
      //total = 0
    console.log(total)
    // resetArray() 
    // for(let i=0; i<carrito.length; i++) {

    //     if (carrito[i] === mermeladaNaranja.precio) {
    //         carrito.splice(i)
    //     }}
    //     helpMe() 
    //     totalDom.innerHTML = `${total}`
    for(let i=0; i<carrito.length; i++) {

        if (carrito[i] === golfeado.precio || carrito[i] === -220) {
            // delete carrito[i]
            carrito[i]=0
        }}
        // total = carrito.reduce(reducer);  
        total = carrito.reduce(reducer);  
        totalDom.innerHTML = `${total}`
        avisoLens()
        alertafailure()
    });
});


$(document).ready(function(){
    $(".test5").click(function(){
      $(".disappear5").hide();
      producto5=golfeadoQ.cantidad
      cantDis5.innerHTML = `${producto5}`
      //total = 0
    console.log(total)
    // resetArray() 
    // for(let i=0; i<carrito.length; i++) {

    //     if (carrito[i] === mermeladaNaranja.precio) {
    //         carrito.splice(i)
    //     }}
    //     helpMe() 
    //     totalDom.innerHTML = `${total}`
    for(let i=0; i<carrito.length; i++) {

        if (carrito[i] === golfeadoQ.precio || carrito[i] === -300) {
            // delete carrito[i]
            carrito[i]=0
        }}
        // total = carrito.reduce(reducer);  
        total = carrito.reduce(reducer);  
        totalDom.innerHTML = `${total}`
        avisoLens()
        alertafailure()
    });
});

$(document).ready(function(){
    $(".test6").click(function(){
      $(".disappear6").hide();
      producto6=panDeJamon.cantidad
      cantDis6.innerHTML = `${producto6}`
      //total = 0
    console.log(total)
    // resetArray() 
    // for(let i=0; i<carrito.length; i++) {

    //     if (carrito[i] === mermeladaNaranja.precio) {
    //         carrito.splice(i)
    //     }}
    //     helpMe() 
    //     totalDom.innerHTML = `${total}`
    for(let i=0; i<carrito.length; i++) {

        if (carrito[i] === panDeJamon.precio || carrito[i] === -1000) {
            // delete carrito[i]
            carrito[i]=0
        }}
        // total = carrito.reduce(reducer);  
        total = carrito.reduce(reducer);  
        totalDom.innerHTML = `${total}`
        avisoLens()
        alertafailure()
    });
});



// $( ".botonNow1" ).one( "click", function() {
//     $( ".disappear1" ).toggle( "slow" );
//     resetProducto()
// });


// $( ".test" ).click(function() {
//     // $( ".disappear1" ).toggle();
//     $( ".disappear1" ).toggle( "slow" );
// });

// $( ".test" ).one( "click", function() {
//     $( ".disappear1" ).toggle( "slow" );
// });

// function test(){
//     if ( display === true ) {
//         $( "#foo" ).show();
//     } else if ( display === false ) {
//         $( "#foo" ).hide();
//     }
// }

// $(document).ready(function(){
//     $(".botonNow2").click(function(){
//         $(".disappear1").addClass(".disappear1C");
//     });
//   });
//https://api.jquery.com/toggle/
//http://jsfiddle.net/r7m3fo0c/

// AJAXX ///////////////////
$(function(){
    $.ajax({
        // method: 'GET',
        url: 'datos.json',
        success: function(data,status,xhr){     
            console.log(data)   
            console.log(status)  
            console.log(xhr)          
            console.log("==========================")  
            panDeJamon = new producto(data[0].productoJson.nombre, data[0].productoJson.precio, data[0].productoJson.cantidad, data[0].productoJson.moneda, data[0].productoJson.tipo);  
            panDeJamonT = new producto(data[1].productoJson.nombre, data[1].productoJson.precio, data[1].productoJson.cantidad, data[1].productoJson.moneda, data[1].productoJson.tipo);   
            panDeJamonH = new producto(data[2].productoJson.nombre, data[2].productoJson.precio, data[2].productoJson.cantidad, data[2].productoJson.moneda, data[2].productoJson.tipo);                      // success puede recibir hasta 3 parametros; 1) la respuesta del recurso que estamos consultando, 2) estatus, 3) 
            golfeado = new producto(data[3].productoJson.nombre, data[3].productoJson.precio, data[3].productoJson.cantidad, data[3].productoJson.moneda, data[3].productoJson.tipo);                      // success puede recibir hasta 3 parametros; 1) la respuesta del recurso que estamos consultando, 2) estatus, 3) 
            golfeadoQ = new producto(data[4].productoJson.nombre, data[4].productoJson.precio, data[4].productoJson.cantidad, data[4].productoJson.moneda, data[4].productoJson.tipo);                      // success puede recibir hasta 3 parametros; 1) la respuesta del recurso que estamos consultando, 2) estatus, 3) 

        },                                                      
        error: function(xhr,status,errorThrown){
            console.log(xhr)  
            console.log(status)
            console.log(errorThrown)  
        }               

    })
})

// API DOLAR BLUE: encontre 
let dolar = 150 // VALOR POR DEFECTO
// $(function(){
//     $.ajax({
//         // url: 'https://randomuser.me/api/?results=2',
//         url: 'https://www.dolarsi.com/api/api.php?type=valoresprincipales',
//         success: function(data,status,xhr) {
//           console.log(data);
//         //   console.log(status)  
//         //   console.log(xhr)  
//         //   console.log("=")
//         //   console.log(data.casa[0]);
//         console.log(data[1].casa.venta);
//         dolar = parseFloat(data[1].casa.venta)
//         }
//       });

// })

lens=[]
function testing(){
    lens = carrito.filter(number => number > 0 );
    console.log("hola")
}


// console.log(greaterTen2); // [23, 12, 45, 78, 11, 10.1, 84]
let tomm = ""

$( "#moneda" ).click(function(e) {
    console.log(e.target.attributes[3].value)
    // console.log("GP")
    // tomm = e.target.attributes[3]
    if(e.target.attributes[3].value === "false"){
        $( ".monedaUsd").show();
        $( ".monedaArs").hide();
        totalDolar = total / dolar
        totalDolar = (Math.round(totalDolar * 100) / 100).toFixed(2);
        $('#totalDolar').html(`${totalDolar}`);
    }
    else{
        $( ".monedaUsd").hide();
        $( ".monedaArs").show();
    }

  });

$( ".monedaUsd").hide();
$( ".monedaArs").show();

// producto4= golfeado.cantidad
// producto5= 20