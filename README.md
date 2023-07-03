## Design System

# Isso está em Monorepo

Monorepo é uma arquitetura que permite diversos projetos separados estejam integrados por meio de um projeto raíz

No projeto raiz estará um único "node_modules" para todos os projetos compartilhando dependências e pra que isso fucione é necessário configurar o "workspaces" no package.json dele

Também é necessário que em cada repositório interno sejam configurados "main", "module" and "types" com a referencia do arquivo de entrada gerado pelo build

# Estrutura

Aqui temos 4 pacotes:

- eslint-config (que nutri o padrão eslint para os packages do projeto)
- react (que contem os componentes em react)
- tokens (que contem todos os tokens da aplicação e é consumido pelo package react)
- ts-config (que possui as configurações de typescript que é consumida pelos packages)

**Package**

REACT, possui dependências de desenvolvimento para criação de componentes React de modo que em seu script de build e dev excluam o react (com: --external react)
