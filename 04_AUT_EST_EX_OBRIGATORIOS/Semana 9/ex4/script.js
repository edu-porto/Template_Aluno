function ordenar (){
  //var numero = document.getElementById("numero").value


  // com essa função consigo separar cada algoritmo do input 
  //const arrayNumeros = numero
  var total = 1;
  var numeroAtual = 1;
  var numeroAnterior = 0;
  var limite = 13;

 // o for não está parando no input que limito 
  for (let i = 1; i <= limite ; i++) {
  
    total  = numeroAnterior + numeroAtual
    numeroAnterior = numeroAtual
    numeroAtual = total

    };
  console.log(total)
  return(total)

};