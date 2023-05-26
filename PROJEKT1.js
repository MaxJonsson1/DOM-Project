// Ändrar bakgrunds färgen till röd på hemsidan
function cb(){
document.body.style.background = "red";
}

// Ändrar bilden från id:image till bilden: ballong.png
function cp(){
document.getElementById("image").src = "ballong.png";
}

// Tar bort den nuvarande bilden
function hp(){
document.getElementById("image").style.display = 'none';
}

// Tar fram bilden som hade blivit bort tagen med hjälp av funktionen innan 
function sp(){
document.getElementById("image").style.display = 'initial';
}

// Tar fram en rubrik med en mening
function gv(){
document.getElementById("h1").innerHTML = "Be the best version of you!";   
}

// Tar fram lokal tid och visar det 
function td(){
var activetime = new Date();
document.getElementById("clock").innerHTML = activetime    
}
        
        
  
