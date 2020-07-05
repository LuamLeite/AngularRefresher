import { Component } from '@angular/core'; //9) Importado daqui

@Component({ //8) Também temos aqui um decorador, o decorador de componentes. o importamos para pegar os
  //metadados necessários para nossa execução
  //10) O decorador component recebe um objeto javascript para configurar esse componente, e é divido em 3 partes importantes
  selector: 'app-root', //11) Seletor! Basicamente sua própria tag HTML pela qual você poderá usar esse componente em sua aplicação
  //12) Usamos ela em index.html por exemplo, checando lá, veremos a tag app-root
  templateUrl: './app.component.html', //14) Após o seletor achar a tag no HTML, precisa-se saber qual HTML deve ser renderizado uma vez que se
  //Acha o seletor. E esse será o template do nosso modelo. Aponta para um arquivo HTML que terá o código HTML para esse componente
  styleUrls: ['./app.component.css'] //16) Todo o styling usado nos nossos componentes, que contem uma variedade enorme de caminhos para arquivos CSS
  //que serão aplicados para nosso template! Podemos usar CSS regular para estilizar. E por default esses estilos só serão aplicados
  //ao html usado nesse componente app-root. Podemos abrir app.component.css e customizar ali o h1 para deixar o texto vermelho.
  //Em toda a renderização da tag app-root e seu html, teremos h1 com texto vermelho.
})
export class AppComponent { //7) Classe que exportamos nesse arquivo, é a importada em app.module.ts
  //28) Digamos que tenhamos uma lista de pessoas aqui em nosso appcomponent, em nosso componente raiz
  persons = ['Max', 'Manuel', 'Anna'];
  //29)Angular possui propriedades poderosas, uma é property binding. Queremos dar bind nessa propriedade no persons.component
}
