document.addEventListener("DOMContentLoaded", () => {

    const textos = [
`Uma carta de aniversário 
para Lara`,

`(Essa carta não é muito bem escrita)`,

`Bom, para começar, não é so uma carta de aniversário, mas uma carta que contém todos os meus sentimentos mais sinceros`,

`Bom, não sei muito como começar, mas acho que o ideal seria pelo ano passado, onde uma pessoa meio solitaria acabou caindo em uma chamada cheia de pessoas, porém apenas uma ficou na cabeça dele.
Uma que a cada dia que se passava e ele conversava com ela mais ele se apegava a ela, cada dia mais fazendo parte de sua rotina, passar o tempo com ela enquanto ela fazia um flip flip acabaram sendo a mlhores partes do dia dele ou melhor dizendo, da madrugada `,

`Ele nunca foi uma pessoa que realmente foi atrás de algo mas parece que do nada(E DO NADA) ele encontrou uma pessoa incrivel, só então ele entendeu o real significado da palavra serendipidade.
O que havia começado com simples jogatinas acabou se intensificando com o passar de tempo, e então ambos perceberam o quanto seus gostos tinham em comum o que começou com jogos nessas chamadas diarias passou para streams de Hexatombe nos finais de semana (incusive temos que terminar o natal macabro)`,

`Mas eu sinto que onde nós realmente nos ligamos foi naquele mundinho de minecraft(tenho bastante saudades dele) onde parecia que cada momento passava tão rapido, nunca pensei que estar ao lado de alguem durante uma chamada de apenas 16 horas pareceria algo tão curto.
Dormir acordar novamente para voltar para a mesma chamada e voltar a ficar duante horas conversando ouvindo nossa playlist enquanto construimos nossa casa e faziamos os preparativos pro ano novo, acho que nunca me senti tão em casa como naquele mundo com você.`,

`Mas como que eu não poderia sentir a melhor conexão possivel durante aquele mundo de minecraft, sendo que foi durante esses dias que li uma pergunta cheia de duvidas no instagram "você realemnte gosta de mim ?". Uma pergunta simples e que para ser sincero, nunca tive duvidas que minha resposta era com "certeza eu gosto de você".
Mas quando você me mandou aquilo tive certeza que você tambem sentia algo por mim, e isso me fez tão feliz, saber que era reciproco o sentimento que estava sentindo.`,

`Mas você tambem já me fez uma pergunta que eu nunca soube como responder corretamente, "o que nós somos" você me falou dessa pergunta quando sua mãe perguntou da gente, e o que posso falar é que não sei responder ao certo. Mas posso dizer que tanto quando sua mãe perguntou ou quando o Bruno te mandou mensagem perguntando se a gente tava namorando, a unica certeza que eu tinha era que eu queria muito ter algo com você, então apartir dai essa é a minha resposta.`,

`Esses momentos todos ficaram muito marcados no meu coração durante nossas férias, ferias que se passaram tão rápido né ? ou eu acho que so aproveitei demais mesmo.
Mas foi quando tive medo, foi a volta das nossas aulas, pois passariamos bem menos tempo junto durante as chamadas e a gente poderia acabar se distanciando.
Mas bom, eu não podia estar mais errado né ? Porque apartir dai todo o dia nos começamos o dia trocando bom dia com nossas figurinhas, mandamos fotos um pro outro antes de ir pra faculdade(ouso dizer que sinto falta quando não me manda), mandavamos muitos reels de casal um pro outro(algo que tambem senti falta), e até nos chamamos de apelidos carinhosos e no final do dia era sempre de um ou de outro: "to com saudades".`,

`(Por fim, a última parte)`,

`Feliz aniversario Lara,
Feliz aniversario para a pessoa que me apaixonei antes mesmo ter visto o rosto, para a pessoa que so pelo jeito de ser me cativou de uma maneira que nenhuma outra fez, e pelo cuidado que tem, a sua atenção pelas minimas coisas, cada detalhe seu faz eu me encantar cada vez mais, acho que só se você se visse com meus olhos você conseguiria entender o quão incrivel é.
Eu gosto tanto de você, que mesmo com essa carta, acho até pouco para me expressar, mas não sou muito bom com palavras.
Feliz aniversario Bonitinha, quero que saiba o quão importante se tornou para mim desde o ano passado, o quanto eu penso e me importo com você, percebo o como se tornou parte do meu dia a dia, eu te amo.
(sempre tive medo de te mandar isso, porque acho que é algo muito significativo e tenho medo de você não gostar, principalemtne pelo fato que nunca nos vimos pessoalmente, mas eu realmente gosto muito de você, então deixarei claro em cada palavra)`

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