document.addEventListener("DOMContentLoaded", () => {
    formatarLinhasAmbienteInterno();
});

function formatarLinhasAmbienteInterno() {
    // Seleciona todas as células que possuem a classe celula-nota
    const celulasNota = document.querySelectorAll(".celula-nota");

    celulasNota.forEach(celulaNota => {
        const linha = celulaNota.parentElement; // Pega a linha tr inteira
        const valorNota = parseFloat(celulaNota.textContent.replace(",", "."));
        const celulaStatus = linha.querySelector(".celula-status");

        if (!isNaN(valorNota)) {
            if (valorNota >= 6) {
                // Remove classe anterior e aplica classe de Força (Verde)
                linha.classList.remove("linha-fraqueza");
                linha.classList.add("linha-forca");

                // Atualiza o texto do status caso exista a célula
                if (celulaStatus) celulaStatus.textContent = "Força";
            } else {
                // Remove classe anterior e aplica classe de Fraqueza (Vermelho)
                linha.classList.remove("linha-forca");
                linha.classList.add("linha-fraqueza");

                // Atualiza o texto do status caso exista a célula
                if (celulaStatus) celulaStatus.textContent = "Fraqueza";
            }
        }
    });
}