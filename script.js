document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadBtn');

    downloadBtn.addEventListener('click', () => {
        // Efeito visual de clique
        downloadBtn.innerText = "INICIANDO...";
        downloadBtn.style.opacity = "0.7";

        // Simulação de link de download
        // Substitua 'voltti.apk' pelo link real do seu arquivo
        const linkArquivo = "voltti.apk"; 

        setTimeout(() => {
            window.location.href = linkArquivo;
            
            // Retorna o texto original após o comando de download
            setTimeout(() => {
                downloadBtn.innerHTML = '<span class="icon">⬇</span> BAIXAR VOLTTI APK';
                downloadBtn.style.opacity = "1";
                alert("O download do VOLTTI APK começou!");
            }, 2000);
        }, 1000);
    });
});