//38) Criando um novo componente para input do usuário
import {Component} from '@angular/core';

  @Component({
    selector: 'app-person-input',
    templateUrl : './person-input.component.html', //39) cria-se o html e depois para conseguir usa-lo, registra-se o componente html no app-module
    styleUrls: ['./person-input.component.css'] //<!--46) Um array, você pode ter mais de um arquivo de styling-->
  })
  export class PersonInputComponent {
}