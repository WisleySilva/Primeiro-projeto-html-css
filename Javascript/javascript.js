function gritar(){
    alert("AAAAAAAAAAAAAAAAAAAAAAA ESTOU GRITANDOOOOOOOOO");
}

function mudarTexto(){
    var h1 = document.getElementsByTagName("h1");

    if(h1[0].innerText == "Mude o texto"){
        h1[0].innerText = "Eu mudei";
    }else{
        h1[0].innerText = "Mude o texto";
    }
}

function incrementar(){
    var p1 = document.getElementById("p1");

    //p1.innerText = parseInt(p1.innerText) * 200;

    for ( p1 = 0; p1 < 5; p1++){
        parseInt(p1.innerText)
    }
    
}
    