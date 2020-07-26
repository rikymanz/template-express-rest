Necessario:
- installazione node
- installazione mongodb
- creazione directory progetto
> npm init
> npm i express mongoose
> npm i --save-dev dotenv nodemon
- Modificare package.json con 
    "scripts": {
        "devStart": "nodemon server.js"
        }
- creare .env file con 
    DATABASE_URL=mongodb://localhost/subscribers
- Avviare il server con il comando:
> npm run devStart
- Installare REST client su Visual studio
- creare file route.rest con REST da provare