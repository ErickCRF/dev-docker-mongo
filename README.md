<!--
platform: Docker
language: Nodejs
author: Erick F. Chavez Reyes
-->
### Prerequisites

```
Node v16
npm
Docker
Mongoose
```

### Deployment

Esta Api trabaja con docker y mongoose, para ejecutar necesita aplicar lo siguientes pasos:

```
git clone https://github.com/ErickCRF/dev-docker-mongo.git
```

```
cd dev-docker-mongo
```

```
npm install
```

```
crear un archivo .env con tus credenciales de mongoose
PORT=tu puerto
MONGO_CONNECTION_STRING = tu conexxion

https://account.mongodb.com/account/login

una vez configurado nuestro mongo, ya podemos arrancar de manera local:

npm run dev
```

```
Descargar y Configuar Docker

https://docs.docker.com/desktop/install/mac-install/

```

```
Utilizamos docker compose:

cd dev-docker-mongo
docker-compose build
docker-compose up

segun el docker-compose.yml nuestro nuestra API se esta ejecutando en el Puerto 5000.
```


### Invocation

Después de una implementación exitosa, podemos llamar a los siguientes EndPoints:

  EndPoint = localhost:5000

  /api/tasks   --> GET
  /api/task   --> POST

