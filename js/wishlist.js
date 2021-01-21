// LOCAL STORAGE
// localStorage.clear()
// localStorage.setItem("nombre", mermeladaFrutilla.nombre)
// localStorage.setItem("nombre", mermeladaManzana.nombre)
// localStorage.setItem("nombre", mermeladaFrutilla.nombre)
// localStorage.clear()



let itemF= ""
let producto1F = []
let producto2F = []
let producto3F = []
// let producto1Fc = []
// let producto1Fc =  JSON.parse(producto1F);
function wishlistAct(){
    if(itemF === "addFrutillaF"){
        producto1F = localStorage.getItem('carrito1');
        producto1F = JSON.parse(producto1F);
        console.log(producto1F)
    }else if(itemF === "addManzanaF"){
        producto2F = localStorage.getItem('carrito2');
        producto2F = JSON.parse(producto2F);
        console.log(producto2F)
    }else if (itemF === "addNaranjaF"){
        producto3F = localStorage.getItem('carrito3');
        producto3F = JSON.parse(producto3F);
        console.log(producto3F)
    }

}
wishlistAct()



const favoritos = document.querySelectorAll('.favoritos');

for (let i = 0; i < favoritos.length; i++) {
    favoritos[i].addEventListener("click", function(e) {
        
        switch(e.target.accessKey){
            case "addFrutillaF":
                itemF=e.target.accessKey
                wishlist()
                wishlistAct()
                break;    
            case "addManzanaF":
                itemF=e.target.accessKey
                wishlist()
                wishlistAct()
                break;  
            case "addNaranjaF":
                itemF=e.target.accessKey
                wishlist()
                wishlistAct()
                break;      
            default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
            }
     });
 };

 function wishlist(){
    if(itemF === "addFrutillaF" || itemF === "frutilla"){
        if(localStorage.getItem('carrito1') == null){
            console.log("test1");
            producto1F = JSON.stringify(mermeladaFrutilla);
            console.log(producto1F);
            localStorage.setItem("carrito1", producto1F)
            console.log("1")
            $( ".disappear1a").show();
            $( ".favorite3").show();
            $( ".favoriteF").hide();
            favorite()
        }else{
            localStorage.removeItem("carrito1");
            producto1F = []
            console.log("2")
            $( ".disappear1a").hide();
            $( ".favorite3").hide();
            $( ".favoriteF").show();
            favorite()
        }
    }else if(itemF === "addManzanaF" || itemF === "manzana"){
        if(localStorage.getItem('carrito2') == null){
            console.log("test1");
            producto2F = JSON.stringify(mermeladaManzana);
            console.log(producto2F);
            localStorage.setItem("carrito2", producto2F)
            console.log("1")
            $( ".disappear2a").show();
            $( ".favorite4").show();
            $( ".favoriteM").hide();
            favorite()
        }else{
            localStorage.removeItem("carrito2");
            producto2F = []
            console.log("2")
            $( ".disappear2a").hide();
            $( ".favorite4").hide();
            $( ".favoriteM").show();
            favorite()
        }
    }else if(itemF === "addNaranjaF" || itemF === "naranja"){
        if(localStorage.getItem('carrito3') == null){
            console.log("test1");
            producto3F = JSON.stringify(mermeladaNaranja);
            console.log(producto3F);
            localStorage.setItem("carrito3", producto3F)
            console.log("1")
            $( ".disappear3a").show();
            $( ".favorite5").show();
            $( ".favoriteN").hide();
            favorite()
        }else{
            localStorage.removeItem("carrito3");
            producto3F = []
            console.log("2")
            $( ".disappear3a").hide();
            $( ".favorite5").hide();
            $( ".favoriteN").show();
            favorite()
        }

    }
}
// producto1Fc = JSON.parse(producto1F);
// let producto1Fc =  JSON.parse(producto1F);
// console.log(producto1Fc);



// JQUERY -- 
$( ".disappear1a").hide();
$( ".disappear2a").hide();
$( ".disappear3a").hide();

// function threeAm(){
//     for(let i = 0; i < localStorage.length; i++){
//         switch(localStorage.length){
//             case 1:
//                 console.log("1")
//                 break;    
//             case "carrito2":
//                 console.log("2")
//                 break;   
//             case "carrito3":
//                 console.log("3")
//                 break;   
//             default:
//                 //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
//                 break;
//             }
//     }

// }
// threeAm()

// threeAm();

// console.log(localStorage.getItem("carrito1"))

// $( document ).ready(function() {
//     console.log( "ready!" );
//     threeAm();
// });
$( ".favorite2").hide();
$( ".favorite3").hide();
$( ".favorite4").hide();
$( ".favorite5").hide();
if(localStorage.getItem('carrito1')!=null){
    $( ".disappear1a").show();
    $( ".favorite3").show();
    $( ".favoriteF").hide();
}
if(localStorage.getItem('carrito2')!=null){
    $( ".disappear2a").show();
    $( ".favorite4").show();
    $( ".favoriteM").hide();
}
if(localStorage.getItem('carrito3')!=null){
    $( ".disappear3a").show();
    $( ".favorite5").show();
    $( ".favoriteN").hide();
}
// function favorite(){
//     if(localStorage.getItem('carrito3')!=null || localStorage.getItem('carrito2')!=null || localStorage.getItem('carrito1')!=null){
//         $( ".favorite2").show();
//         $( ".favorite").hide();
//     }else {
//         $( ".favorite2").hide();
//         $( ".favorite").show();
//     }
//     // }else if(localStorage.getItem('carrito1')===null){
//     //     $( ".favorite3").hide();
//     //     $( ".favorite").show();
//     // }else if(localStorage.getItem('carrito2')===null){
//     //     $( ".favorite4").hide();
//     //     $( ".favorite").show();
//     // }else if(localStorage.getItem('carrito3')===null){
//     //     $( ".favorite5").hide();
//     //     $( ".favorite").show();
//     // }
    
// }
function favorite(){
    if(localStorage.length>0){
        $( ".favorite2").show();
        $( ".favorite").hide();
        $( "#wishEmpty").hide();
        $( "#wishEmpty2").show();
    }else {
        $( ".favorite2").hide();
        $( ".favorite").show();
        $( "#wishEmpty").show();
        $( "#wishEmpty2").hide();
    }
    // }else if(localStorage.getItem('carrito1')===null){
    //     $( ".favorite3").hide();
    //     $( ".favorite").show();
    // }else if(localStorage.getItem('carrito2')===null){
    //     $( ".favorite4").hide();
    //     $( ".favorite").show();
    // }else if(localStorage.getItem('carrito3')===null){
    //     $( ".favorite5").hide();
    //     $( ".favorite").show();
    // }
    
}
favorite()

// function favorite2(){
//     for (let i = 0; i < localStorage.length; i++){

//     }
// }


// $( ".disappear1a").hide();
// $( ".disappear2a").hide();
// $( ".disappear3a").hide();


const botonFa = document.querySelectorAll('.botonFa');


for (let i = 0; i < botonFa.length; i++) {
    botonFa[i].addEventListener("click", function(e) {
        
        console.log(e.target.textContent)
        // if(e.target.textContent === "Eliminar" ){
        //     alert("tesr")
        // }
        switch(e.target.textContent){
            case "delete_forever":
                // alert("test")
                itemF = e.target.accessKey
                wishlist()
                alertafailure()
                break;
            case "Eliminar":
                // alert("test")
                itemF = e.target.accessKey
                wishlist()
                alertafailure()
                break;
            case "Agregar al carrito":
                // compras = e.target.accessKey
                cantidadItem1 = 1
                cantidadItem2 = 1
                cantidadItem3 = 1
                // itemF = e.target.accessKey
                // console.log("hola"+e.target.accessKey)
                // e.target.accessKey.slice(0, e.target.accessKey.length - 3); 
                // wishlist()
                // alert("tester")
                itemF = e.target.accessKey
                wishlist()
                favorite()
                // favorite()
                break; 
            case "add_shopping_cart":
                // compras = e.target.accessKey
                cantidadItem1 = 1
                cantidadItem2 = 1
                cantidadItem3 = 1
                // itemF = e.target.accessKey
                // console.log("hola"+e.target.accessKey)
                // e.target.accessKey.slice(0, e.target.accessKey.length - 3); 
                // wishlist()
                // alert("tester")
                itemF = e.target.accessKey
                wishlist()
                favorite()
                // favorite()
                break; 
            default:
                //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                break;
            }

     });
 };

 /////////////////////////////////// Aviso lens

//  var lele = carrito.filter(function(number) {
//     return number > 0;
//   });

// lens=[]
// lens2=[]
// function testing(){
//     lens = carrito.filter(number => number > 0 );
//     console.log(lens2)
// }

// function testing2(){
//     for(let i = 0; i < lens.length; i++){
//         if(lens.filter(values) === 250){
//             console.log("becerro")
//         }
//     }
// }

// const finder = lens.find((item)=>{
//     return item === 250
// })

// function testing2(){
//     lens2 = lens.find(number => number = 250 );
//     console.log(lens2)
// }

$( ".cirC").hide();
$( ".carNot").show();
$( ".carFull").hide();

// function avisoLens(){
//     carrito.forEach((items)=>{
//         if(items>0){
//             $( ".cirC").show();
//             // $( ".carNot").hide();
//             // $( ".carFull").show();
//             console.log("hola")
//         }
//         else{
//             $( ".cirC").hide();
//             // $( ".carNot").show();
//             // $( ".carFull").hide();
//             console.log("nola")
//         }
//     })
// }
function avisoLens(){
    if(total > 0){
        $( ".cirC").show();
        $( ".carNot").hide();
        $( ".carFull").show();
    }else{
        $( ".cirC").hide();
        $( ".carNot").show();
        $( ".carFull").hide();
        
    }
}


