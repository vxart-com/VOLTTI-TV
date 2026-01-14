// BANCO DE DADOS VOLTTI - LISTA COMPLETA
const conteudos = [
    // --- TERROR ---
    { titulo: "A Morte Pede Carona (2007)", capaID: "13hcPWKedhsuyKJjDnkA1OKsDBsqNQt9Q", videoID: "1Dv2kWhQBm1pp2QEWDmzgqQfK0Cs8bYlo", tipo: "filme", genero: "Terror" },
    { titulo: "O Massacre da Serra Elétrica", capaID: "1x3pTkU1IDAras3s9fez0zAamgS6VeaRN", videoID: "1-gh6yP-OhYiCsCVa5V4-vUcxk2eXCu2J", tipo: "filme", genero: "Terror" },
    { titulo: "Resident Evil 2", capaID: "1UxZ1YcXDTr4z5WJDniBlzI3DC6JpLWFo", videoID: "1deLjAdjbblDb40gTzd7KA0gPSHsXfWQr", tipo: "filme", genero: "Terror" },

    // --- AÇÃO ---
    { titulo: "Cão de Briga (2005)", capaID: "1eQqmBbC-ynXoywSlftsWEn-AkTbDo6q0", videoID: "1S2ACOJIWCTT3iXqQZ91pl1-RLWxxZOuH", tipo: "filme", genero: "Ação" },
    { titulo: "Efeito Colateral", capaID: "1scsoyrl6aIYaRX2gXV9RBMgZc53UL08B", videoID: "13n5AXI_kG6-QTOadQiz-zgCJaG8etqTp", tipo: "filme", genero: "Ação" },
    { titulo: "Rambo 1", capaID: "1XJbDVYRvO0x77iY5HfdrRWCO54Ct4c9s", videoID: "1p1A82w1v_RB_XeNaf2MQGnns22Bdj4B_", tipo: "filme", genero: "Ação" },
    { titulo: "Sr. e Sra. Smith", capaID: "1-4cdytmAMaCGOW0UfSsLhXHcvLph49nK", videoID: "1nC3JSFyGd4uLaaUaDBZcyDRSj0Yglcak", tipo: "filme", genero: "Ação" },

    // --- MARVEL ---
    { titulo: "Os Vingadores (2012)", capaID: "17wlZ3X3JNtwvve-iUhDErUcS4hxlfozU", videoID: "1lfiSg14g7uFfMFGPGjlFJA3tAVrKqMiY", tipo: "filme", genero: "Marvel" },
    { titulo: "Vingadores: Era de Ultron", capaID: "1NR94XINMjQI5RAq6GAB5rrMog-3Uojzc", videoID: "1-C0vOq5Xp4gDmlCpmitbGNNLf_D4y-ne", tipo: "filme", genero: "Marvel" },
    { titulo: "Vingadores: Guerra Infinita", capaID: "1aEaxbcYemiRC25xrXMgGD5-6vfSKCHJK", videoID: "1sQ3RZ4-mJ3n5pt8TW16R0E1FO5NuDfzs", tipo: "filme", genero: "Marvel" },
    { titulo: "Vingadores: Ultimato", capaID: "1cmosS5uvNBgppGGkO4uLbytXyDu4WXmo", videoID: "1hpPF4WTbbjYNjLigkh0GTtLYviUR3s0s", tipo: "filme", genero: "Marvel" },

    // --- ROMANCE / INFANTIL ---
    { titulo: "After 1", capaID: "1SM2PN1hPWL0Z_mQRFTVvMoPBwtqD9rtB", videoID: "1RZE1S_UCi9DA-Q-9DZIKTyQmuBNSPHQ_", tipo: "filme", genero: "Romance" },
    { titulo: "Os Incríveis 2", capaID: "1e6Bl-HEJo4UnsJyBwqX0YfHYlnJZtwXd", videoID: "1KY21irLfkWynX3yY0RlnGG48helhCPKX", tipo: "filme", genero: "Infantil" },

    // --- DORAMAS ---
    { 
        titulo: "A Má Mãe", capaID: "1_NY-gbUM21gbOdsBf56zVjNtm8KUDYoi", tipo: "dorama", genero: "Dorama",
        episodios: [
            { nome: "Episódio 01", videoID: "1_tOC-zRf2hIDxrmZiHd3gpImrj0yIWzV" }
        ]
    }
];

const grid = document.getElementById('movie-grid');
const player = document.getElementById('main-player');
const titleDisplay = document.getElementById('video-title');
const listaEpsContainer = document.getElementById('lista-eps');

let currentIndex = 0;
let listaDeCards = []; 

// 1. GERAÇÃO DO LAYOUT EM CATEGORIAS
function renderizarTV() {
    grid.innerHTML = "";
    listaDeCards = [];
    const generos = [...new Set(conteudos.map(item => item.genero))];

    generos.forEach(gen => {
        const container = document.createElement('div');
        container.className = 'genero-container';
        container.innerHTML = `<h2 class="genero-titulo">${gen}</h2>`;
        
        const linha = document.createElement('div');
        linha.className = 'genero-linha';
        const filmesDoGenero = conteudos.filter(i => i.genero === gen);
        
        filmesDoGenero.forEach(item => {
            const card = document.createElement('div');
            card.className = "focusable";
            card.setAttribute('data-id', conteudos.indexOf(item));
            card.innerHTML = `<img src="https://drive.google.com/thumbnail?authuser=0&sz=w400&id=${item.capaID}">`;
            linha.appendChild(card);
            listaDeCards.push(card);
        });
        container.appendChild(linha);
        grid.appendChild(container);
    });

    if (listaDeCards.length > 0) listaDeCards[0].classList.add('active');
}

// 2. NAVEGAÇÃO POR CONTROLE REMOTO
document.addEventListener('keydown', (e) => {
    if (listaDeCards.length === 0) return;
    listaDeCards[currentIndex].classList.remove('active');

    if (e.key === "ArrowRight" && currentIndex < listaDeCards.length - 1) {
        currentIndex++;
    } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        currentIndex--;
    } else if (e.key === "Enter") {
        const itemID = listaDeCards[currentIndex].getAttribute('data-id');
        abrirConteudo(conteudos[itemID]);
    }

    listaDeCards[currentIndex].classList.add('active');
    listaDeCards[currentIndex].scrollIntoView({ behavior: "smooth", inline: "center", block: "center" });
});

// 3. LOGICA DE ABRIR FILME OU SÉRIE
function abrirConteudo(item) {
    const chave = "VOLTTI5";
    if (localStorage.getItem("voltti_chave") !== chave) {
        const senha = prompt("Insira sua Chave Mensal:");
        if (senha === chave) { localStorage.setItem("voltti_chave", chave); }
        else { return; }
    }

    if (item.episodios) {
        exibirEpisodiosTV(item);
    } else {
        darPlayTV(item.videoID, item.titulo);
    }
}

// 4. FUNÇÃO DAR PLAY COM AUTOMATIZAÇÃO PARA TV
function darPlayTV(id, titulo) {
    // Carrega o vídeo com tentativa de autoplay
    player.src = `https://drive.google.com/file/d/${id}/preview?autoplay=1`;
    titleDisplay.innerText = titulo;
    
    // Sobe a tela automaticamente para o player (Foco no vídeo)
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Tenta colocar o iframe em Tela Cheia (Fullscreen)
    setTimeout(() => {
        if (player.requestFullscreen) {
            player.requestFullscreen();
        } else if (player.webkitRequestFullscreen) { /* Safari/Chrome TV */
            player.webkitRequestFullscreen();
        } else if (player.msRequestFullscreen) { /* IE11/Edge */
            player.msRequestFullscreen();
        }
    }, 1000); // Aguarda 1 segundo para o carregamento do link
}

function exibirEpisodiosTV(serie) {
    titleDisplay.innerText = serie.titulo;
    listaEpsContainer.innerHTML = "";
    serie.episodios.forEach(ep => {
        const btn = document.createElement('button');
        btn.innerText = ep.nome;
        btn.className = "btn-episodio";
        btn.onclick = () => darPlayTV(ep.videoID, `${serie.titulo} - ${ep.nome}`);
        listaEpsContainer.appendChild(btn);
    });
    // Começa o primeiro episódio automaticamente
    darPlayTV(serie.episodios[0].videoID, `${serie.titulo} - ${serie.episodios[0].nome}`);
}

renderizarTV();
