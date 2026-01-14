const conteudos = [
    { titulo: "A Morte Pede Carona", capaID: "13hcPWKedhsuyKJjDnkA1OKsDBsqNQt9Q", videoID: "1Dv2kWhQBm1pp2QEWDmzgqQfK0Cs8bYlo" },
    { titulo: "Cão de Briga", capaID: "1eQqmBbC-ynXoywSlftsWEn-AkTbDo6q0", videoID: "1S2ACOJIWCTT3iXqQZ91pl1-RLWxxZOuH" }
    // ... adicione todos os seus 70 filmes aqui
];

const grid = document.getElementById('movie-grid');
const player = document.getElementById('main-player');
const titleDisplay = document.getElementById('video-title');
let currentIndex = 0;

// Renderizar catálogo para TV
function carregarTV() {
    grid.innerHTML = "";
    conteudos.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = index === 0 ? "focusable active" : "focusable";
        card.innerHTML = `<img src="https://drive.google.com/thumbnail?authuser=0&id=${item.capaID}"><p>${item.titulo}</p>`;
        grid.appendChild(card);
    });
}

// Lógica de Navegação pelo Controle (Teclado)
document.addEventListener('keydown', (e) => {
    const cards = document.querySelectorAll('.focusable');
    cards[currentIndex].classList.remove('active');

    if (e.key === "ArrowRight" && currentIndex < conteudos.length - 1) {
        currentIndex++;
    } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        currentIndex--;
    } else if (e.key === "Enter") {
        selecionarFilme(conteudos[currentIndex]);
    }

    cards[currentIndex].classList.add('active');
    // Scroll automático para o filme focado aparecer
    cards[currentIndex].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
});

function selecionarFilme(item) {
    // Na TV, para facilitar, você pode deixar a chave salva ou pedir uma vez só
    const chave = "VOLTTI5";
    if (localStorage.getItem("voltti_chave") === chave || prompt("Senha:") === chave) {
        localStorage.setItem("voltti_chave", chave);
        player.src = `https://drive.google.com/file/d/${item.videoID}/preview`;
        titleDisplay.innerText = item.titulo;
    }
}

carregarTV();
