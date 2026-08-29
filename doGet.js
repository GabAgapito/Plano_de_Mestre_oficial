function doGet(e) {
  // 1. Carrega o SEU arquivo principal (App_PlanoDeMestre) como TEMPLATE
  // É isso aqui que faz o Scriptlet <?!= include(...) ?> funcionar dentro dele!
  var template = HtmlService.createTemplateFromFile('App_PlanoDeMestre'); 
  
  // 2. Avalia/processa os arquivos de CSS e JS injetados e retorna para a tela
  return template.evaluate()
                 .setTitle('Plano de Mestre 3.0')
                 .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// Essa função auxiliar continua aqui embaixo, intocada
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
