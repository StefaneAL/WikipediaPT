$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Post.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Consulta",
  "description": "",
  "id": "consulta",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 2870696900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Consultar Item",
  "description": "",
  "id": "consulta;consultar-item",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 7,
  "name": "que acesso a Wikpedia em portugues",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "pesquiso por \"David Bowie\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "Exibe expressao \"David Bowie\" no titulo da guia",
  "keyword": "Entao "
});
formatter.match({
  "location": "Post.queAcessoAWikpediaEmPortugues()"
});
formatter.result({
  "duration": 2479561700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David Bowie",
      "offset": 14
    }
  ],
  "location": "Post.pesquisoPor(String)"
});
formatter.result({
  "duration": 1274240000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David Bowie",
      "offset": 17
    }
  ],
  "location": "Post.exibeExpressaoNoTituloDaGuia(String)"
});
formatter.result({
  "duration": 30358200,
  "status": "passed"
});
formatter.after({
  "duration": 795969600,
  "status": "passed"
});
});