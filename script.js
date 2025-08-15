
// Esta função roda assim que a página termina de carregar
window.onload = function() {
    // Usamos uma API gratuita para pegar os dados de IP e Provedor
    fetch('https://ip-api.com/json/')
        .then(response => {
            // Se a resposta da API não for boa, nós lançamos um erro
            if (!response.ok) {
                throw new Error('A resposta da rede não foi boa.');
            }
            return response.json(); // Converte a resposta para o formato JSON
        })
        .then(data => {
            const footer = document.getElementById('footer-info');
            
            // Se a API retornar 'success', montamos o texto
            if (data.status === 'success') {
                const infoText = `Seu IP: ${data.query}  •  Provedor: ${data.isp}`;
                footer.textContent = infoText;
            } else {
                footer.textContent = 'Não foi possível obter as informações de rede.';
            }
        })
        .catch(error => {
            // Se der qualquer erro na comunicação com a API
            console.error('Erro ao buscar dados da API:', error);
            const footer = document.getElementById('footer-info');
            footer.textContent = 'Erro ao carregar informações de rede.';
        });
};
