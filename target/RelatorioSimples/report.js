$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Post.feature");
formatter.feature({
  "line": 2,
  "name": "Consulta item",
  "description": "",
  "id": "consulta-item",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1771743300,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Consultar Item",
  "description": "",
  "id": "consulta-item;consultar-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "que acesso a Wikpedia em portugues",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "pesquiso por \"David Bowie\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Exibe expressao \"David Bowie\" no titulo da guia",
  "keyword": "Then "
});
formatter.match({
  "location": "Post.queAcessoAWikpediaEmPortugues()"
});
formatter.result({
  "duration": 3294079200,
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
  "duration": 1450741900,
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
  "duration": 372665100,
  "status": "passed"
});
formatter.after({
  "duration": 921117200,
  "status": "passed"
});
});