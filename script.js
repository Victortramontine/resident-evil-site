document.addEventListener("DOMContentLoaded", () => {

    const textos = [
`Uma carta de aniversário 
para Lara do Vitinho`,

`Bom, não sei muito como começar, mas acho que o ideal seria pelo ano passado
onde uma pessoa meio solitaria acabou caindo em uma chamada cheia de pessoas,
porém apenas uma ficou na cabeça dele, que a cada dia que se passava e ele conversava com ela
mais ele se apegou a ela, cada dia mais fazendo parte de sua rotina,
passar o tempo com ela enquanto ela fazia um flip flip acabaram sendo a mlhores partes do dia dele
ou melhor dizendo, da madrugada `,

`Ele nunca foi uma pessoa que realmente foi atrás de algo mas parece que do nada(E DO NADA)
ele encontrou uma pessoa incrivel, o que tinha começado com jogatinas aléatorias 
acabou com que esse passar de tempo e de interesses ambos percebessem o quanto tinham em comum
o que começou com jogos nessas chamadas diarias passou para streams de Hexatombe nos finais de semana
(incusive temos que terminar o natal macabro)`,

`~~Ele~~ `,

`a`

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