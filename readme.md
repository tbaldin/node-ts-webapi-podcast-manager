# Podcast Manager

## Descrição

O **Podcast Manager** é uma aplicação ao estilo Netflix para centralizar e organizar episódios de podcasts em vídeo. O objetivo é categorizar os episódios por temas e permitir uma experiência de navegação simples e intuitiva para os usuários.

## Domínio

Podcasts feitos em vídeos.

## Features

- **Listar episódios de podcasts** em sessões de categorias:
  - Exemplos de categorias: saúde, fitness, mentalidade, humor.
- **Filtrar episódios por nome do podcast.**

## Rotas da API

### 1. Listar Episódios de Podcasts

**Método:** `GET`  
**Endpoint:** `/podcasts/list`

**Descrição:** Retorna uma lista de episódios de podcasts, organizados por categorias.

**Exemplo de Resposta:**

```json
[
    {
        "podcastName": "flow",
        "episode": "CBUM - Flow #319",
        "videoId": "SUBSTITUIR_PELO_ID_VIDEO",
        "cover": "SUBSTITUIR_PELO_LINK_IMG_CAPA",
        "link": "SUBSTITUIR_PELO_LINK_VIDEO",
        "category": ["saúde", "esporte", "bodybuilder"]
    },
    {
        "podcastName": "flow",
        "episode": "RUBENS BARRICHELLO #339",
        "videoId": "SUBSTITUIR_PELO_ID_VIDEO",
        "cover": "SUBSTITUIR_PELO_LINK_IMG_CAPA",
        "link": "SUBSTITUIR_PELO_LINK_VIDEO",
        "category": ["esporte", "corrida"]
    }
]
```

---

### 2. Filtrar Episódios por Nome do Podcast

**Método:** `GET`  
**Endpoint:** `/podcasts/episode`

**Descrição:** Retorna uma lista de episódios filtrados com base no nome do podcast enviado pelo cliente.

---

## Estrutura do Projeto

O projeto segue uma estrutura modular e escalável:

- **Controllers:** Contém as funções para manipulação e resposta das rotas.
  - Exemplo:
    - `getListEpisodes`: Retorna a lista completa de episódios.
    - `getFilterEpisodes`: Filtra episódios com base no nome do podcast.
- **Routes:** Define as rotas do sistema.
- **Utils:** Contém utilitários como métodos HTTP.

---

## Exemplo de Código

### Inicialização do Servidor

```typescript
import * as http from "http";
import { 
    getFilterEpisodes, 
    getListEpisodes 
} from "./controllers/podcasts-controller"
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    const baseUrl = request.url?.split("?")[0];
    
    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }

    if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }
};
```

---

## Tecnologias Utilizadas

- **Node.js**: Para o servidor backend.
- **TypeScript**: Para desenvolvimento com tipagem estática.
- **HTTP Módulo Nativo**: Para manipulação de requisições e respostas.

---

## Como Rodar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/podcast-manager.git
   cd podcast-manager
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor:**

   ```bash
   npm start
   ```

4. **Acesse os endpoints:**  
   - Listar episódios: `http://localhost:3000/podcasts/list`  
   - Filtrar por nome do podcast: `http://localhost:3000/podcasts/episode?name=flow`

---

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```

Esse README oferece uma visão abrangente do projeto, descrevendo suas funcionalidades, estrutura e instruções para uso. Ajuste conforme necessário para refletir detalhes específicos do seu projeto.