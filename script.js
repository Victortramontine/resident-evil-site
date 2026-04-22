document.addEventListener("DOMContentLoaded", () => {

    const textos = [
`Relatório 01:

O incidente começou às 03:47 da manhã.`,

`Relatório 02:

Os experimentos fugiram do controle.`,

`Relatório 03:

A equipe foi evacuada imediatamente.`,

`Relatório Final:

Não há sobreviventes.`
    ];

    let indice = 0;

    const textoEl = document.getElementById("texto");
    const area = document.getElementById("area");

    function atualizarTexto() {
        textoEl.innerText = textos[indice];
    }

    function avancar() {
        if (indice < textos.length - 1) {
            indice++;
            atualizarTexto();
        }
    }

    function voltar() {
        if (indice > 0) {
            indice--;
            atualizarTexto();
        }
    }

    /* CLIQUE ESQUERDO */
    area.addEventListener("click", () => {
        avancar();
    });

    /* CLIQUE DIREITO */
    area.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        voltar();
    });

    atualizarTexto();
});