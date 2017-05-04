# Repositorio del ng2-smart-table:
https://github.com/akveo/ng2-smart-table

# Página con más documentación del componente ng2-smart-table:
https://akveo.github.io/ng2-smart-table/#/

# Descargar el paquete con npm:
    npm install --save ng2-smart-table

# Importar el módulo en nuestro módulo ppal:
    // ...
    @NgModule({
        imports: [
        // ...
        Ng2SmartTableModule,
        // ...
    ],
        declarations: [ ... ]
    })
    // ...
# Y el componente en cada componente que lo requiera:
    import { Ng2SmartTableModule } from 'ng2-smart-table';

# El tag que se utiliza en el Html es:
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>

Las propiedades más importantes en éste tag son
- settings
- source

Tanto settings como data son propiedades del modelo.
'settings' es un objeto con una estructura en particular.
'data' puede ser un array de objetos.
***
***
***
***
***
***