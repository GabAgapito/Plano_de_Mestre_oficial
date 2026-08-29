function areaEmpresa() {
  // Abre a planilha e a aba correspondente
  let ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1r_e_Gj9fMlMA-n8bKhPMbylgt8vEerBU1zIgRRaAjRg/edit?gid=0#gid=0");
  let aba_AreaEmpresa = ss.getSheetByName("d_Area_Empresa");

  // Valida a quantidade de linhas para evitar erros se a planilha estiver vazia
  const ultimaLinha = aba_AreaEmpresa.getLastRow();
  if (ultimaLinha <= 1) {
    return JSON.stringify([]); // Retorna uma lista vazia segura se só houver o cabeçalho
  }

  const qtdeDados = ultimaLinha - 1;

  // Busca apenas a primeira coluna (Coluna A) a partir da linha 2
  let dadosAreaEmpresa = aba_AreaEmpresa.getRange(2, 2, qtdeDados, 1).getValues();

  // Retorna os dados convertidos em STRING JSON para o Front-end
  return JSON.stringify(dadosAreaEmpresa);
}

function pessoasParticipantes() {
  // Abre a planilha e a aba correspondente
  let ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1r_e_Gj9fMlMA-n8bKhPMbylgt8vEerBU1zIgRRaAjRg/edit?gid=0#gid=0");
  let aba_pessoasParticipantes = ss.getSheetByName("d_Pessoas_Participantes");

  // Valida a quantidade de linhas para evitar erros se a planilha estiver vazia
  const ultimaLinha = aba_pessoasParticipantes.getLastRow();
  if (ultimaLinha <= 1) {
    return JSON.stringify([]); // Retorna uma lista vazia segura se só houver o cabeçalho
  }

  const qtdeDados = ultimaLinha - 1;
  const qtdeColunas = 3;

  // Busca apenas a primeira coluna (Coluna A) a partir da linha 2
  let dadosPessoasParticipantes = aba_pessoasParticipantes.getRange(2, 2, qtdeDados, qtdeColunas).getValues();

  // Retorna os dados convertidos em STRING JSON para o Front-end
  return JSON.stringify(dadosPessoasParticipantes);
}