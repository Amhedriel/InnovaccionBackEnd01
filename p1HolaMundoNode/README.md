# Primer proyecto Hola Mundo

Comenzaremos inicializando un proyecto **"Node.js"** `npm init`

~~~PS
PS C:\Users\David\PracticasInnovaccionBackEnd\p1HolaMundoNode> npm init 
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (p1holamundonode)
~~~

Comencemos la configuración con el nombre del proyecto, o nombre del paquete sin mayúsculas.

    package name: (p1holamundonode) holamundo

Luego nos pedirá el número de version que tenemos realizado.

    version: (1.0.0) 0.0.1

Descripción del proyecto.

    description: El primer proyecto con Node.js "Hola mundo"

En ``entry point:`` por default está `(index.ls)`, es decir el archivo que va a buscar para ejecutarse primero, podemos dejar eso o colocar el que queramos, como `app.js`, pero es recomendable por convención dejar `(index.ls)`.

    entry point (index.ls)

`test command:` este va a ser la linea de comandos o el archivo de JavaScript que se va a ejecutar para nuestros tests unitarios.

    test command:

El repositorio de git

    git repository: https://github.com/Amhedriel/PracticasInnovaccionBackEnd/p1HolaMundoNode.git

`keywords` para que se lo pueda buscar en el ``npm`` si lo queremos subir.

    keywords:

Autor.

    author: davidamhedbeltran

Tipo de Licencia

    license: (ISC)

Entonces nos dará un resumen:

~~~node
About to write to C:\Users\David\PracticasInnovaccionBackEnd\p1HolaMundoNode\package.json:

{
  "name": "holamundo",
  "version": "0.0.1",
  "description": "El primer proyecto con Node.js \"Hola mundo\"",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/Amhedriel/PracticasInnovaccionBackEnd/p1HolaMundoNode.git" 
  },
  "author": "davidamhedbeltran",
  "license": "ISC"
}


Is this OK? (yes)
~~~

Si está todo bien aceptamos, en caso contrario con `not` para cancelar el proceso.

Entonces nos crea un archivo [`package.json`](/p1HolaMundoNode/package.json) en nuestro proyecto.

---

## **``json``**

El `package.json` en un proyecto de "Node.JS" es el que tienen toda la información de dependencias de nuestro proyecto para que funcione.

Como nosotros dijimos el main es un index.js `"main": "index.js",` es decir que con este trabajaremos vamos a crear un archivo llamado `index.js`, para hacer el Hello World:

    console.log('hello World');

Y para que corra el programa escribimos:

~~~ps
PS C:\Users\David\PracticasInnovaccionBackEnd\p1HolaMundoNode> node .\index.js
Hello World
PS C:\Users\David\PracticasInnovaccionBackEnd\p1HolaMundoNode> 
~~~

En el Power Shell del proyecto, entonces veremos el resultado: `Hello World`.

---

Intentemos ahora un `Hello World` en un servidor, el primer API de un `Hello World`; tratemos de usar `const` el mayor número de veces posibles, porque ahorra más en recursos, tanto con memoria como en tiempo, tiene mejor performance:

    const http = 

`http` es el nombre de la constante que nosotros le quisimos colocar, porque mandaremos llamar al módulo de Node que se llama `require`, con el `require` vamos a llamar al módulo de Node:

    const http = require('http');

Esto es para gestionar peticiones `http`, recordemos que todo el internet se basa en peticiones `http`.

Agreguemos más `const`, debido a que no van a cambiar en todo el programa, crearemos:

    const host =

Sin embargo mas adelante conoceremos una manera de esconder toda esta información, pero cuando subamos a "Azure" para  hacer variables de entorno, entonces mi ``host`` va a ser:

    const host = '0.0.0.0';

Crearemos otra constante que se llame:

    const host = '0.0.0.0';

El puerto es donde se va a ejecutar, es el puerto. 1.51.31