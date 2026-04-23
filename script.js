document.addEventListener("DOMContentLoaded", () => {

    const textos = [
`Uma carta de aniversário 
para Lara`,

`(Essa carta não é muito bem escrita)`,

`Bom, para começar, não é so uma carta de aniversário, mas uma carta que contém todos os meus sentimentos mais sinceros`,

`Bom, não sei muito como começar, mas acho que o ideal seria pelo ano passado, onde uma pessoa meio solitaria acabou caindo em uma chamada cheia de pessoas, porém apenas uma ficou na cabeça dele.
Uma que a cada dia que se passava e ele conversava com ela mais ele se apegava a ela, cada dia mais fazendo parte de sua rotina, passar o tempo com ela enquanto ela fazia um flip flip acabaram sendo a mlhores partes do dia dele ou melhor dizendo, da madrugada.
Esses momentos faziam cada segundo das minhas madrugadas serem muito especiais ao lado dela.`,

`Ele nunca foi uma pessoa que realmente foi atrás de algo mas parece que do nada(E DO NADA) ele encontrou uma pessoa incrivel, só então ele entendeu o real significado da palavra serendipidade.
O que havia começado com simples jogatinas acabou se intensificando com o passar de tempo, e então ambos perceberam o quanto seus gostos tinham em comum o que começou com jogos nessas chamadas diarias passou para streams de Hexatombe nos finais de semana (incusive temos que terminar o natal macabro) cada live de hexatombe vista junto com você tornaram essa a melhor temporada para mim não por ela, mas sim por você dividir cada segundo daquele maldito episodio 9 sempre ficarão no meu coração.`,

`Mas eu sinto que onde nós realmente nos ligamos foi naquele mundinho de minecraft(tenho bastante saudades dele) onde parecia que cada momento passava tão rapido, nunca pensei que estar ao lado de alguem durante uma chamada de apenas 16 horas pareceria algo tão curto.
Dormir, para acordar novamente, e voltar para a mesma chamada e ficar duante horas conversando ouvindo nossa playlist enquanto construimos nossa casa e faziamos os preparativos pro ano novo, acho que nunca me senti tão em casa como naquele mundo com você, mas como não se sentir em casa usando skin de casalzinho do Elloy e da Kemi com os fogos de fundo ?`,

`Mas como que eu não poderia sentir a melhor conexão possivel durante aquele mundo de minecraft, sendo que foi durante esses dias que li uma pergunta cheia de duvidas no instagram "você realemnte gosta de mim ?". Uma pergunta simples e que para ser sincero, nunca tive duvidas que minha resposta era com "certeza eu gosto de você".
Mas quando você me mandou aquilo tive certeza que você tambem sentia algo por mim, e isso me fez tão feliz, saber que era reciproco o mesmo sentimento que eu estava sentindo.`,

`Mas você tambem já me fez uma pergunta que eu nunca soube como responder corretamente, "o que nós somos" você me falou dessa pergunta quando sua mãe perguntou da gente, e o que posso falar é que não sei responder ao certo.
Mas posso dizer que tanto quando sua mãe perguntou ou quando o Bruno te mandou mensagem perguntando se a gente tava namorando, a unica coisa que se passou na miha cabeça era a certeza que eu queria muito ter algo especial com você.`,

`Esses momentos todos ficaram muito marcados no meu coração durante nossas férias, ferias que se passaram tão rápido né ? ou eu acho que so aproveitei demais mesmo.
Mas foi quando mais tive medo, foi a volta das nossas aulas, pois passariamos bem menos tempo junto durante as chamadas e a gente poderia acabar se distanciando.
Mas bom, eu não podia estar mais errado né ? Porque apartir dai todo o dia nos começamos o dia trocando bom dia com nossas figurinhas, mandamos fotos um pro outro antes de ir pra faculdade(ouso dizer que sinto falta quando não me manda), mandavamos muitos reels de casal um pro outro(algo que tambem sinto falta), e até nos chamamos de apelidos carinhosos e no final do dia era sempre de um ou de outro: "to com saudades", toda essa demonstração de afeto me faz sempre querer ficar mais proximo de você.`,

`(Por fim, a última parte)`,

`Feliz aniversario Lara,
Feliz aniversario para a pessoa que me apaixonei antes mesmo de ter visto o rosto, para a pessoa que so pelo jeito de ser me cativou de uma maneira que nenhuma outra fez, e pelo cuidado que tem, a atenção pelas minimas coisas, cada detalhe seu faz eu me encantar cada vez mais, acho que só se você se visse com meus olhos você conseguiria entender o quão incrivel é.
Eu gosto tanto de você, que mesmo com essa carta, acho até pouco para me expressar, mas não sou muito bom com palavras.
Feliz aniversario Bonitinha, quero que saiba o quão importante se tornou para mim desde o ano passado, o quanto eu penso e me importo com você, percebo o como se tornou parte do meu dia a dia, eu te amo.

-Victor `

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