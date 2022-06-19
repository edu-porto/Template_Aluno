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



//função post com o AJAx 

function adicionarInfos(){
    let url = "http://127.0.0.1:3071/informacoescolocar";
    let autoIncremento = 0 ;
    {
        $.ajax({
            url: url,
            type: 'POST',
            data :{
            
              id_info: parseInt(autoIncremento + 1),
              info: $('#InputExp').val(),
                

            },
            
        })
        console.log("Questão colocada")
    };

 };

 // Função que pega as experiencias e coloca na tela
 let listaInfos = [];
 function visualizarInfos() {
  $.ajax({
      url: "http://127.0.0.1:3071/informacoes",
      type: 'GET',
      success: data => {
              data.forEach(element => {
                listaInfos.push(element)
                informacoesExtras.innerHTML += `
                      <div class="row question-header">
                          <div class="col-sm-10">
                              <h5>${element['info']}</h5>
                          </div`;
             
              });
          
      }

  });
}
