import { createForm, createButtons, createList } from './components.js';
import { shoppingList } from './data.js';

// Função para renderizar a lista
function renderList() {
    const listContainer = document.getElementById('list-container');
    listContainer.innerHTML = '';
    const listElement = createList();
    listContainer.appendChild(listElement);
}

// Função para renderizar a interface inicial
function renderApp() {
    const formContainer = document.getElementById('form-container');
    const buttonContainer = document.getElementById('button-bar-container');
    
    // Renderiza os componentes
    formContainer.appendChild(createForm());
    buttonContainer.appendChild(createButtons());
    renderList();

    // Adiciona os event listeners
    document.getElementById('btn-inserir').addEventListener('click', handleInsert);
    document.getElementById('btn-limpar').addEventListener('click', handleClear);
    document.getElementById('list-container').addEventListener('click', handleRemove);
}

// Manipulador do botão "Inserir"
function handleInsert() {
    const produtoInput = document.getElementById('produto');
    const valorInput = document.getElementById('valor');
    
    const produto = produtoInput.value;
    const valor = parseFloat(valorInput.value);

    if (produto && !isNaN(valor)) {
        shoppingList.push({ produto, valor });
        renderList();
        
        // Limpa os campos após a inserção
        produtoInput.value = '';
        valorInput.value = '';
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

// Manipulador do botão "Limpar"
function handleClear() {
    const produtoInput = document.getElementById('produto');
    const valorInput = document.getElementById('valor');
    
    produtoInput.value = '';
    valorInput.value = '';
}

// Manipulador do botão "Excluir"
function handleRemove(event) {
    if (event.target.tagName === 'BUTTON' && event.target.textContent === 'Excluir') {
        const index = parseInt(event.target.dataset.index);
        shoppingList.splice(index, 1);
        renderList();
    }
}

// Inicia a aplicação quando a página é carregada
document.addEventListener('DOMContentLoaded', renderApp);