const textos = [
    "Relatório 01:\n\nO incidente começou às 03:47 da manhã.",
    "Relatório 02:\n\nOs experimentos fugiram do controle.",
    "Relatório 03:\n\nA equipe foi evacuada imediatamente.",
    "Relatório Final:\n\nNão há sobreviventes."
];

let indice = 0;

function atualizarTexto() {
    document.getElementById("texto").innerText = textos[indice];
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

// inicia
atualizarTexto();