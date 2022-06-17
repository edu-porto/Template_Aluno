
function gravar (){
  var quantiaAlunos = document.getElementById("numeroAlunos").value;
  var notasTrabalho = [document.getElementById("notaTrabalho").value];
  var notasProva = [document.getElementById("notaProva").value];



 var nTrabalho = notasTrabalho.toString().split(',')
 var nProva = notasProva.toString().split(',')
  var nT = nTrabalho.map(Number)
  var nP = nProva.map(Number)
 console.log(nT.length +"  " + nP.length + " nTrabalho" + nTrabalho )

// Essa condição nos permite saber se os inputs são iguais 
 if ( quantiaAlunos == nT.length && quantiaAlunos == nP.length){

  //Calcular a média de cada aluno prova tem peso 2 e trabalho peso 3 



  //média geral 


  //media aritmetica da prova 


  //media aritmetica dos trabalhos


  //menor e maior nota de prova 


  //menor e maior nota de trabalho




 } else{
  alert ("Atenção números não batem ")
 }


};

