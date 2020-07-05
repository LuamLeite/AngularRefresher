//38) Criando um novo componente para input do usuário
import {Component} from '@angular/core';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

  @Component({
    selector: 'app-person-input',
    templateUrl : './person-input.component.html', //39) cria-se o html e depois para conseguir usa-lo, registra-se o componente html no app-module
    styleUrls: ['./person-input.component.css'] //<!--46) Um array, você pode ter mais de um arquivo de styling-->
  })
  export class PersonInputComponent {
    //54) Propriedade nova para usarmos no two-way-binding
    enteredPersonName: string = '';
    //49) adicionaremos aqui o método
    onCreatePerson(){ //52) Adicionaremos o parâmetro que será recebido com o valor
      //59)Retiramos o argumento, pois usando Ng-Model não precisamos mais dele.
      console.log('Created a person:' + this.enteredPersonName); //60)Atualizamos aqui para visualizar o valor
      //61)Agora que isso pertence a uma propriedade dessa classe, podemos usar em qualquer lugar que usa o componente dessa
      //classe, e como é two way-binding, podemos limpar após criar uma pessoa, de forma que apertando o botao de novo
      //não criará a mesma pessoa. Dessa forma vai resetar sempre para um form limpo após criarmos uma pessoa!
      //62) Tivemos:
      //1 -Property Binding - Ligação de propriedade []
      //2 -Event BInding - Ligação de eventos ()
      //3 -String Interpolation - Interpolação de String - {{ }}
      //4- Two-Way-Binding - Ligação bi-direcional - [(NgModel)]="property"
      this.enteredPersonName = '';
    }
}
