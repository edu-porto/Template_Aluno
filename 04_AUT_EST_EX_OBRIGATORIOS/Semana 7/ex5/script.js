function gravar (){
  var quantiaAlunos = document.getElementById("numeroAlunos").value;
  var notasTrabalho = [document.getElementById("notaTrabalho").value];
  var notasProva = [document.getElementById("notaProva").value];

  if( quantiaAlunos.value == notasTrabalho.value && (quantiaAlunos.value == notasProva.value))
    console.log("works") 
    else{
      alert("Não é o mesmo número de alunos")
    }
  
};


function numeroInputs() {
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