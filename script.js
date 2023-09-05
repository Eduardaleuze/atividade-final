// Variáveis globais para dados simulados
let usuarioLogado = null;
const recados = [];

// Evento de clique no botão "Login"
document.getElementById('login-button').addEventListener('click', () => {
  document.getElementById('card-title').textContent = 'Login';
  document.getElementById('signup-form').classList.add('hide');
  document.getElementById('login-form').classList.remove('hide');
  document.getElementById('login-card').classList.add('flip');
});

// Evento de clique no botão "Criar Conta"
document.getElementById('signup-button').addEventListener('click', () => {
  document.getElementById('card-title').textContent = 'Cadastro de Usuário';
  document.getElementById('signup-form').classList.remove('hide');
  document.getElementById('login-form').classList.add('hide');
  document.getElementById('login-card').classList.remove('flip');
});

// Evento de submissão do formulário de cadastro de usuário
document.getElementById('signup-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  cadastrarUsuario(name, email, password);
});

// Evento de submissão do formulário de login
document.getElementById('login-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const sucesso = autenticarUsuario(email, password);
  if (sucesso) {
    usuarioLogado = email;
    mostrarUsuarioLogado();
    document.getElementById('recados-container').style.display = 'block';
    document.getElementById('login-container').style.display = 'none';
    listarRecados();
  } else {
    alert('Falha na autenticação. Verifique suas credenciais.');
  }
});

// Função para autenticar o usuário (simulado)
function autenticarUsuario(email, password) {
  // Simule a autenticação (substitua pelo seu código real de autenticação)
  return true;
}

// Função para cadastrar um usuário (simulado)
function cadastrarUsuario(name, email, password) {
  // Simule o cadastro de usuário (substitua pelo seu código real de cadastro)
  usuarioLogado = email;
  mostrarUsuarioLogado();
  document.getElementById('recados-container').style.display = 'block';
  document.getElementById('login-container').style.display = 'none';
  listarRecados();
}

// Função para mostrar informações do usuário logado
function mostrarUsuarioLogado() {
  const userStatus = document.getElementById('user-status');
  userStatus.textContent = `Logado como: ${usuarioLogado}`;
}

// Evento de submissão do formulário de criação de recado
document.getElementById('create-recado-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('recado-title').value;
  const description = document.getElementById('recado-description').value;
  criarRecado(title, description);
});

// Função para criar um recado (simulado)
function criarRecado(title, description) {
  // Simule a criação de recado (substitua pelo seu código real de criação)
  const novoRecado = {
    title,
    description,
  };
  recados.push(novoRecado);
  listarRecados();
}

// Função para listar os recados
function listarRecados() {
  const recadosList = document.getElementById('recados-list');
  recadosList.innerHTML = '';

  recados.forEach((recado, index) => {
    const recadoItem = document.createElement('div');
    recadoItem.classList.add('recado-item');
    recadoItem.innerHTML = `
      <h3>${recado.title}</h3>
      <p>${recado.description}</p>
      <button onclick="editarRecado(${index})">Editar</button>
      <button onclick="excluirRecado(${index})">Excluir</button>
    `;
    recadosList.appendChild(recadoItem);
  });
}

// Função para editar um recado (simulado)
function editarRecado(index) {
  const novoTexto = prompt('Editar recado:', recados[index].description);
  if (novoTexto !== null) {
    recados[index].description = novoTexto;
    listarRecados();
  }
}

// Função para excluir um recado (simulado)
function excluirRecado(index) {
  recados.splice(index, 1);
  listarRecados();
}

// Evento de clique no botão "Sair"
document.getElementById('user-logout').addEventListener('click', () => {
  usuarioLogado = null;
  document.getElementById('recados-container').style.display = 'none';
  document.getElementById('login-container').style.display = 'block';
  mostrarUsuarioLogado();
});

// Inicialização da aplicação
mostrarUsuarioLogado();
