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

`Mas <s>ele</s> eu sinto que onde nós realmente nos ligamos foi naquele mundinho de minecraft(tenho saudades dele) onde parecia que cada momento passava tão rapido, estar ao lado de alguem durante uma chamada de apenas 16 horas parecia algo tão curto, dormir acordar novamente para voltar para a mesma chama e voltar a ficar duante horas conversando ouvindo nossa playlist enquanto construimos nossa casa e faziamos os preparativos pro ano novo, acho que nunca me senti tão em casa como naquele mundo com você.`,

`Mas como que eu não poderia sentir a melhor conexão possivel durante aquele mundo de minecraft, sendo que foi durante esses dias que li a coisa mais agradavel no instagram "voce realemnte gosta de mim ?" uma pergunta singela que pra ser sincero, nunca tive duvidas que minha resposta era com certeza eu gosto de você, mas quando você me mandou aquilo tive certeza que você tambem sentia algo por mim, e isso me fez tão feliz.`,

`Você já me fez uma pergunta que eu nunca soube como responder corretamente, "o que nós somos" você me falou dessa pergunta quando sua mãe perguntou da gente, e o que posso falar é que não sei responder ao certo, mas que tanto quanto sua mãe perguntou ou quando o Bruno te mandou mensagem perguntando se a gente tava namorando, a unica certexa que eu tinha era que eu queria muito ter algo com você `,

`Esses momentos todos ficaram muito marcados no meu coração durante nossas férias, ai foi a volta as nossas aulas, algo que eu tinha medo, pois passariamos bem menos tempo junto durante as chamadas.
Mas bom, eu não podia estar mais errado né ? Porque apartir dai todo o dia nos começamos o dia trocando bom dia com nossas figurinhas, mandamos fotos um pro outro antes de ir pra faculdade, mandavamos muitos reels de casal um pro outro, e até nos chamamos de apelidos carinhosos e no final do dia era sempre de um ou de outro: "to com saudades". `,

``,

`Bom para finalizar, feliz aniversario para Lara, para a pessoa que me apaixonei sem nem mesmo ter visto o rosto, para a pessoa que so pelo jeito de ser me cativou de uma maneira que nenhuma outra conseguiu fazer, e pelo cuidado que tem, a sua atenção pelas minimas coisas, cada parte sua faz eu me encantar cada vez mais, acho que só se você se visse com meus olhos você conseguiria entender o quão incrivel é.
Eu gosto tanto de você, que mesmo com essa carta, acho até pouco para me expressar, mas não sou muito bom com palavras.
Bonitinha eu quero que saiba, eu te amo(sempre tive medo de te mandar isso, porque acho que é algo muito significativo e tenho medo de você não gostar, principalemtne pelo fato que nunca nos vimos pessoalmente, mas eu realmente gosto muito de você, então deixarei claro em cada palavra)`

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