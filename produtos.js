fetch('produtos.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao carregar os produtos');
        }
        return response.json();
    })
    .then(data => {
        const container = document.getElementById('product-container');
        data.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${product.imagem}" alt="${product.nome}">
                <h2>${product.nome}</h2>
                <p>R$ ${product.preco.toFixed(2)}</p>
            `;
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Erro ao carregar os produtos:', error));