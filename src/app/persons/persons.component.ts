//17) Criaremos aqui nosso componente, criamos uma pasta própria dentro de app para não ficar confuso
//Também adicionamos o arquivo com o mesmo nome .component.ts
//18) Importamos a classe Component que usaremos de forma a nosso novo componente ser reconhecido
import { Component } from '@angular/core';
@Component ({ //20)Para ser tratado como um componente é necessario adicionar o @Component em todo arquivo que se for usar
  //a importação de componentes, não adianta só importar Component, precisa também fazer isso.
  selector: 'app-persons', //21) Precisaremos de um seletor, importante denotar, que sempre faremos um nome com -, para nunca
  //ter chance de conflitar com um nome existente.
  templateUrl:'./persons.component.html', //22) Crie o arquivo do template
  //23) Agora iremos registrar o nosso decorator, em app.module.ts

})
export class PersonsComponent //19) Nota que ao exportar Classes, usa-se letras maiusculas
{

}
