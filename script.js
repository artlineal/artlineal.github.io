const botaoMenu = document.getElementById("botaoMenu");
const navegacao = document.getElementById("navegacao");

botaoMenu.addEventListener("click", () => {
  const aberto = navegacao.classList.toggle("aberto");

  botaoMenu.setAttribute("aria-expanded", String(aberto));
  botaoMenu.setAttribute(
    "aria-label",
    aberto ? "Fechar menu" : "Abrir menu"
  );
});

navegacao.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navegacao.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
  });
});

const artigos = {
  imperios: {
    categoria: "DOSSIÊ HISTÓRICO",
    titulo: "Os impérios que mudaram o destino do mundo",
    paragrafos: [
      "Ao longo da história, diferentes impérios ampliaram seu poder por meio de conquistas militares, alianças, comércio e administração de territórios. Suas experiências alteraram fronteiras e relações entre sociedades.",
      "O Império Romano destacou-se pela organização administrativa, pelas estradas, pelo direito e pela integração de diferentes povos, embora também tenha dependido de guerras e trabalho escravizado.",
      "O Império Mongol, formado a partir do século XIII, estabeleceu um vasto domínio territorial na Eurásia. Suas conquistas provocaram destruição em diversas regiões, mas também contribuíram para intensificar contatos comerciais e culturais.",
      "Comparar esses impérios ajuda a compreender como o poder era organizado, como as populações resistiam e como as heranças políticas e culturais permaneciam mesmo depois de sua fragmentação."
    ]
  },

  roma: {
    categoria: "ANTIGUIDADE",
    titulo: "Roma: a ascensão de um império",
    paragrafos: [
      "A civilização romana desenvolveu-se na Península Itálica. Tradicionalmente, a fundação de Roma é datada de 753 a.C., embora sua formação tenha ocorrido gradualmente.",
      "Roma passou pela Monarquia, pela República e pelo Império. Durante a expansão, conquistou territórios ao redor do Mediterrâneo e estabeleceu relações políticas, econômicas e culturais com numerosos povos.",
      "Sua sociedade era marcada por desigualdades, conflitos políticos e pela escravidão. Ao mesmo tempo, Roma desenvolveu redes de estradas, aquedutos, cidades e instituições administrativas.",
      "O Império Romano do Ocidente terminou em 476 d.C. O Império Romano do Oriente, também conhecido como Bizantino, continuou até 1453."
    ]
  },

  franca: {
    categoria: "REVOLUÇÕES",
    titulo: "A Revolução Francesa",
    paragrafos: [
      "A Revolução Francesa começou em 1789, em meio a uma crise financeira, à desigualdade entre grupos sociais e à contestação dos privilégios da nobreza e do clero.",
      "As ideias iluministas contribuíram para os debates sobre liberdade, soberania popular e organização do poder. A convocação dos Estados Gerais e a mobilização popular abriram caminho para mudanças profundas.",
      "A queda da Bastilha, em julho de 1789, tornou-se um símbolo da revolução. O processo incluiu a abolição de privilégios feudais, a queda da monarquia e a proclamação da república.",
      "A revolução foi marcada por disputas políticas, violência e mudanças de regime. Seus princípios influenciaram movimentos políticos em diversas partes do mundo, embora a igualdade defendida não tenha sido aplicada de forma universal."
    ]
  },

  brasil: {
    categoria: "HISTÓRIA DO BRASIL",
    titulo: "Independência: além do grito",
    paragrafos: [
      "A Independência do Brasil foi proclamada em 1822, depois de anos de transformações políticas relacionadas à presença da corte portuguesa no Rio de Janeiro e às disputas entre as elites do Brasil e de Portugal.",
      "A Revolução Liberal do Porto, iniciada em 1820, pressionou pelo retorno de Dom João VI a Portugal e pela reorganização do Império português. As decisões das Cortes aumentaram as tensões políticas.",
      "Dom Pedro teve papel central no processo, mas a independência envolveu grupos políticos, conflitos regionais e enfrentamentos militares em diferentes partes do território.",
      "A ruptura com Portugal não significou o fim imediato da escravidão nem a participação política igualitária. O Brasil tornou-se uma monarquia independente e a escravidão só foi abolida em 1888."
    ]
  },

  egito: {
    categoria: "CIVILIZAÇÕES",
    titulo: "O Egito e os segredos do Nilo",
    paragrafos: [
      "A civilização egípcia desenvolveu-se ao longo do rio Nilo, cuja água e fertilidade foram essenciais para a agricultura e para a organização das comunidades.",
      "O faraó ocupava uma posição central na política e na religião. A administração do território envolvia trabalhadores, escribas, autoridades locais e sistemas de arrecadação.",
      "As pirâmides, os templos e os túmulos revelam conhecimentos de engenharia, práticas religiosas e formas de organização do trabalho. A sociedade egípcia, entretanto, apresentava hierarquias e desigualdades.",
      "O estudo dos registros escritos, dos objetos e dos sítios arqueológicos permite investigar as transformações políticas, econômicas e culturais do Egito ao longo de milhares de anos."
    ]
  },

  guerra: {
    categoria: "HISTÓRIA CONTEMPORÂNEA",
    titulo: "O mundo em guerra: 1939–1945",
    paragrafos: [
      "A Segunda Guerra Mundial ocorreu de 1939 a 1945. O expansionismo da Alemanha nazista, as agressões de potências do Eixo e as tensões internacionais do período contribuíram para o conflito.",
      "A guerra mobilizou sociedades de vários continentes e provocou destruição em larga escala. O Holocausto foi o genocídio sistemático de cerca de seis milhões de judeus pelo regime nazista e seus colaboradores.",
      "Em 1945, a derrota das potências do Eixo encerrou o conflito. A guerra deixou milhões de mortos, deslocamentos populacionais e profundas mudanças políticas e econômicas.",
      "A criação da Organização das Nações Unidas e a ascensão dos Estados Unidos e da União Soviética como superpotências marcaram a reorganização internacional do pós-guerra."
    ]
  },

  republica: {
    categoria: "BRASIL REPUBLICANO",
    titulo: "A queda da monarquia brasileira",
    paragrafos: [
      "Em 15 de novembro de 1889, um movimento político-militar derrubou a monarquia e proclamou a República no Brasil.",
      "A crise do regime monárquico envolvia conflitos com setores militares, tensões entre a Igreja e o Estado, mudanças nas relações com as elites agrárias e o crescimento do movimento republicano.",
      "A abolição da escravidão, em 1888, alterou profundamente as relações sociais, mas não foi acompanhada por políticas amplas de inclusão para a população negra liberta.",
      "A República inaugurou uma nova forma de governo, mas a participação política permaneceu limitada por exclusões sociais, regras eleitorais restritivas e desigualdades."
    ]
  }
};

const campoPesquisa = document.getElementById("pesquisa");
const filtros = document.querySelectorAll(".filtro");
const cartoes = document.querySelectorAll(".artigo");
const semResultados = document.getElementById("semResultados");

let categoriaAtual = "todos";

function aplicarFiltros() {
  const termo = campoPesquisa.value
    .trim()
    .toLocaleLowerCase("pt-BR");

  let total = 0;

  cartoes.forEach(cartao => {
    const categoria = cartao.dataset.categoria;
    const conteudo = cartao.textContent
      .toLocaleLowerCase("pt-BR");

    const correspondeCategoria =
      categoriaAtual === "todos" ||
      categoria === categoriaAtual;

    const correspondePesquisa = conteudo.includes(termo);

    const visivel = correspondeCategoria && correspondePesquisa;

    cartao.hidden = !visivel;

    if (visivel) total++;
  });

  semResultados.hidden = total > 0;
}

filtros.forEach(botao => {
  botao.addEventListener("click", () => {
    categoriaAtual = botao.dataset.categoria;

    filtros.forEach(filtro => {
      const ativo = filtro === botao;
      filtro.classList.toggle("ativo", ativo);
      filtro.setAttribute("aria-pressed", String(ativo));
    });

    aplicarFiltros();
  });
});

campoPesquisa.addEventListener("input", aplicarFiltros);

const janela = document.getElementById("janelaArtigo");
const modalCategoria = document.getElementById("modalCategoria");
const modalTitulo = document.getElementById("modalTitulo");
const modalTexto = document.getElementById("modalTexto");

document.querySelectorAll("[data-artigo]").forEach(botao => {
  botao.addEventListener("click", () => {
    const artigo = artigos[botao.dataset.artigo];

    if (!artigo) return;

    modalCategoria.textContent = artigo.categoria;
    modalTitulo.textContent = artigo.titulo;
    modalTexto.replaceChildren();

    artigo.paragrafos.forEach(texto => {
      const paragrafo = document.createElement("p");
      paragrafo.textContent = texto;
      modalTexto.appendChild(paragrafo);
    });

    janela.showModal();
  });
});

document.getElementById("fecharArtigo").addEventListener("click", () => {
  janela.close();
});

janela.addEventListener("click", evento => {
  if (evento.target === janela) {
    janela.close();
  }
});
