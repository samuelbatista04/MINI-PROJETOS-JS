// Esta função controla a troca de abas de acesso.
function acesso() {
    // Seleciona todos os botões de área de acesso.
    const btnsAreaAccess = document.querySelectorAll(".js-btn-acesso button");
    // Seleciona todas as abas de área de acesso.
    const tabAreaAccess = document.querySelectorAll(".js-tab");

    // Verifica se existem botões e abas de área de acesso.
    if (btnsAreaAccess.length && tabAreaAccess.length) {
        // Esta função altera a aba ativa com base no índice fornecido.
        function areaDeAcesso(index) {
            // Remove a classe "ativo" de todas as abas.
            tabAreaAccess.forEach((tab) => {
                tab.classList.remove("ativo");
            });

            // Adiciona a classe "ativo" à aba correspondente ao índice.
            tabAreaAccess[index].classList.add("ativo");
        }

        // Define a aba ativa inicial como a primeira (índice 0).
        areaDeAcesso(0);

        // Adiciona um ouvinte de evento de clique a cada botão.
        btnsAreaAccess.forEach((btn, index) => {
            btn.addEventListener("click", function () {
                // Ao clicar em um botão, chama a função para exibir a aba correspondente.
                areaDeAcesso(index);
            });
        });
    }
}

// Chama a função acesso() para inicializar o comportamento de troca de abas.
acesso();
