const CHAVE_LOCALSTORAGE = "usuarios";

const formCadastro = document.getElementById("form-cadastro");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputBusca = document.getElementById("busca");
const btnLimpar = document.getElementById("btn-limpar");
const btnExcluirTodos = document.getElementById("btn-excluir-todos");
const avisoLista = document.getElementById("aviso-lista");
const lista = document.getElementById("lista-usuarios");

const lerUsuarios = () => {
  try {
    const dados = JSON.parse(localStorage.getItem(CHAVE_LOCALSTORAGE) || "[]");
    return dados;
  } catch (erro) {
    return [];
  }
};

const salvarUsuarios = (usuarios) => {
  localStorage.setItem(CHAVE_LOCALSTORAGE, JSON.stringify(usuarios));
};

const criarItem = (usuario) => {
  const li = document.createElement("li");
  li.className = "usuario";

  const dados = document.createElement("div");
  dados.className = "usuario-dados";

  const data = document.createElement("span");
  data.className = "usuario-data";
  data.textContent = usuario.data;

  const nome = document.createElement("strong");
  nome.textContent = usuario.nome;

  const email = document.createElement("span");
  email.textContent = usuario.email;

  dados.append(data, nome, email);

  const botao = document.createElement("button");
  botao.type = "button";
  botao.className = "btn btn-sec btn-pequeno";
  botao.textContent = "Excluir";
  botao.setAttribute("aria-label", "Excluir " + usuario.nome);
  botao.addEventListener("click", () => excluirUsuario(usuario.id));

  li.append(dados, botao);
  return li;
};

const mostrarLista = () => {
  const todos = lerUsuarios();
  const pesquisa = inputBusca.value.trim().toLowerCase();

  const filtrados = todos.filter(
    (usuario) =>
      usuario.nome.toLowerCase().includes(pesquisa) ||
      usuario.email.toLowerCase().includes(pesquisa),
  );

  lista.innerHTML = "";
  filtrados.forEach((usuario) => lista.appendChild(criarItem(usuario)));

  if (todos.length === 0) {
    avisoLista.textContent = "Nenhum usuário cadastrado.";
  } else if (filtrados.length === 0) {
    avisoLista.textContent = "Nenhum usuário encontrado para essa busca.";
  } else {
    avisoLista.textContent = "";
  }
};

const excluirUsuario = (id) => {
  const restantes = lerUsuarios().filter((usuario) => usuario.id !== id);
  salvarUsuarios(restantes);
  mostrarLista();
};

formCadastro.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = inputNome.value.trim();
  const email = inputEmail.value.trim();
  if (nome === "" || email === "") {
    return;
  }

  const usuarios = lerUsuarios();
  usuarios.push({
    id: Date.now(),
    data: new Date().toLocaleString("pt-BR"),
    nome,
    email,
  });
  salvarUsuarios(usuarios);

  formCadastro.reset();
  inputBusca.value = "";
  mostrarLista();
});

btnLimpar.addEventListener("click", () => {
  formCadastro.reset();
  inputNome.focus();
});

btnExcluirTodos.addEventListener("click", () => {
  localStorage.removeItem(CHAVE_LOCALSTORAGE);
  mostrarLista();
});

inputBusca.addEventListener("input", mostrarLista);

mostrarLista();
