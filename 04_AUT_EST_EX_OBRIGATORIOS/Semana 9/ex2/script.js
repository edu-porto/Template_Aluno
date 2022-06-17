function calcular (){
  var numero = document.getElementById("numero").value


  // com essa função consigo separar cada algoritmo do input 
  var separarNumeros = (""+numero).split("");
  const arrayNumeros = separarNumeros
  let total = 0;

  for (let i = 0; i < arrayNumeros.length; i++) {
    total += parseInt(arrayNumeros[i]);
  }

  alert("O total da soma é : " + " "+  total); 




};