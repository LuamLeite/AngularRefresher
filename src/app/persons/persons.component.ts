//17) Criaremos aqui nosso componente, criamos uma pasta própria dentro de app para não ficar confuso
//Também adicionamos o arquivo com o mesmo nome .component.ts
//18) Importamos a classe Component que usaremos de forma a nosso novo componente ser reconhecido
import { Component, Input} from '@angular/core'; //32) Input é um decorator, porém é um que não se declara abaixo como foi feito no @Component
@Component ({ //20)Para ser tratado como um componente é necessario adicionar o @Component em todo arquivo que se for usar
  //a importação de componentes, não adianta só importar Component, precisa também fazer isso.
  selector: 'app-persons', //21) Precisaremos de um seletor, importante denotar, que sempre faremos um nome com -, para nunca
  //ter chance de conflitar com um nome existente.
  templateUrl:'./persons.component.html', //22) Crie o arquivo do template
  //23) Agora iremos registrar o nosso decorator, em app.module.ts

})
export class PersonsComponent //19) Nota que ao exportar Classes, usa-se letras maiusculas
{
//30) Então aqui, queremos ter persons, mas, vamos nomear de forma diferente para ficar facil de diferenciar as diferentes propriedades
// personList: string[]; //31) Tem que definir o tipo no TypeScript. Porém a informação, a data que queremos não está aqui, está no app.component.ts, e para pegarmos, precisaremos de uma
//outra propriedade
//32) Colocaremos o Input aqui da seguinte forma:
@Input() personList: string[]; //33) O que isso diz para o Angular é que a propriedade personList desse componente pode ser bound/ligada por fora. Agora podemos ir no app.component.html
}
