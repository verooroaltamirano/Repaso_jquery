$(document).ready (function (){

    $("#cal").click(function(){
      let valoruno = $("#valor1").val()
      let valordos= $("#valor2").val()
      let valortres=$("#valor3").val()

      valoruno=parseInt(valoruno)
      valordos=parseInt(valordos)

      let valoruno = $("#valor1").val()
      let valordos = $("#valor2").val()
      let valortres = $("#valor3").val()

      valoruno=parseFloat(valoruno)
      valordos=parseFloat(valordos)
      
      if(valortres=="sum"){
        resultado=valoruno + valordos
        console.log("resultado suma")
      }
      if(valortres=="res"){ 
        resultado=valoruno - valordos
        console.log("resultado resta")
      }
      if(valortres =="multi"){
        resultado = valoruno * valordos
        console.log("resultado multiplica")
      }  
      if(valortres=="divi"){ 
        resultado=valoruno/valordos
        console.log("resultado divison") 
      }
      if(valortres=="poten"){
        resultado=valoruno ** valordos
        console.log("resultado potencia")
      }
      else if(valortres =="sum,res,multi,divi,poten"){
        resultado = valoruno &&valordos
        console.log("operacion erronea")
        $("resultado").text(resultado)
      }
  });
    
}) 
