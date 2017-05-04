# AngularRouting

Hay que importar:
```sh
 import { RouterModule, Routes } from '@angular/router';
```
`Routers` es un array de objetos que implementen la interfaz `Route`. Los objetos que creemos en ese array deben contar por lo menos con dos propiedades: path y component.
En el módulo declaramos una constante con las rutas. Ej:
```sh
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
```
`RouterModule` es quien se encarga de manejar las rutas que le debemos pasar a traves del método `forRoot()`.
Importamos el módulo y lo declaramos en el array de imports.
```sh
 imports: [
    RouterModule.forRoot(appRoutes)
    // other imports here
  ],
```

# Crear links en la template
Para crear links en la template hay que utilizar la propiedad `routerLink` sobre los tags `<a>`.
Para marcar un link como activo se emplea la propiedad `routerLinkActive`.
```sh
<a routerLink="/login" routerLinkActive="active">Login</a>
```
Notese que para declarar una ruta en la clase `Route` no utilizamo el `/`, pero cuando lo utilizamos en el tag `<a>` debemos incluirla.

# Router-Outlet
Con el tag `<router-outlet>` especificamos el lugar en donde se visualizarán los componentes dinámicamente según cambie la ruta en la template.
```sh
<router-outlet></router-outlet>
```