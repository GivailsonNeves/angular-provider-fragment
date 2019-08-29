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
2 - Em seguinda vá na pasta project e remova todo o conteúdo do projeto gerado e substitua pelo conteúdo deste repositório.

3 - No módulo onde irá utilizar o componente será necessário importar o projeto e declarar o fragment a ser utilizado.

```ts
@NgModule({
  declarations: [
    AppComponent,
    NameViewerComponent
  ],
  imports: [
    BrowserModule,
    SimpleScrollerModule
  ],
  entryComponents: [NameViewerComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

* NameViewerComponent é o componente a ser utilizado como Fragment no componente. seu código pode ser simples como este:

```ts
import { Component } from '@angular/core';
import { Fragment } from 'projects/simple-scroller/src/lib/model/fragment-provider';

@Component({
  selector: 'app-name-viewer',
  template: `<p>
      {{data.name}}
    </p>
  `
})
export class NameViewerComponent implements Fragment {
  data: any; 

  constructor() { }

  setData<T>(data: T) {
    this.data = data;
  }

}
```

> O único ponto de atenção aqui é para a implementação da classe **Fragment** que deriva de uma interface existente no simple-scroller. 

4 - Por ultimo como utilizar o componente no seu projeto:

```ts
import { Component, Type } from '@angular/core';
import { DataProvider } from 'projects/simple-scroller/src/lib/model/data-provider';
import { FragmentProvider, Fragment } from 'projects/simple-scroller/src/lib/model/fragment-provider';
import { Observable } from 'rxjs';
import { NameViewerComponent } from './name-viewer/name-viewer.component';

@Component({
  selector: 'app-root',
  template: `
    <simple-scroller 
      [data-provider]="reference" 
      [fragment-provider]="reference">
    </simple-scroller>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DataProvider, FragmentProvider {  

  get reference(): AppComponent {
    return this;
  }

  getFragmentClass(): Type<Fragment> {
    return NameViewerComponent;
  }
  listData<T>(): Observable<T[]> {
    return Observable.create(observer => observer.next([
      {name: 'Givailson'}, {name: 'Jhonson'}, {name: 'Afonso'},
      {name: 'Givailson'}, {name: 'Jhonson'}, {name: 'Afonso'},
      {name: 'Givailson'}, {name: 'Jhonson'}, {name: 'Afonso'},
      {name: 'Givailson'}, {name: 'Jhonson'}, {name: 'Afonso'},
      {name: 'Givailson'}, {name: 'Jhonson'}, {name: 'Afonso'},
      {name: 'Givailson'}, {name: 'Jhonson'}, {name: 'Afonso'},
      {name: 'Givailson'}, {name: 'Jhonson'}, {name: 'Afonso'},
      {name: 'Givailson'}, {name: 'Jhonson'}, {name: 'Afonso'},
      {name: 'Givailson'}, {name: 'Jhonson'}, {name: 'Afonso'},
      {name: 'Givailson'}, {name: 'Jhonson'}, {name: 'Afonso'},
      {name: 'Givailson'}, {name: 'Jhonson'}, {name: 'Afonso'}
    ]));
  }

}
```

> Aqui o maior ponto de atenção é que o componente implementa as duas interfaces necessárias a utilização do scroller e passa sua referencia através de uma função get.

Como pode ser visto nesta implementação, o DataProvider passa os dados tal quais recebe ou ainda pode tratar a forma do dado, mas de fato quem deve saber como utilizar os dados é o fragment, o processo de montagem e funcionamento básico fica totalmente pela responsabilidade do do scroller.