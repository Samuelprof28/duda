/* =========================================================
   COISAS QUE EU CURTO — script.js
   ========================================================= */

console.log("✦ O blog está funcionando!");

/* ---------- Ano automático no rodapé ---------- */
const ano = document.querySelector("#ano");
ano.textContent = new Date().getFullYear();

/* ---------- Saudação de acordo com a hora ---------- */
function saudar() {
  const hora = new Date().getHours();
  const saudacao = document.querySelector("#saudacao");

  if (hora >= 5 && hora < 12) {
    saudacao.textContent = "☀️ Bom dia! Que bom te ver por aqui";
  } else if (hora >= 12 && hora < 18) {
    saudacao.textContent = "🌤️ Boa tarde! Pega um café e fica à vontade";
  } else {
    saudacao.textContent = "🌙 Boa noite! Hora perfeita para ler um post";
  }
}

saudar();

/* ---------- Dados do blog ---------- */

// Cada categoria tem um nome e um emoji. A cor vem do CSS (.cor-games, .cor-musica...)
const categorias = {
  games:      { nome: "Games",      emoji: "🎮" },
  musica:     { nome: "Música",     emoji: "🎧" },
  series:     { nome: "Séries",     emoji: "📺" },
  tecnologia: { nome: "Tecnologia", emoji: "💻" },
  comida:     { nome: "Comida",     emoji: "🍜" },
  livros:     { nome: "Livros",     emoji: "📚" }
};

// A lista de posts: um array de objetos
const posts = [
  {
    id: 1,
    titulo: "Meu primeiro site: o que eu queria que tivessem me contado",
    categoria: "tecnologia",
    data: "2026-09-20",
    curtidasIniciais: 42,
    destaque: true,
    resumo: "Três arquivos, um monte de erros e a melhor sensação do mundo quando a página finalmente abriu.",
    conteudo: `
      <p>Quando eu abri o VS Code pela primeira vez, achei que ia precisar de um computador da NASA para fazer um site. Spoiler: só precisei de três arquivos e muita paciência.</p>
      <h3>1. Separe as coisas</h3>
      <p>O HTML é o esqueleto, o CSS é a roupa e o JavaScript é o que faz a página se mexer. Quando eu misturava tudo num arquivo só, qualquer mudança virava uma caça ao tesouro.</p>
      <h3>2. O console é seu melhor amigo</h3>
      <p>Aperta F12. Sério. Metade dos meus problemas estava escrita em vermelho no console e eu nem olhava.</p>
      <blockquote>"Não funciona" quase sempre significa "tem um erro que eu ainda não li".</blockquote>
      <h3>3. Comece pequeno</h3>
      <ul>
        <li>Primeiro, um título na tela.</li>
        <li>Depois, uma cor de fundo.</li>
        <li>Depois, um botão que faz alguma coisa.</li>
      </ul>
      <p>Cada pequena vitória conta. Este blog começou assim e olha ele aqui agora.</p>
    `
  },
  {
    id: 2,
    titulo: "5 jogos indie que me pegaram de surpresa",
    categoria: "games",
    data: "2026-09-14",
    curtidasIniciais: 31,
    resumo: "Jogos pequenos, feitos por equipes pequenas, com histórias enormes.",
    conteudo: `
      <p>Eu tinha um preconceito bobo: achava que jogo bom precisava de gráfico ultrarrealista. Aí eu joguei alguns indies e mudei de ideia completamente.</p>
      <ul>
        <li><strong>Stardew Valley</strong>: eu só ia plantar umas batatas. Foram 80 horas.</li>
        <li><strong>Celeste</strong>: difícil, mas cada fase concluída parece uma conquista pessoal.</li>
        <li><strong>Undertale</strong>: um jogo que lembra das suas escolhas.</li>
        <li><strong>Hollow Knight</strong>: me perdi no mapa e amei me perder.</li>
        <li><strong>A Short Hike</strong>: curtinho e perfeito para um domingo.</li>
      </ul>
      <p>O mais legal? Muitos deles foram feitos por uma ou duas pessoas. Dá uma vontade enorme de aprender a programar jogos também.</p>
    `
  },
  {
    id: 3,
    titulo: "Minha playlist para estudar sem dormir em cima do teclado",
    categoria: "musica",
    data: "2026-09-08",
    curtidasIniciais: 27,
    resumo: "Testei vários estilos durante a semana de provas. Esses foram os vencedores.",
    conteudo: `
      <p>Descobri que música com letra em português me distrai demais: eu começo a cantar e esqueço o que estava lendo. Então montei uma playlist especial.</p>
      <h3>O que funciona para mim</h3>
      <ul>
        <li>Lo-fi para ler e fazer resumo.</li>
        <li>Trilhas sonoras de jogos para programar (dá uma sensação de missão épica).</li>
        <li>Música clássica quando o cansaço bate forte.</li>
      </ul>
      <p>E uma regra de ouro: 25 minutos de foco, 5 minutos de pausa. A tal técnica Pomodoro realmente funciona.</p>
    `
  },
  {
    id: 4,
    titulo: "Por que eu assisto anime de esporte mesmo sem gostar de educação física",
    categoria: "series",
    data: "2026-08-30",
    curtidasIniciais: 55,
    resumo: "Eu não sei sacar uma bola de vôlei, mas já chorei assistindo um saque.",
    conteudo: `
      <p>É um mistério até para mim. Na aula de educação física eu fujo da bola. No sofá, eu grito por um time de vôlei que nem existe.</p>
      <p>Acho que o segredo está nos personagens: ninguém começa sendo o melhor. Eles erram, treinam, perdem e tentam de novo.</p>
      <blockquote>No fundo, anime de esporte é sobre persistência. E isso vale para programar também.</blockquote>
      <p>Da próxima vez que um código não funcionar, vou imaginar uma trilha sonora dramática e tentar mais uma vez.</p>
    `
  },
  {
    id: 5,
    titulo: "O miojo incrementado que salvou minha semana de provas",
    categoria: "comida",
    data: "2026-08-22",
    curtidasIniciais: 19,
    resumo: "Uma receita de 5 minutos para quem estuda muito e cozinha pouco.",
    conteudo: `
      <p>Chef eu não sou, mas sei transformar um miojo em algo digno de foto.</p>
      <h3>Ingredientes</h3>
      <ul>
        <li>1 pacote de miojo (use só metade do tempero)</li>
        <li>1 ovo</li>
        <li>Cebolinha picada</li>
        <li>Um fio de shoyu</li>
      </ul>
      <h3>Modo de preparo</h3>
      <p>Cozinhe o macarrão, quebre o ovo dentro da panela no último minuto e não mexa. Finalize com shoyu e cebolinha. Pronto: 5 minutos e muita felicidade.</p>
    `
  },
  {
    id: 6,
    titulo: "Li um livro inteiro sem abrir o celular (quase)",
    categoria: "livros",
    data: "2026-08-15",
    curtidasIniciais: 23,
    resumo: "Um desafio de uma semana para largar o celular e voltar a ler de verdade.",
    conteudo: `
      <p>Eu percebi que tinha comprado cinco livros e não tinha terminado nenhum. Então fiz um desafio: 30 minutos de leitura por dia, com o celular em outro cômodo.</p>
      <p>Nos primeiros dias foi difícil. Minha mão procurava o celular sozinha. No quarto dia, eu já estava tão envolvida na história que esqueci o tempo.</p>
      <blockquote>Resultado: um livro terminado e a sensação de que meu cérebro voltou a funcionar.</blockquote>
      <p>Próximo desafio: fazer isso com dois livros no mês. Me desejem sorte!</p>
    `
  },
  {
    id: 7,
    titulo: "Modo escuro: por que todo site deveria ter um",
    categoria: "tecnologia",
    data: "2026-08-05",
    curtidasIniciais: 38,
    resumo: "Clica no botão da lua lá em cima e depois me diz se eu não tenho razão.",
    conteudo: `
      <p>Programar de madrugada com uma tela branca na cara deveria ser proibido. Por isso este blog tem modo escuro.</p>
      <h3>Como eu fiz</h3>
      <p>O truque é usar <strong>variáveis no CSS</strong>. Todas as cores ficam guardadas em variáveis, e o modo escuro só troca os valores delas. O JavaScript só precisa colocar ou tirar uma classe no <code>body</code>.</p>
      <p>E para o blog lembrar da sua escolha, a informação fica salva no <code>localStorage</code> do navegador.</p>
    `
  }
];

/* ---------- Elementos da página ---------- */
const el = {
  grade: document.querySelector("#grade-posts"),
  modelo: document.querySelector("#modelo-card"),
  filtros: document.querySelector("#filtros"),
  busca: document.querySelector("#input-busca"),
  semResultado: document.querySelector("#sem-resultado"),
  aviso: document.querySelector("#aviso"),
  destaque: document.querySelector("#post-destaque"),
  leitura: document.querySelector("#leitura"),
  leituraCapa: document.querySelector("#leitura-capa"),
  leituraMeta: document.querySelector("#leitura-meta"),
  leituraTitulo: document.querySelector("#leitura-titulo"),
  leituraTexto: document.querySelector("#leitura-texto"),
  btnCurtirLeitura: document.querySelector("#btn-curtir-leitura"),
  btnFechar: document.querySelector("#btn-fechar"),
  btnTema: document.querySelector("#btn-tema"),
  btnMenu: document.querySelector("#btn-menu"),
  menu: document.querySelector("#menu"),
  formContato: document.querySelector("#form-contato"),
  inputEmail: document.querySelector("#input-email"),
};

/* ---------- Guardando dados no navegador ---------- */

// Lê um valor salvo. Se não existir (ou der erro), devolve o valor padrão.
function lerLocal(chave, padrao) {
  try {
    return JSON.parse(localStorage.getItem(chave)) ?? padrao;
  } catch {
    return padrao;
  }
}

function salvarLocal(chave, valor) {
  try {
    localStorage.setItem(chave, JSON.stringify(valor));
  } catch {
    // Sem localStorage o blog continua funcionando, só não lembra das coisas
  }
}

/* ---------- Estado: o que está acontecendo agora na página ---------- */
const estado = {
  filtro: "todos",
  busca: "",
  curtidas: lerLocal("blog-curtidas", {}), // quantas vezes VOCÊ curtiu cada post
};

/* ---------- Funções de apoio ---------- */

// "2026-09-20" -> "20 de set. de 2026"
function formatarData(dataTexto) {
  const data = new Date(dataTexto + "T12:00:00");
  return data.toLocaleDateString("pt-BR", { day: "numeric", month: "short", year: "numeric" });
}

// Conta as palavras e calcula o tempo de leitura (200 palavras por minuto)
function tempoDeLeitura(html) {
  const texto = html.replace(/<[^>]+>/g, " "); // tira as tags HTML
  const palavras = texto.trim().split(/\s+/).length;
  return Math.max(1, Math.round(palavras / 200)) + " min de leitura";
}

// "Música" -> "musica" (a busca ignora acentos e letras maiúsculas)
function normalizar(texto) {
  return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

let timerAviso;

function mostrarAviso(mensagem) {
  el.aviso.textContent = mensagem;
  el.aviso.classList.add("visivel");
  clearTimeout(timerAviso);
  timerAviso = setTimeout(() => el.aviso.classList.remove("visivel"), 2800);
}

/* ---------- Curtidas ---------- */
const LIMITE_CURTIDAS = 10; // cada pessoa pode curtir até 10 vezes o mesmo post

function minhasCurtidas(post) {
  return estado.curtidas[post.id] || 0;
}

function totalCurtidas(post) {
  return post.curtidasIniciais + minhasCurtidas(post);
}

function desenharBotaoCurtir(botao, post) {
  const curtiu = minhasCurtidas(post) > 0;
  botao.textContent = `${curtiu ? "❤️" : "🤍"} ${totalCurtidas(post)}`;
  botao.classList.toggle("curtido", curtiu);
  botao.dataset.curtir = post.id;
  botao.title = curtiu ? `Você curtiu ${minhasCurtidas(post)}x` : "Curtir";
}

function curtir(post, botaoClicado) {
  if (minhasCurtidas(post) >= LIMITE_CURTIDAS) {
    mostrarAviso(`Você já curtiu ${LIMITE_CURTIDAS} vezes esse post! 💖`);
    return;
  }

  estado.curtidas[post.id] = minhasCurtidas(post) + 1;
  salvarLocal("blog-curtidas", estado.curtidas);

  // Atualiza TODOS os botões desse post que estão na tela
  document.querySelectorAll(`[data-curtir="${post.id}"]`).forEach((botao) => {
    desenharBotaoCurtir(botao, post);
    botao.classList.remove("pulando");
    void botao.offsetWidth; // truque para a animação recomeçar
    botao.classList.add("pulando");
  });

  mostrarMaisUm(botaoClicado);
}

// Cria um "+1" que sobe e some
function mostrarMaisUm(botao) {
  const bolha = document.createElement("span");
  bolha.className = "mais-um";
  bolha.textContent = "+1";
  botao.appendChild(bolha);
  bolha.addEventListener("animationend", () => bolha.remove());
}

/* ---------- Montando os cards ---------- */
function criarCard(post) {
  // Copia o <template> do HTML
  const card = el.modelo.content.firstElementChild.cloneNode(true);
  const categoria = categorias[post.categoria];

  const capa = card.querySelector(".card-capa");
  capa.textContent = categoria.emoji;
  capa.classList.add("cor-" + post.categoria);

  card.querySelector(".post-meta").innerHTML = `
    <span class="categoria cor-${post.categoria}">${categoria.nome}</span>
    <span>${formatarData(post.data)}</span>
    <span>· ${tempoDeLeitura(post.conteudo)}</span>
  `;
  card.querySelector(".card-titulo").textContent = post.titulo;
  card.querySelector(".card-resumo").textContent = post.resumo;
  desenharBotaoCurtir(card.querySelector(".btn-curtir"), post);

  card.dataset.id = post.id;
  return card;
}

function renderizarFiltros() {
  const opcoes = [["todos", "✨ Todos"]];
  for (const chave in categorias) {
    opcoes.push([chave, `${categorias[chave].emoji} ${categorias[chave].nome}`]);
  }

  el.filtros.innerHTML = "";
  opcoes.forEach(([chave, texto]) => {
    const botao = document.createElement("button");
    botao.className = "filtro";
    if (estado.filtro === chave) botao.classList.add("ativo");
    botao.textContent = texto;
    botao.dataset.filtro = chave;
    el.filtros.appendChild(botao);
  });
}

function renderizarPosts() {
  const termo = normalizar(estado.busca);

  const visiveis = posts.filter((post) => {
    const passaFiltro = estado.filtro === "todos" || post.categoria === estado.filtro;
    const textoDoPost = `${post.titulo} ${post.resumo} ${categorias[post.categoria].nome}`;
    const passaBusca = normalizar(textoDoPost).includes(termo);
    return passaFiltro && passaBusca;
  });

  el.grade.innerHTML = "";
  visiveis.forEach((post, indice) => {
    const card = criarCard(post);
    card.style.animationDelay = indice * 60 + "ms"; // um card depois do outro
    el.grade.appendChild(card);
  });

  el.semResultado.hidden = visiveis.length > 0;
}

function renderizarDestaque() {
  const post = posts.find((p) => p.destaque);
  // Reaproveita o mesmo card, só que dentro da área de destaque
  const card = criarCard(post);
  el.destaque.innerHTML = card.innerHTML;
  el.destaque.dataset.id = post.id;
}

/* ---------- Leitura do post ---------- */
function abrirPost(id) {
  const post = posts.find((p) => p.id === id);
  const categoria = categorias[post.categoria];

  el.leituraCapa.textContent = categoria.emoji;
  el.leituraCapa.className = "leitura-capa cor-" + post.categoria;
  el.leituraMeta.innerHTML = `
    <span class="categoria cor-${post.categoria}">${categoria.nome}</span>
    <span>${formatarData(post.data)}</span>
    <span>· ${tempoDeLeitura(post.conteudo)}</span>
  `;
  el.leituraTitulo.textContent = post.titulo;
  el.leituraTexto.innerHTML = post.conteudo;
  desenharBotaoCurtir(el.btnCurtirLeitura, post);

  el.leitura.hidden = false;
  el.leitura.scrollTop = 0;
  document.body.classList.add("travado");
  el.btnFechar.focus();
}

function fecharPost() {
  el.leitura.hidden = true;
  document.body.classList.remove("travado");
}

/* ---------- Tema claro / escuro ---------- */
function aplicarTema(escuro) {
  document.body.classList.toggle("escuro", escuro);
  el.btnTema.textContent = escuro ? "☀️" : "🌙";
}

/* ---------- Eventos ---------- */
el.filtros.addEventListener("click", (evento) => {
  const botao = evento.target.closest(".filtro");
  if (!botao) return;
  estado.filtro = botao.dataset.filtro;
  renderizarFiltros();
  renderizarPosts();
});

el.busca.addEventListener("input", () => {
  estado.busca = el.busca.value;
  renderizarPosts();
});

// Clique em um card: curtir (se foi no botão) ou abrir o post
function aoClicarNoCard(evento) {
  const card = evento.target.closest("[data-id]");
  if (!card) return;
  const post = posts.find((p) => p.id === Number(card.dataset.id));
  const botaoCurtir = evento.target.closest(".btn-curtir");

  if (botaoCurtir) {
    curtir(post, botaoCurtir);
  } else {
    abrirPost(post.id);
  }
}

el.grade.addEventListener("click", aoClicarNoCard);
el.destaque.addEventListener("click", aoClicarNoCard);

el.btnCurtirLeitura.addEventListener("click", () => {
  const post = posts.find((p) => p.id === Number(el.btnCurtirLeitura.dataset.curtir));
  curtir(post, el.btnCurtirLeitura);
});

el.btnFechar.addEventListener("click", fecharPost);

// Clicar no fundo escuro (fora da caixa) também fecha
el.leitura.addEventListener("click", (evento) => {
  if (evento.target === el.leitura) fecharPost();
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && !el.leitura.hidden) fecharPost();
});

el.btnTema.addEventListener("click", () => {
  const escuro = !document.body.classList.contains("escuro");
  aplicarTema(escuro);
  salvarLocal("blog-tema-escuro", escuro);
});

el.btnMenu.addEventListener("click", () => {
  el.menu.classList.toggle("aberto");
});

// No celular, o menu fecha ao clicar em um link
el.menu.addEventListener("click", (evento) => {
  if (evento.target.matches("a")) el.menu.classList.remove("aberto");
});

el.formContato.addEventListener("submit", (evento) => {
  evento.preventDefault(); // não recarrega a página (o blog é fictício)
  mostrarAviso("Inscrição feita! (de mentirinha 😄)");
  el.inputEmail.value = "";
});

/* ---------- Início ---------- */
aplicarTema(lerLocal("blog-tema-escuro", false));
renderizarDestaque();
renderizarFiltros();
renderizarPosts();
