import { Component, OnInit } from '@angular/core';
import { AppDataService } from "app/services/app-data.service";
import { Ng2SmartTableModule,LocalDataSource } from "ng2-smart-table";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 

  title = 'app works!';
  source:LocalDataSource;
  constructor(private appDataService: AppDataService) {
    this.source = new LocalDataSource();
  }
  settings = {
    //columnas: el nombre de cada propiedad tiene que coincidir con el nombre de un atributo del objeto contenido en el Array.
    columns: {
      id: {
        title: 'ID'
      },
      first_name: {
        title: 'Nombre'
      },
      last_name: {
        title: 'Apellido'
      },
      date: {
        title: 'Fecha'
      }
    },
    //paginación: cantidad de elemtentos por página.
    pager: {
      perPage: 2
    },
    //Mensaje cuando no hay datos
    noDataMessage: "No hay datos para mostrar"
  };
 
  ngOnInit() {
    this.appDataService.getData()
      .then(data => {
        this.source.load(data)
      })
      .catch(error => console.log(error));
  }
}
