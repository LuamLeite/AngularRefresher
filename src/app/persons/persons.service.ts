//86) Um service é essencialmente uma classe, que age de maneira intermediaria entre componentes, salvar dados
//ou mesmo interagir entre outros componentes
import { Injectable } from '@angular/core';
//139 Import do rxjs, biblioteca muito usada pelo Angular
import { Subject } from 'rxjs'; //É um observable
//87) Importamos Injectables para injeção de dependência de serviços para injetar serviços em outros componentes
import { HttpClient } from '@angular/common/http'; //158 Injetando o Angular HTTP
import { map } from 'rxjs/operators';
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
//138)Ciraremos uma nova variável que receberá um import de uma biblioteca não do Angular, mas, que é usada pesadamente pelo Angular
personsChanged = new Subject<string[]>(); //140) Um Subject é muito similar ao eventEmitter que usamos anteriormente. Não se esqueça de declarar o tipo por ser um objeto genérico
//137) persons passará a ser privado, ou seja, não poderá ser usado fora daqui (erro), isso bloqueará a etapa 144, precisamos acessar isso ainda em persons.component.ts
//165 Agora iremos esvaziar a matriz e ela começará como undefined
persons: string[];

constructor (private http: HttpClient) { //159 Adicionamos no construtor, no privado o Http
}

//160 Agora faremos um método de fetch
fetchPersons(){
  this.http.get<any>('https://pokeapi.co/api/v2/pokemon')
  .pipe(map(resData => {
    return resData.results.map(pokemon => pokemon.name);
  })) //166) Usaremos map para tratar a informação, mas, temos que importa-lo. Usamos como uma função
  //167) É confuso, mas, esse map não é o mesmo que se usa em qualquer lugar do javascript, ele funciona como uma função
  //mas, recebe outra e um parametro de qual dado tratado dessa resposta você quer de volta, no caso acima, receberemos apenas o nome
  .subscribe(resData => {
  console.log(resData);
  //168 agora podemos apenas mandar nossa informacao, usando o next
  //169 Agora no persons.components
  this.personsChanged.next(resData);
  })//161 Enviará solicitação get, porém precisamos adicionar subscribe
  //Usando um observable para dar inicio a solicitação, porque o Angular não a enviará se ninguém estiver ouvindo a resposta
  //162 Como pegaremos a data das persons daqui, iremos no persons.component modificar o ngOnInit
}
//92)Agora faremos o método
addPerson(name: string)
{
  this.persons.push(name);
  //124) Verificando se funciona
  console.log(name);
  //139) A cada mudança em persons, passamos no parametro next o nosso novo atributo persons
  this.personsChanged.next(this.persons);
}
//93) Agora que temos nosso service numa versão básica vamos começar a usa-lo em nossos componentes, vamos para o persons.component.ts
//127) Um método que nos permite remover uma pessoa, clicando no nome dela
removePerson(name: string)
{
  this.persons = this.persons.filter(person => {
    //129receberemos um nome nessa função, e vai retornar verdadeiro sempre que for diferente
    //do nome que passamos, quando for igual, retornara falso
  return person !== name;
  });
  //130) checando a pessoa, o objetivo é essa função receber person ao se clicar nessa pessoa
  console.log(this.persons);
  //140) Mesma coisa na remoção
  this.personsChanged.next(this.persons);
  //141) Com isso estamos emitindo um evento com esse Subject que contem nossa lista atualizada de persons.
  //142) Agora podemos pegar esse evento em outros locais do nosso aplicativo, faremos isso no nosso persons.component.ts
   //128) Filter é um método interno que executa uma função
  //em todso os elementos do array. portanto ele vai olhar em toda person do array
  //131) Vamos no persons.component.html para implementar a lógica de clique
}
}
