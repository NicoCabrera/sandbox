import { Component} from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource} from "ng2-smart-table";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empty = [{id:1, name:"Nicolas", username:"HolaQueTal",email: "nicolascabrera@gmail.com"},
  {id:4, name:"Carlos", username:"Car-2",email: "car-2d@gmail.com"},
  {id:2, name:"Elias", username:"E-lias",email: "asdasd@hotmail.com"},
  {id:3, name:"Cabrera", username:"Cabrón",email: "asdasd@yahoo.com"}]

  settings = {
    //columnas: el nombre de cada propiedad tiene que coincidir con el nombre de un atributo del objeto contenido en el Array.
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    },
    //paginación: cantidad de elemtentos por página.
    pager:{
      perPage: 2
    },
    //Mensaje cuando no hay datos
    noDataMessage:"No hay datos para mostrar"
  };
}
