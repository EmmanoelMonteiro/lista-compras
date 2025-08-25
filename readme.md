# Lista de Compras

Este é um projeto simples de uma **Lista de Compras** para demonstrar o uso de **componentes** e uma **arquitetura limpa** em uma aplicação web com Node.js, JavaScript, CSS e HTML.

A aplicação funciona como uma **Single-Page Application (SPA)**, onde toda a manipulação da interface e dos dados é feita diretamente no navegador (lado do cliente). O Node.js é usado apenas para servir os arquivos estáticos.

---

### 💻 Tecnologias Utilizadas

* **Node.js**: Servidor HTTP para servir os arquivos da aplicação.
* **JavaScript (ES6+)**: Lógica da aplicação, manipulação do DOM e gerenciamento de estado.
* **HTML5**: Estrutura da página.
* **CSS3**: Estilização dos componentes.

---

### 📂 Estrutura do Projeto

A arquitetura do projeto foi pensada para ser modular e organizada, com cada tecnologia em seu próprio diretório.

```Bash
lista-compras/
├── public/
│   ├── css/
│   │   └── style.css       # Estilos visuais da aplicação
│   ├── js/
│   │   ├── components.js   # Funções para criar os componentes HTML
│   │   ├── data.js         # Dados da lista (simulação de um banco de dados)
│   │   └── main.js         # Lógica principal, eventos e renderização
│   └── index.html          # A página principal da aplicação (SPA)
└── server.js               # O servidor Node.js
```

---

### 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação em seu ambiente local:

1.  **Baixe e extraia o arquivo zip** com o projeto completo.
2.  Abra o terminal e navegue até a pasta raiz do projeto (`lista-compras`).
3.  **Inicie o servidor Node.js** com o seguinte comando:
    ```sh
    node server.js
    ```
4.  Abra seu navegador e acesse o endereço:
    [http://localhost:3000/](http://localhost:3000/)

---

### ✨ Funcionalidades

* **Formulário de Cadastro**: Adicione um novo item à lista informando o nome do produto e seu valor.
* **Botão `Inserir`**: Adiciona o item à lista e atualiza a exibição na tela.
* **Botão `Limpar`**: Limpa os campos do formulário para um novo cadastro.
* **Lista de Itens**: Exibe todos os itens da lista de compras.
* **Botão `Excluir`**: Permite remover um item específico da lista.

Este projeto demonstra como separar as responsabilidades de cada parte do código para facilitar a manutenção e o desenvolvimento de novas funcionalidades.