$('.txtb input').on("focus",function(){
    $(this).addClass("focus");
});

$(".txtb input").on("blur",function(){
    if($(this).val() == "" )
    $(this).removeClass("focus");
});
function validar() {
    var nome = document.getElementById("nome"),
    contrib1 = document.getElementById("contrib1");
    contrib= document.getElementById("contrib2");
    if(nome.value==""){
        alert("Nome é obrigatório");
        nome.focus();
        return false;
    }
    if(!contrib1.checked && !contrib2.checked){
        alert("Escolha uma opção");
        return false;
    }
    return true;
      
    }
    function validar() {
        var nome = document.getElementById("nome"),
        contrib1 = document.getElementById("contrib1");
        contrib2= document.getElementById("contrib2");
        if(nome.value==""){
          alert("Nome é obrigatório");
          nome.focus();
          return false;
        }
        if(!contrib1.checked && !contrib2.checked){
          alert("Escolha uma opção");
          return false;
        }
        return true;
}
      