import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; //6) Estamos importando o AppComponent do arquivo app.component.ts
//24) Importar o componente criado
import { PersonsComponent } from './persons/persons.component';
//40) Adicionando person-imput-component
import {PersonInputComponent} from './persons/person-input.component';
//57) Importando o FormsModule para usar formularios, input do usuario e two-way-binding
import {FormsModule} from '@angular/forms';
//83) Importando o AppRoutingModule que criamos
import { AppRoutingModule } from './app-routing.module';
//156) Importando Módulo para poder fazer e receber requisições HTPP
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent, //2) Aqui declararemos os componentes que vamos usar dentro desse módulo
    //Se tivermos múltiplos módulos, cada módulo pode definir seus próprios componentes que podemos usar dentro desse módulo
    PersonsComponent, //25) Adicionamos em declarações
    PersonInputComponent //41) Adicionando em declarations
  ],
  //26) Basta agora adicionar a tag em app.component.html, ou deletar todo o conteudo de lá e adicionar essa tag.
  imports: [
    BrowserModule //3) Podemos aqui importar outros módulos para esse módulo
    //BrowserModule é um módulo embutido no Angular que desbloqueia certfas funcionalidades na nossa aplicação
    //Nosso módulo principal depende desse módulo de navegador integrado
    //58) Adicionando nos Imports
    ,FormsModule
    //84) Adicionando aos imports. Agora modificaremos os componentes no app.component.html para refletir o roteamento
    ,AppRoutingModule,
    HttpClientModule //157) Isso permite injetar o Angular HTTP em qualquer lugar da aplicação, agora indo para PersonsService
    ],
  providers: [], // 4) Será revisitado depois
  bootstrap: [AppComponent], //5) Bootstrap é sobre o componente raiz, onde todos os outros componentes estão, todos ficam dentro do componente raiz

})
export class AppModule { }

// 1) Pense nisso como uma configuração global para seu aplicativo angular.
//Usando o (importando ele) @NgModule que é um módulo do Angular (Chama-se decorator), um módulo é declarado adicionando o @
//Colocando esse módulo e os metadadados e declarações dentro do @NgModule transformamos essa clase vazia, AppModule
//Em uma classe global com várias configurações Angular diferentes, e então se exporta essa classe para ser usada em outros locais
//Existem varios, vale a pena olhar na documentação

//Extra: Os arquivos angular após serem construidos com o ng serve, ficam na verdade na memória, é possivel visualiza-los
//usando o comando ng build. Que mostrará a pasta dist na raiz. Porém trabalharemos não neles, mas, na pasta src.
