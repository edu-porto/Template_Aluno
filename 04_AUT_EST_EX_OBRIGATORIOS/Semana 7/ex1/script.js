function botãoAdd (){
  var teste = document.getElementById("numero").value;
  
  var  add = 1

  
document.getElementById("botão").addEventListener("click", function() {
    total = parseInt(teste) + parseInt(add)
    document.getElementById("painel").innerHTML = ("Esse é o total ") + total;
    
  })



  document.getElementById("botãoMinus").addEventListener("click", function() {
      total = parseInt(teste) - parseInt(add)
    document.getElementById("painel").innerHTML = ("Esse é o total ") + total;
  })

};
