const textos = [
`May 16, 1998

A rumor is going around that a researcher who tried to escape the estate last night was shot.`,

`My entire body feels hot and itchy and I'm sweating all the time now.`,

`I scratched the swelling on my arm and a piece of rotten flesh just dropped off.`,

`What the hell's happening to me?`
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

/* CLIQUE DO MOUSE */
const area = document.getElementById("area");

area.addEventListener("click", () => {
    avancar(); // botão esquerdo
});

/* BLOQUEAR MENU DO BOTÃO DIREITO */
area.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    voltar(); // botão direito
});

/* TECLADO OPCIONAL */
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") avancar();
    if (e.key === "ArrowLeft") voltar();
});

atualizarTexto();