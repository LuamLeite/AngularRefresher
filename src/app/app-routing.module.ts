//71) Como todo módulo ANgular, vamos exportar a classe, importar o NgModule do AngularCore
//e colocar o @
import { NgModule } from '@angular/core';
//72) Definiremos as rotas aqui, será do tipo Routes que importaremos do Angular. E é um array de objetos
//Onde cada objeto é a definição de uma rota
import { Routes, RouterModule } from '@angular/router'; //79, adicionando também o RouterModule
//75) Importando PersonsComponent
import { PersonsComponent } from './persons/persons.component';
//77) Importando PersonsInputComponent
import { PersonInputComponent } from './persons/person-input.component';
const routes: Routes = [
  {path: '', //73) Cada rota tem seu path, o caminho após o dominio da pagina que quer carregar, se para a pagina principal
  //Não se quer ter nada, apenas deixe esse path vazio
  component: PersonsComponent //74) define quais componentes você quer renderizar nessa rota, no caso teremos que importar
  //o PersonsComponent
  },
  //76) Adicionaremos outra rota, no qual também importaremos
  {
    path: 'input',
    component: PersonInputComponent
  }
];
@NgModule ({ //78) Precisamos falar ao Angular sobre nossas rotas, e para isso precisamos importar outro Pacote.
 imports: [RouterModule.forRoot(routes)], //80) Usaremos configurações especiais para configurar esse método
 //forRoot, para dar exatamente a raiz de rotas da nossa aplicação, e passamos o array de rotas
 //81)Agora precisamos exportar um módulo de roteador para isso funcionar
 exports: [RouterModule] //82) Agora com tudo isso feito, podemos importar nossa app-routing.module no app.module.ts
})
export class AppRoutingModule{

}
