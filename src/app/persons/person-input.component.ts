//38) Criando um novo componente para input do usuário
//65)) Importamos a classe EventEmitter
//119) Não precisamos mais de Output nem EventEmitter tendo o Service
import {Component} from '@angular/core'; //63) Vamos importar Output para fazer um binding de forma a fazer uma nova entrada na listagem
import { PersonsService } from './persons.service';

  @Component({
    selector: 'app-person-input',
    templateUrl : './person-input.component.html', //39) cria-se o html e depois para conseguir usa-lo, registra-se o componente html no app-module
    styleUrls: ['./person-input.component.css'] //<!--46) Um array, você pode ter mais de um arquivo de styling-->
  })
  export class PersonInputComponent {
    //120 Ao invés disso precisamos de um construtor para injetar nosso Persons Service
    constructor(private personsService: PersonsService){

    }
    //54) Propriedade nova para usarmos no two-way-binding
    //64) Faremos nosso evento ligado ao output para tal, e o valor padrão dele precisará de mais uma importação padrão
    //Do Angular, o EventEmitter
    //121Removendo output e eventEmitter
    // @Output() personCreate = new EventEmitter<string>(); //66) Como é uma classe genérica, adicionamos <> e aqui colocamos o tipo de data que colocaremos
    enteredPersonName: string = '';
    //49) adicionaremos aqui o método
    onCreatePerson(){ //52) Adicionaremos o parâmetro que será recebido com o valor
      //59)Retiramos o argumento, pois usando Ng-Model não precisamos mais dele.
      console.log('Created a person:' + this.enteredPersonName); //60)Atualizamos aqui para visualizar o valor
      //67)Agora usamos ele, com o Emit, um método que vai emitir a informação, e graças ao output e a combinação
      //desse método, podemos ouvir essa informação do lado de fora. Agora no app.component.html podemos atualizar
      //122) Removendo esse método que não usaremos mais daquela forma
      // this.personCreate.emit(this.enteredPersonName); //
      this.personsService.addPerson(this.enteredPersonName);
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
