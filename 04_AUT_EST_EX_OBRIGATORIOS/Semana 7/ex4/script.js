function dias (){
  var nPessoas = document.getElementById("numero1").value;
  
  if (nPessoas <= 50 ){

    var total = parseInt(nPessoas) * parseInt(200)
    alert ("O total da compra é " + total);
} 
  if (nPessoas >50 ){
    var contas = parseInt(nPessoas) * parseInt(200)
    var desconto = parseInt (contas) - (parseInt(contas) * 0.4)
    alert("O total da compra é " + desconto);
  }


  //console.log(total + " desconto" + desconto )
};

function noites(){
  var nPessoas = document.getElementById("numero1").value;
  
  if (nPessoas <= 50 ){

    var total = parseInt(nPessoas) * parseInt(100)
    alert ("O total da compra é " + total);
} 
  if (nPessoas >50 ){
    var contas = parseInt(nPessoas) * parseInt(100)
    var desconto = parseInt (contas) - (parseInt(contas) * 0.2)
    alert("O total da compra é " + desconto);
  }
}


//ve como que faz isso dinâmico pra sempre ficar trocando 