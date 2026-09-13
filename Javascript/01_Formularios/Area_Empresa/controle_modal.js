/* ===================================================
   CONTROLE E INJEÇÃO DINÂMICA DO MODAL
   =================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Tente o caminho relativo saindo da pasta '2_Abas':
    fetch("../2_Modal/AreaEmpresa/Modal_AreaEmpresa.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro HTTP! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById("container-modal").innerHTML = html;
            console.log("Modal carregado com sucesso!");
        })
        .catch(error => {
            console.error("Falha ao carregar o modal:", error);
        });
});

// Abre o modal
function openModal() {
    const modal = document.getElementById("modalAreaEmpresa");
    if (modal) {
        modal.style.display = "flex";
    }
}

// Fecha o modal
function closeModal() {
    const modal = document.getElementById("modalAreaEmpresa");
    if (modal) {
        modal.style.display = "none";
    }
}

// Lógica de envio do formulário
function cadastrarFormulario() {
    const nomeArea = document.getElementById("nomeArea").value;
    console.log("Enviando área:", nomeArea);

    closeModal();
    document.getElementById("formAreaEmpresa").reset();
}

// Fecha ao clicar fora do card
window.onclick = function (event) {
    const modal = document.getElementById("modalAreaEmpresa");
    if (event.target === modal) {
        closeModal();
    }
};