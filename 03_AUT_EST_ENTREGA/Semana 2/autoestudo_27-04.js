const http = require('http');
const hostname = '127.0.0.1';
const port = 3011;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<!DOCTYPE html> <head> <title>Curriculum Eduardo França Porto</title></head> \
              <body>\
              <h1>Eduardo França Porto</h1>
                <p>Brasileiro, 22 anos. </p>
                <p>Telefone/Whatsapp: (38) 999926777 / E-mail: eduardo.porto@sou.inteli.edu.br</p> \

                <><h2>Formação </h2>
                 <p> Cursando Sistemas da Informação no Instituto de Tecnologia e Liderança (INTELI) atualmente no 1º Período.</p>
              <h2>Experiências </h2>
              <h5>09/2020 - 01/2022 - Freelancer</h5>
              <p>Garçom, barman e motoboy servia e atendia o público em bares, restaurantes e eventos. Trabalhava como motoboy para complementar a renda durante a semana.</p>
              <h5> 2019-2020 – Núcleo de Estudos em Fitopatologia</h5>
              <p>Vice coordenador de Marketing. Fui o responsável por impulsionar o crescimento do nosso Linkedin, trabalhando com criação de conteúdo, atendimento ao público e social media management.</p>
              <h5>2016-2018 – Infosystem</h5>
              <p>Professor de informática e atendente. Ministrei aulas de informática básica para todos os tipos de alunos, aprendi a lidar com clientes, como cada pessoa tem uma forma de aprender e como tornar o aprendizado mais prazeroso.</p>
              <h2>Qualificações e atividades profissionais</h2>
              <li>Introduction to Negotiation - Yale</li>
              <li>Financial Markets - Yale  </li>
              <li>Editor e co-autor de um livro sobre agronegócio  Plant Health in Tropical Agribusiness: The Numbers of the Giant ISBN 978-85-54882-02-0</li>
              <h2>Informações adicionais</h2>
              <li>Experiência em lidar com vários tipos de pessoas e entender como o background da pessoa afeta sua visão do projeto.</li>
              <li>Ao escrever o capítulo do livro, aprendi muito sobre Data Mining e como procurar pelas informações corretas.</li>
              <li>Prezo pelo trabalho em equipe, coesão e bom relacionamento entre os membros da equipe.</li>
              <li>Adoro poder aprender com os melhores e sempre prezo pelo feedback da equipe.</li>
              </>
              

              </body> \
           </html>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});