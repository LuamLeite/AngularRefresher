//86) Um service é essencialmente uma classe, que age de maneira intermediaria entre componentes, salvar dados
//ou mesmo interagir entre outros componentes
import { Injectable } from '@angular/core';
//87) Importamos Injectables para injeção de dependência de serviços para injetar serviços em outros componentes
@Injectable({providedIn: 'root'})
//88) Adiciona-se um objeto para deixar o Angular saber da existência desse service, o ProvidedIn
//89)A alternativa seria não adicionar esse objeto e ir para o módulo de aplicativo (app.module)
//e em providers adicionar PersonsService, e adicionar o import
//90)Inject significa que o componente pode simplesmente definir que ele precisa de uma certa classe de um objeto Angular
//E angular tenta dar esse elemento, ou classe para esse componente, então para isso, precisamos falar quais coisas são injetáveis
//pro Angular. E é oque estamos fazendo aqui com o @Injectable providedIn
export class PersonsService {
//91)Vamos adicionar umas coisas para esse componente, por exemplo, vamos pegar o array de pessoas que temos no componente app e vamos
// adicionar aqui
persons = ['Max', 'Manuel', 'Anna'];
//92)Agora faremos o método
addPerson(name: string)
{
  this.persons.push(name);
}
//93) Agora que temos nosso service numa versão básica vamos começar a usa-lo em nossos componentes, vamos para o persons.component.ts
}
