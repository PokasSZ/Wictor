document.addEventListener("DOMContentLoaded", function() {
    const produtos = [
        { nome: "Placa de Vídeo NVIDIA GeForce RTX 4090", preco: "R$ 10.899,00", imagem: "placadevideo.webp" },
        { nome: "Teclado Apex Pro Sem Fio", preco: "R$ 1.399,00", imagem: "apexpro.jpg" },
        { nome: "Mouse Gamer", preco: "R$ 799,00", imagem: "mouse.jpg" }, 
        { nome: "Mouse Pad Hype X", preco: "R$ 299,00", imagem: "MousePad.png" },
        { nome: "Processador Intel Core i9-13900K", preco: "R$ 4.299,00", imagem: "Processador.jpg" },
        { nome: "GABINETE GAMER LIAN LI - REDRAGON MODELO O11 DYNAMIC BRANCO", preco: "R$ 859,99", imagem: "Gabinete.webp" },
        { nome: "Monitor Gamer Duex, 27 Pol, Full HD, IPS, 360Hz, 1ms, HDR", preco: "R$ 1.899,00", imagem: "Monitor360Hz.jpg" },
        { nome: "Notebook Gamer Acer Nitro 5 AN517-54-765V Intel core I7 11ª ger. 16GB RAM 512GB SSD (NVIDIA RTX 3050) 17,3 LED FHD IPS 144Hz Linux Gutta Preto com vermelho", preco: "R$ 4.799,00", imagem: "Noot.jpg" },
        { nome: "Cadeira Gamer Fair Play", preco: "R$ 899,00", imagem: "Cadeira.jpg" },
        { nome: "Teclado Gamer, Razer Huntsman Mini 60%", preco: "R$ 699,00", imagem: "TecladoBranco.jpg" },
        { nome: "Placa de Video NVIDIA GeForce RTX 3090", preco: "R$ 2.199,00", imagem: "Placadevideo3090.jpg" },
        { nome: "Mouse Pad Liquid", preco: "R$ 599,00", imagem: "Mousepadliquid.jpg" },
        { nome: "Processador AMD Ryzen 9 7950X AM5", preco: "R$ 4.499,00", imagem: "Processadorry.webp" },
        { nome: "Cadeira Gamer Fox Racer", preco: "R$ 799,00", imagem: "CadeiraAzul.jpg" },
    ];

    const containerProdutos = document.getElementById("produtos");

    produtos.forEach((produto, index) => {
        const produtoHTML = `
            <div class="produto">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h2>${produto.nome}</h2>
                <p class="preco">${produto.preco}</p>
                <button onclick="adicionarAoCarrinho(${index})">Adicionar ao Carrinho</button>
            </div>
        `;
        containerProdutos.innerHTML += produtoHTML;
    });
});

function adicionarAoCarrinho(index) {
    // Redireciona para a página do carrinho com o índice do produto como parâmetro
    window.location.href = `carrinho.html?produto=${index}`;
}

