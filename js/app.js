$(document).ready (function (){

    $("#cal").click(function(){
      let valoruno = $("#valor1").val()
      let valordos= $("#valor2").val()
      let valortres=$("#valor3").val()
      let resultado = 0
      let resultado2 = 0
      valoruno=parseFloat(valoruno)
      valordos=parseFloat(valordos)
      
      if(valortres=="sum"){
        resultado=valoruno + valordos
        $("#resultado").text(resultado)
        console.log( `resultado suma: ${resultado} `)
      }
      else if(valortres=="res"){ 
        resultado=valoruno - valordos
        $("#resultado").text(resultado)
        console.log( `resultado resta:${resultado} `)
      }
      else if(valortres =="multi"){
        resultado = valoruno * valordos
        $("#resultado").text(resultado)
        console.log( `resultado multiplica:${resultado}` )
      }  
      else if(valortres=="divi"){ 
        resultado=valoruno/valordos
        $("#resultado").text(resultado)
        console.log( `resultado divison:${resultado}` )
      }
      else if(valortres=="poten"){
        resultado=valoruno ** valordos 
        $("#resultado").text(resultado)
        console.log(`resultado potencia:${resultado}` )
      }
      else if(valortres=="rcubic"){
        resultado = Math.sqrt(valoruno) 
        resultado2 = Math.sqrt(valordos) 
        $("#resultado").text(`resultado raiz_cuadrada del primer valor es :${resultado} y el resultado de la raiz del segundo valor es ${resultado2}`)
        console.log(`resultado raiz_cuadrada del primer valor es :${resultado} y el resultado de la raiz del segundo valor es ${resultado2}` )
      }
      else{
        console.log( `operacion erronea:${resultado} `)
        $("resultado").text(resultado)
      }
  });
}) 
