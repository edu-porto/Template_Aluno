var ListaExperiencias = [];
var anotarExp = {
  frase: "",
  testando: 0
};

function anotarExperiencia(){
  var nome = document.getElementById("ExperienciaUser").value;
  console.log(nome);
  var experiencia = Object.create(anotarExp);
  experiencia.frase = nome;
  ListaExperiencias.push(experiencia);
};

function mostrarExperiencia(){
  var lista = "<table>";
  for (var i=0 ; i<ListaExperiencias.length ; i++){
    lista += "<tr>";
    lista += "<td>" + ListaExperiencias[i].frase + "</td>";
    lista += "</tr>";
  };
  lista += "</table>";
  document.getElementById("listaexperiencias2").innerHTML = lista;
  console.log(ListaExperiencias);
};
//ESSA FUNCAO PEGA O INPUT DE ANOTAREXPERIENCIA E TORNA O MESMO UM OBJETO DENTRO DO
//DICIONARIO. ASSIM, CONSIGO COLOCAR VARIAS EXPERIENCIAS NO CURRICULUM