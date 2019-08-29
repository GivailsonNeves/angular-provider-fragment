# Angular with Provider and Fragment

Este projeto têm por objetivo exemplificar como implementar o conceito de DataProviders e Fragments no Ambiente Android. onde:

- **DataProviders**: São elementos responsáveis pelo fornecidmento de dados ao componente.
- **Fragment**: São componentes responsáveis pela exibição dos dados injetados via DataProvider.

Nesse cenário, a ideia é que somente o DataProvider conheça o tipo de dados da coleção que está sendo fornecida bem como o Fragment sabia como renderizar o dado.

Neste projeto temos um componente de scroller bem simples. Sua principal função é consultar a fonte de dados redenrizar quantos componentes forem necessários e manter o comportamento padrão de um simples scroller. Contudo o grande beneficio é que o componente de scroller se quer precisa saber qual o tipo de dados e como renderizar o mesmo.

## Para testar este componente em seu projeto é preciso:

1 - Crie um projeto Angular(6+) normal, e após isso crie a library **simple-scroller**, utilizando o comando a seguir:

```bash
> ng g library simple-scroller
```
2 - Em seguinda vá na pasta project e remova todo o conteúdo do projeto gerado.