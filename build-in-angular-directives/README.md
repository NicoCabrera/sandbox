# Build-in-directives
Las directivas que veremos a continuación son las más utilizadas: *ngIf, *ngFor, *ngStyle.
El asterisco delante de la directiva es parte de una sintaxis válida para la utilización de las mismas, y significa que el comportamiento abarcará tanto al elemento como a sus elementos hijos.

# ngIf
Se utiliza para mostrar un elemento de acuerdo a si la expresión es verdadera.
```sh
<div *ngIf="hero" >{{hero.name}}</div>
```
Si existe el nombre entonces se visualiza.

# ngFor
Sirve para repetir el elemento tantas veces como ocurrencias haya en el modelo.Ej.
```sh
<ul>
  <li *ngFor="let hero of heroes">{{hero.name}}</li>
</ul>
```
Esta directiva permite la declaración de variables locales que pueden ser útiles.
Ellas son:
- index 
- first 
- last 
- even 
- odd

Documentación oficial: [Angular](https://angular.io/docs/ts/latest/api/#!?status=stable&type=directive)