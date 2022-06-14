function gravar (){
  var quantiaAlunos = document.getElementById("numeroAlunos").value;
  var notasTrabalho = document.getElementById("notaTrabalho").value;
  var notasProva = document.getElementById("notaProva").value;


  var alunosTrabalho = (notasTrabalho).split() ;
  var alunosProva = (notasProva).split() ;

  // essa função separa os algorismos

  // o javascript não tá entendendo que isso é uma lista e que eu quero separar cada elemento dela 
  

  console.log(quantiaAlunos + " nota trabalho: " + alunosTrabalho[1] + "notas prova: " + alunosProva)





};


function fun() {
  /*Getting the number of text fields*/
  var no = document.getElementById("idname").value;
  /*Generating text fields dynamically in the same form itself*/
  for(var i=0;i<no;i++) {
      var textfield = document.createElement("input");
      textfield.type = "text";
      textfield.value = "";
      document.getElementById('form').appendChild(textfield);
  }
};