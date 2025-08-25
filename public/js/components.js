import { shoppingList } from "./data.js";

// Cria o formulário de cadastro
export function createForm() {
    const form = document.createElement('form');
    form.innerHTML = `
        <div class="form-group">
            <label for="produto">Produto:</label>
            <input type="text" id="produto" placeholder="Nome do produto" required>
        </div>
        <div class="form-group">
            <label for="valor">Valor:</label>
            <input type="number" id="valor" step="0.01" placeholder="Valor do produto" required>
        </div>
    `;
    return form;
}

// Cria a barra de botões
export function createButtons() {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    buttonContainer.innerHTML = `
        <button type="button" id="btn-inserir">Inserir</button>
        <button type="button" id="btn-limpar">Limpar</button>
    `;
    return buttonContainer;
}

// Cria a lista de itens
export function createList() {
    const ul = document.createElement('ul');
    ul.classList.add('shopping-list');
    
    shoppingList.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('list-item');
        li.innerHTML = `
            <p>${item.produto} - R$ ${item.valor.toFixed(2)}</p>
            <button data-index="${index}">Excluir</button>
        `;
        ul.appendChild(li);
    });

    return ul;
}