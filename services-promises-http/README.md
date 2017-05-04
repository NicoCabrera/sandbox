# Servicios:
Un servicio se puede generar a traves del comando `generate` del angular-cli.
```sh
    ng generate service AppData
```
NOTA: Por convención, se utilizan mayúsculas en cada palabra del nombre del servicio que estamos creando.
Angular-cli renombra nuestro servicio con el sufijo `Service`. Por ende si creamos el servicio `AppData`, el nombre asignado realmente será `AppDataService`.

# Proveernos de un servicio:
Debemos proveer al módulo principal con el servicio creado, es decir, incluirlo en en array `providers`.
Finalmente lo inyectamos al componente en donde vamos a consumir del nuevo servicio.

# Crear un servicio en un directorio específico:
Para generar el servicio en un path en concreto hay que ejecutar el comando:
```sh
    ng generate service path/donde/quiero/generarlo/AppData
```
***
***
***

# Http:
El módulo `Http` viene importado desde el momento en que realizamos scaffold del proyecto Angular.
Pero hay que inyectarlo, en éste caso, en nuestro servicio para que poder utilizarlo.
```sh
    import { Http, Response } from "@angular/http";
```
En el constructor pasamos sólo el objeto `Http`. EL objeto `Response` lo usaremos luego.

# Http: método GET
El método `get()` de una instancia de `http` recibe por parámetro la url como un string. Y devuelve un Observable de tipo `Response`.
Asi que creamos un método en nuestro servicio creado anteriormente llamado, por ejemplo, `getData()` para traer un JSON por http.
```sh
    getData(){
    let url = 'https://www.mockaroo.com/xxxxxxxxxxxxx';
    return this.http.get(url);
  }
```
***
***
***

# Mock:
Para el parcial vamos a traer los datos por http desde las páginas.
```sh 
Mockaroo http://mockaroo.com/
Mokcy http://www.mocky.io/
```
***
***
***

# RxJs operator: toPromise
El operador `toPromise` convierte el `Observable` en una `Promise`, la cuál permite bindear el modelo con la tamplate sin que rompa nuestra aplicación en caso de que el modelo no tenda datos aún.
Resumiendo, importamos el operador:
```sh 
import 'rxjs/add/operator/toPromise';
```
Y lo utilizamos para convertir el observable traido desde el http.
```sh 
this.http.get(url)
      .toPromise()
```

# Promise: .then().catch()
Mediante los métodos `then()` y `catch()` podemos utilizar el patrón de generalmente se usa con las promesas, en donde asignamos el callback correspondiente en caso de éxito o de fracaso al traer los datos.
```sh 
getData() {
    return this.http.get('https://www.mockaroo.com/959bf4b0/download?count=10&key=957188c0')
      .toPromise()
      .then(this.extractData)
      .catch(this.error);
  }

private extractData(Res: Response) {
return Res.json() || {};  //Al agregar los 'pipes' se puede devolver en caso de no tener datos, un objeto vacio.
}
private error(error: Response) {
return error;
}
```

# Llevar esos datos al componente:
En el componente vamos a mostrar los datos en un ng2-smart-table. Asi que creamos el objeto que se encargará de llenar la tabla.
```sh
import { Ng2SmartTableModule,LocalDataSource } from "ng2-smart-table";
//...
source:LocalDataSource;

//...
constructor(private appDataService: AppDataService) {
    this.source = new LocalDataSource();
  }
//...
```

Usando le interfaz `OnInit` podemos traer los datos en un momento recomendado del ciclo de vida del componente para traer datos desde servicios.

```sh
export class AppComponent implements OnInit {
//...
ngOnInit() {
    this.appDataService.getData()
      .then(data => {
        this.source.load(data)
      })
      .catch(error => console.log(error));
  }

}
```

El Html debe incluir la smart-table
```sh
  <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
```