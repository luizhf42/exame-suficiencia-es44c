# [Exame de Suficiência - ES44C](https://luizhf42.github.io/exame-suficiencia-es44c)

Site de um clube de leitura fictício chamado Marca-Página. Projeto do exame de suficiência da disciplina ES44C - Programação Web Front-End - Engenharia de Software, da UTFPR.

## Integrante

- Luiz Henrique Felix

## Tecnologias

- HTML
- CSS (Flexbox)
- JavaScript
- DOM API
- Web Storage API (Local Storage)
- Bootstrap Icons

## Conteúdos

- Página principal, com informações gerais sobre o clube
- Página de cadastro, com formulário de 5 campos e redirecionamento para a página de login
- Página de login por e-mail e senha, que redireciona para a página principal
- Página admin, que permite cadastrar usuários por nome e e-mail e guarda a lista no Local Storage, com opções de pesquisar, excluir um item, excluir todos e limpar os campos do formulário
- Link para o currículo no rodapé de todas as páginas

## Estrutura do projeto

```
.
├── index.html       página principal
├── cadastro.html    página de cadastro
├── login.html       página de login
├── admin.html       página de administração de usuários
├── curriculo.pdf    currículo, linkado no rodapé
├── assets/          imagens da página principal
├── style/
│   ├── global.css   variáveis e estilos de todas as páginas
│   ├── index.css    estilos da página principal
│   ├── form.css     estilos de formulários
│   └── admin.css    estilos da lista de usuários
└── script/
    └── admin.js     cadastro, pesquisa e exclusão de usuários
```

## Créditos
- Imagens: [Pexels](https://www.pexels.com)
- Ícones: [Bootstrap Icons](https://icons.getbootstrap.com)
  
## Validação

Todos os HTMLs e CSSs do projeto foram validados no [Markup Validation Service](https://validator.w3.org/) e no [CSS Validation Service](https://jigsaw.w3.org/css-validator/) da W3C.