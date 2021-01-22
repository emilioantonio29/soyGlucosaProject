// $( "#success-btn" ).click(function() {
//     $( "div.success" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
//   });
  
//   $( "#failure-btn" ).click(function() {
//     $( "div.failure" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
//   });
  
//   $( "#warning-btn" ).click(function() {
//     $( "div.warning" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
//   });

function alertaWarning(){
    
    $( "div.warning" ).fadeIn( 100 ).delay( 400 ).fadeOut( 100 );
    // $("div.success3").html("Total:"total);
    // $( "div.success3" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
}


function alertaSuccess(){
    
    $( "div.success" ).fadeIn( 200 ).delay( 700 ).fadeOut( 200 );
    // $("div.success3").html("Total:"total);
    // $( "div.success3" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
}
function alertaSuccess2(){
    $( "div.success2" ).fadeIn( 200 ).delay( 700 ).fadeOut( 200 );
}


function totalUp(){
    $("div.addDown").css("color", "green");
    $( "div.addDown" ).fadeIn( 100 ).delay( 50 ).fadeOut( 100 );
}

function totalDown(){
    $("div.addDown").css("color", "red");
    $( "div.addDown" ).fadeIn( 100 ).delay( 50 ).fadeOut( 100 );
    
}
function alertafailure(){
    $( "div.failure, p.failure2" ).fadeIn( 200 ).delay( 700 ).fadeOut( 200 );
}
