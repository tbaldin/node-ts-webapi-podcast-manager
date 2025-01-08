# Podcast Manager

### Descrição
Um app ao estilo Netflix, onde possa centralizar diferentes episódios podcasts separados por categoria

### Domínio
Podcasts feitos em vídeos

### Features
- Listar os epdódios podcasts em sessoes de categorias
    - [saúde, fitnes, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como

#### Feature:
- Listar os epdódios podcasts em sessoes de categorias

### Como vou implementar:
GET: retorna lista de episódios

response:

```js
[
    {
        podcastName:"flow",
        episode:"CBUM - Flow #319",
        videoId:"SUBSTITUIR_PELO_ID_VIDEO",
        cover:"SUBSTITUIR_PELO_LINK_IMG_CAPA",
        link:"SUBSTITUIR_PELO_LINK_VIDEO",
        category:["saúde", "esporte", "bodybuilder"]
    },
    {
        podcastName:
        "flow",
        episode:"RUBENS BARRICHELLO #339",
        videoId:"SUBSTITUIR_PELO_ID_VIDEO",
        cover:"SUBSTITUIR_PELO_LINK_IMG_CAPA",
        link:"SUBSTITUIR_PELO_LINK_VIDEO",
        category:["esporte", "corrida"]
    }
]
```

GET: retorna lista de episódios baeado em um parametro enviado pelo cliente do nome do podcast