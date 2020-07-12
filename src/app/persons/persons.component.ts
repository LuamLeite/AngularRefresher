//17) Criaremos aqui nosso componente, criamos uma pasta própria dentro de app para não ficar confuso
//Também adicionamos o arquivo com o mesmo nome .component.ts
//18) Importamos a classe Component que usaremos de forma a nosso novo componente ser reconhecido
//94) Não precisamos mais adicionar uma propriedade ligável aqui, então vamos nos livrar do Input
//107) Importando OnInit
import { Component, OnInit} from '@angular/core'; //32) Input é um decorator, porém é um que não se declara abaixo como foi feito no @Component
//100)Adicionando o Import para o construtor fucnionar
import { PersonsService } from './persons.service';
@Component ({ //20)Para ser tratado como um componente é necessario adicionar o @Component em todo arquivo que se for usar
  //a importação de componentes, não adianta só importar Component, precisa também fazer isso.
  selector: 'app-persons', //21) Precisaremos de um seletor, importante denotar, que sempre faremos um nome com -, para nunca
  //ter chance de conflitar com um nome existente.
  templateUrl:'./persons.component.html', //22) Crie o arquivo do template
  //23) Agora iremos registrar o nosso decorator, em app.module.ts

})
//105) Para tal, faremos nossa classe implementar uma Interface, que força nossa classe a implementar uma funcionalidade
export class PersonsComponent implements OnInit//19) Nota que ao exportar Classes, usa-se letras maiusculas
//106)Faremos essa classe implementar a interface OnInit, e claro, importaremos essa interface
//108)Agora, precisamos importar o método ngOnInit para não ter erros, que é o gancho que executará ao criar nosso componente


{
//30) Então aqui, queremos ter persons, mas, vamos nomear de forma diferente para ficar facil de diferenciar as diferentes propriedades
// personList: string[]; //31) Tem que definir o tipo no TypeScript. Porém a informação, a data que queremos não está aqui, está no app.component.ts, e para pegarmos, precisaremos de uma
//outra propriedade
//32) Colocaremos o Input aqui da seguinte forma:
//95) Nos livramos do Input como dito anteriormente
//@Input() personList: string[]; //33) O que isso diz para o Angular é que a propriedade personList desse componente pode ser bound/ligada por fora. Agora podemos ir no app.component.html
personList: string[];
//)111 Nova propriedade privada, agora podemos no construtor fazer essa propriedade ficar disponivel na classe toda
//115) Comentando essa linha abaixo para mostrar o atalho
//private personService: PersonsService;
//96)Fizemos uma lista de pessoas que iremos pegar, mas, para isso, precisamos informar ao Angular que é injetável
//97)Adicionaremos um construtor para o Angular conseguir saber tudo que esse componente precisa de injeção
//98)Essa função interna será executada toda vez que Angular criar uma nova instancia desse componente
//116 Implementando o atalho
constructor(private prsService: PersonsService) {
  //101 Agora podemos colocar this.personList = prsService.persons, ou seja, aqui personList
  //corresponderá a prsService.persons
  //103 Conseguimos usar a lista desse jeito, porém, essa não é a maneira recomendada
  //this.personList = prsService.persons;
  //104) Deve-se usar algo chamado gancho de ciclo de vida em um service. Cada componente do Angular passa por um ciclo de vida
  //O ciclo consiste normalmente em:
  /*
  1-Angular cria
  2-Renderiza
  3-Cria e renderiza as childrens do objeto
  4-Checa quando as propriedades ligadas a dados mudam
  5-Destroi antes de remover do DOM
  E é possível adicionar comandos específicos no Angular, de forma que ele execute em cada um desses hooks*/
  //112) E agora faremos como deve ser feito:
  //117 Essa linha abaixo não é mais necessária, o atalho faz automaticamente
  //this.personService = prsService;
}
//109) Criação do componente
ngOnInit(){
  //110)Precisariamos colocar aqui para a personList pegar do service dessa forma ->this.personList = prsService.persons;
  //Porém prsService só fica disponivel no constructor, então criaremos uma nova propriedade privada
  //113) Agora implementando
  //118) Modificando agora para acessar no atalho
  this.personList = this.prsService.persons;
  //114) Essa implementação que fizemos é tão usada que existe um atalho, onde no construtor podemos implementar a variável privada
  //E o service ficará disponivel para todo o código
}
//Adicionamos aqui o prsService(podemos mudar esse nome), porém é importante ao lado a declaração do tipo que precisamos
//99) E adicionar no topo o import desse tipo
//102 agora se no app.component.html deixarmos a tag app-persons visivel, funcionará novamente

}
