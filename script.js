const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "quantas irmãs a barbie tem?",
        alternativas: [
            {
                texto: "3 irmãs",
                afirmacao: "correto! Você conhece muito sobre a barbie, PARABÉNS!"
            },
            {
                texto: "Ela não tem irmãs",
                afirmacao: "Errado! Infelizmente você errou está pergunta, Dá proxima você ACERTA!."
            }
        ]
    },
    {
        enunciado: "Qual é o nome do namorado da Barbie?",
        alternativas: [
            {
                texto: "Ryan",
                afirmacao: "Errado! Não foi dessa vez, continue tentando."
            },
            {
                texto: "Ken",
                afirmacao: "Correto! PARABÉNS VOCÊ ESTÁ INDO MUITO BEM!."
            }
        ]
    },
    {
        enunciado: "Qual é a a cor favoria da Barbie?",
        alternativas: [
            {
                texto: "Rosa",
                afirmacao: "Correto! Uauu!! Você acertou PARABÉNS!."
            },
            {
                texto: "Preto",
                afirmacao: "Errado! CONTINUE TENTANDO! Você consegue"
            }
        ]
    },
    {
        enunciado: "Quantas profissões a Barbie tem?",
        alternativas: [
            {
                texto: "Mais de 200 profissões.",
                afirmacao: "Corretoooo!."
            },
            {
                texto: "Menos de 150 profissões",
                afirmacao: "Errado!"
            }
        ]
    },
    {
        enunciado: "Qual é a personalidade da Barbie? ",
        alternativas: [
            {
                texto: "Introvertida,Grosseira e Antipática",
                afirmacao: "Errou!."
            },
            {
                texto: "Simpática, Amigável e Extrovertida",
                afirmacao: "Gostou da experiência do quiz da Barbie? ESSAS FORAM UMAS DAS PERGUNTAS SOBRE A BARBIE!  "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
