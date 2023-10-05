# grupo-SopaipillasCibern-ticas-frontend

| Nombre                     | Email                  | Github                                                   |
| -------------------------- | ---------------------- | -------------------------------------------------------- |
| Dafne Arriagada            | dafne.arriagada@uc.cl  | [@Dafnemami](https://github.com/Dafnemami)               |
| Alberto Agostini        | alberto.agostini@uc.cl  | [@albertoar1](https://github.com/albertoar1)          |

EL REPOSITORIO DE BACK SE ENCUENTRA [ACÁ](https://github.com/IIC2513/grupo-SopaipillasCiberneticas-backend)

Para este front end se utilizó React.js. Se crearon 3 componentes principales: Landing Page, Games y Game. 

- Landing Page: es la página de inicio, donde se puede iniciar sesión o registrarse.
- Games: Páginas dodne se puede elegir si se quiere buscar una partida o crear una nueva.
- Game: es la página donde se desarrolla alguna partida.

Usamos JWT para la autenticación de usuarios.

## Instalación

Clona el repo en tu local y ubicado en la raíz de la carpeta del proyecto ejecuta:

```bash
yarn install
```
Lo cual instalará todas las dependencias necesarias para correr el proyecto.

- En el archivo .env deberás crear las siguientes variables de entorno:

```bash
VITE_BACKEND_URL="http://localhost:3002"
JWT_SECRET="secret"

```

### Correr el proyecto

Hay dos opciones:

``` bash
yarn start
```

``` bash
yarn dev
```

## Documentación

### Deploy

El **front** se encuentra deployado en [Render](https://come-6-hi.onrender.com)
El **back** se encuentra deployado en [Render](https://sopaipillas-ciberneticas-toma-6-back.onrender.com/)


### Ejemplos de endpoints

Acá se ejemplifican los endpoints que se pueden utilizar para probar el front.

Para iniciar sesión basta con hacer click en el botón de iniciar sesión en la Landing Page.

El usuario y contraseña para iniciar sesión son respectivamente:

- Alberto, password
- Dafne, password 

Luego en la navbar aparece un botón `Juega!`, distinguible por su color, al que debes presionar. Dentro de esta vista puedes elegit si quieres buscar una partida y unirte a ella o crear una nueva.


#### Al clickear `Buscar Partida`, los endpoints asociados serán los siguientes:

##### games

Muestra todas las partidas disponibles, es decir, que no están activas (no han comenzado pues están esperando jugadores) y que no han sido finalizadas.

Luego, se puede clickear en `Unirse` para elegir alguna partida en particular.

##### game/:id

Muestra la partida elegida en el endpoint anterior. Para darle inicio, es necesario clickear en `Comenzar`.




#### Al clickear `Crear Partida`, los endpoints asociados serán los siguientes:  

##### createGame


##### 


Para cerrar es importante comentar que estas requests/responses se manejaron desde front con la ayuda de la librería `axios` y el hook `useEffect`. Así también, se utlizó el hook `useState`. Por último, también se utlizó fetch para algunas requests.
