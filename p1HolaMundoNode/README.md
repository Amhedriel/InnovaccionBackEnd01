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

    const port =

El puerto es donde se va a ejecutar, es el puerto. Así que vamos a usar el puerto 3000

```js
    const http = require('http');
    const host = '0.0.0.0';
    const port = 3000;
```

Y usaremos otra constante que se llame `server` y mandaremos a llamar a `http.createServer`

    const server = http.createServer()

Con esto le estamos pidiendo que cree un servidor.
Qué necesitamos de ese servidor? lo haremos con una "función anónima" como si fuese un argumento, es decir: se hace una auto referencia.
Pero qué necesitamos? toda petición de `http` necesita un `response` y un ``request`` esta última es la petición, y la respuesta del `response`.

    const server = http.createServer((req,res) => { });

Ahora esto se conoce también como "Función Flecha =>{}" y llenaremos la función con `res.statusCode = 200`, existen 5 **estatus code**
.

1. **estatus code** 200, quiere decir que todo está bien.

2. **estatus code** 300, que significa una redirección, tu petición se irá a otro lado, como hacen los ADDs.

3. **estatus code** 400, significa que el cliente está baboso, pero no el usuario, si no la página, pude que el Front End tenga algún error, tal vez el formulario no envió lo que necesitaba el Back End, por eso generalmente el Back End se realiza primero, para evitar los errores 400.

4. **estatus code** 500, si en la página en la que quieres ingresar aparece un error 500 no se puede hacer nada, este es error de Back End, o sea... estamos en problemas.

5. **estatus code** 404, es error de: *no existe* o error del usuario.

Entonces colocamos el **response** `res.statusCode = 200` de "respuesta" para que nos de que todo está bien, ahora `res.setHeader`. Toda información, cuando entras a una página web se genera una petición `get` es decir "dame" información como el de los verbos, si tu pides una imagen y en su `Status Code: 200 (from disk cache)` quiere decir que todo está perfecto. Los **"headers"** son toda la información que está oculta del usuario, cliente, sirve para mandar la información de ida y vuelta y con una herramienta llamada "user agent" puedes saber de que sistema operativo estas entrando, de qué navegador, etc. En todo caso el `header` tiene los metadatos, toda la información que se manda, continuando con nuestro código:

~~~js
const server = http.createServer((req,res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end("Hola Mundo uwu")
});
~~~

En el `header` estamos buscando el tipo de contenido `('Content-Type','text/plain')` de texto plano `Hola Mundo uwu`.

## Correr programa

Ahora para correr el programa lo primero que debemos encender el ``server`` con `server.listen();`, le debemos pasar el puerto `port` el `host` que es en donde va a vivir `server.listen(port, host, )` y le pasamos una función anónima que va a ser:

```js
server.listen(port, host, () => {
  
});
```

Entre las llaves colocamos `console.log("Server encendido en " + host + "/" + port)`:

```js
server.listen(port, host, () => {
  console.log("Server encendido en " + host + "/" + port)
});
```
Y listo, en el PShell colocamos `node .\index.js` para inicializar nuestro **"server"**.

```PWS
PS C:\Users\David\PracticasInnovaccionBackEnd\p1HolaMundoNode> node .\index.js      
Hello World
Server encendido en 0.0.0.0/3000
_
```

Con esto nos vamos a ``localhost:3000`` para ver nuestro resultado

![](/img/local.png)


En el navegador presionamos F12 > RED > CTRL + R y revisamos nuestro localhost  > ENCABEZADOS

![](/img/localhost.png)

podemos ver el ok en nuestro `Código de estado: 200`, también nuestra ``Dirección remota: 127.0.0.1:3000`` y si vamos a "> Respuesta" veremos nuestro `Hola Mundo uwu`.

Esa es un API que podemos consultar desde cualquier lugar.

Abramos nuestra extensión

![](/img/TalentAPITester.png)

Que es un testeador de API's, nosotros usaremos otros más adelante, pero este sirve de momento.

![](/img/APITester.png)

Aqui le mandamos (send) `get` y nos devuelve un `Hola Mundo uwu`, le podemos mandar un JSON, le podemos mandar lo que queramos.



