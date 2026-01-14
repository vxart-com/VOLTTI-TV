// BANCO DE DADOS VOLTTI - COMPLETO
const conteudos = [
    // --- FILMES DE TERROR ---
    { titulo: "A Morte Pede Carona (2007)", capaID: "13hcPWKedhsuyKJjDnkA1OKsDBsqNQt9Q", videoID: "1Dv2kWhQBm1pp2QEWDmzgqQfK0Cs8bYlo", tipo: "filme", genero: "Terror" },
    { titulo: "O Massacre da Serra Elétrica", capaID: "1x3pTkU1IDAras3s9fez0zAamgS6VeaRN", videoID: "1-gh6yP-OhYiCsCVa5V4-vUcxk2eXCu2J", tipo: "filme", genero: "Terror" },
    { titulo: "Resident Evil 2", capaID: "1UxZ1YcXDTr4z5WJDniBlzI3DC6JpLWFo", videoID: "1deLjAdjbblDb40gTzd7KA0gPSHsXfWQr", tipo: "filme", genero: "Terror" },

    // --- FILMES DE AÇÃO ---
    { titulo: "Cão de Briga (2005)", capaID: "1eQqmBbC-ynXoywSlftsWEn-AkTbDo6q0", videoID: "1S2ACOJIWCTT3iXqQZ91pl1-RLWxxZOuH", tipo: "filme", genero: "Ação" },
    { titulo: "Efeito Colateral", capaID: "1scsoyrl6aIYaRX2gXV9RBMgZc53UL08B", videoID: "13n5AXI_kG6-QTOadQiz-zgCJaG8etqTp", tipo: "filme", genero: "Ação" },
    { titulo: "Rambo 1", capaID: "1XJbDVYRvO0x77iY5HfdrRWCO54Ct4c9s", videoID: "1p1A82w1v_RB_XeNaf2MQGnns22Bdj4B_", tipo: "filme", genero: "Ação" },
    { titulo: "Sr. e Sra. Smith", capaID: "1-4cdytmAMaCGOW0UfSsLhXHcvLph49nK", videoID: "1nC3JSFyGd4uLaaUaDBZcyDRSj0Yglcak", tipo: "filme", genero: "Ação" },

    // --- FILMES SUSPENSE ---
    { titulo: "Sem Saída", capaID: "1rZhZrrh5d8LXqBtcI5MCBMJ5gHYbyFPH", videoID: "1pH_Hj9TxMI4rz3fV5xyF22cLTNqsyW8T", tipo: "filme", genero: "Suspense" },
    { titulo: "Vigiados", capaID: "18WxrSzD-ilSbtqF3ZCJ0Pumw1PsEbIGG", videoID: "1szU70220U5BeAKrq3nKQJfXEUSiE3Uhb", tipo: "filme", genero: "Suspense" },

    // --- MARVEL ---
    { titulo: "Os Vingadores (2012)", capaID: "17wlZ3X3JNtwvve-iUhDErUcS4hxlfozU", videoID: "1lfiSg14g7uFfMFGPGjlFJA3tAVrKqMiY", tipo: "filme", genero: "Marvel" },
    { titulo: "Vingadores: Era de Ultron", capaID: "1NR94XINMjQI5RAq6GAB5rrMog-3Uojzc", videoID: "1-C0vOq5Xp4gDmlCpmitbGNNLf_D4y-ne", tipo: "filme", genero: "Marvel" },
    { titulo: "Vingadores: Guerra Infinita", capaID: "1aEaxbcYemiRC25xrXMgGD5-6vfSKCHJK", videoID: "1sQ3RZ4-mJ3n5pt8TW16R0E1FO5NuDfzs", tipo: "filme", genero: "Marvel" },
    { titulo: "Vingadores: Ultimato", capaID: "1cmosS5uvNBgppGGkO4uLbytXyDu4WXmo", videoID: "1hpPF4WTbbjYNjLigkh0GTtLYviUR3s0s", tipo: "filme", genero: "Marvel" },

    // --- ROMANCE E INFANTIL ---
    { titulo: "After 1", capaID: "1SM2PN1hPWL0Z_mQRFTVvMoPBwtqD9rtB", videoID: "1RZE1S_UCi9DA-Q-9DZIKTyQmuBNSPHQ_", tipo: "filme", genero: "Romance" },
    { titulo: "After 2", capaID: "1CROr0ySxN7qjeMXr70nFEdqxG_XCelsz", videoID: "1WL6DAD7y0qJz7gU2Tri1DLgk7Dbhimus", tipo: "filme", genero: "Romance" },
    { titulo: "After 3", capaID: "1Z7TTYmECxz9QDotu3fRfOiQhsOO8MFjx", videoID: "1TNmCJVNQCEUChOtZ69Ono4hsD61PUGl4", tipo: "filme", genero: "Romance" },
    { titulo: "Os Incríveis 2", capaID: "1e6Bl-HEJo4UnsJyBwqX0YfHYlnJZtwXd", videoID: "1KY21irLfkWynX3yY0RlnGG48helhCPKX", tipo: "filme", genero: "Infantil" },

    // --- SÉRIES E DORAMAS (COM EPISÓDIOS) ---
    { 
        titulo: "A Má Mãe", capaID: "1_NY-gbUM21gbOdsBf56zVjNtm8KUDYoi", tipo: "dorama", genero: "Dorama",
        episodios: [
            { nome: "Episódio 01", videoID: "1_tOC-zRf2hIDxrmZiHd3gpImrj0yIWzV" },
            { nome: "Episódio 02", videoID: "LINK_AQUI" }
        ]
    }
    // Dica: Para chegar nos 70, basta seguir esse modelo acima!
];

const grid = document.getElementById('movie-grid');
const player = document.getElementById('main-player');
const titleDisplay = document.getElementById('video-title');
const listaEpsContainer = document.getElementById('lista-eps');

let currentIndex = 0;

// FUNÇÃO PARA RENDERIZAR NA TV (CARROSSEL HORIZONTAL)
function carregarTV() {
    grid.innerHTML = "";
    conteudos.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = index === 0 ? "focusable active" : "focusable";
        card.innerHTML = `
            <img src="https://drive.google.com/thumbnail?authuser=0&sz=w400&id=${item.capaID}">
            <p>${item.titulo}</p>
        `;
        grid.appendChild(card);
    });
}

// LÓGICA DO CONTROLE REMOTO (TECLADO)
document.addEventListener('keydown', (e) => {
    const cards = document.querySelectorAll('.focusable');
    
    // Tirar o foco do atual
    cards[currentIndex].classList.remove('active');

    if (e.key === "ArrowRight" && currentIndex < conteudos.length - 1) {
        currentIndex++;
    } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        currentIndex--;
    } else if (e.key === "Enter") {
        abrirConteudo(conteudos[currentIndex]);
    }

    // Colocar foco no novo
    cards[currentIndex].classList.add('active');
    
    // Scroll automático para não sumir da tela
    cards[currentIndex].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
});

function abrirConteudo(item) {
    const chave = "VOLTTI5";
    if (localStorage.getItem("voltti_chave") !== chave) {
        const senha = prompt("Chave de acesso:");
        if (senha === chave) { localStorage.setItem("voltti_chave", chave); }
        else { return; }
    }

    if (item.episodios) {
        exibirEpisodios(item);
    } else {
        darPlay(item.videoID, item.titulo);
    }
}

function darPlay(videoID, titulo) {
    player.src = `https://drive.google.com/file/d/${videoID}/preview`;
    titleDisplay.innerText = titulo;
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function exibirEpisodios(serie) {
    titleDisplay.innerText = serie.titulo;
    listaEpsContainer.innerHTML = "";
    serie.episodios.forEach(ep => {
        const btn = document.createElement('button');
        btn.innerText = ep.nome;
        btn.className = "btn-episodio";
        btn.onclick = () => darPlay(ep.videoID, `${serie.titulo} - ${ep.nome}`);
        listaEpsContainer.appendChild(btn);
    });
}

carregarTV();
