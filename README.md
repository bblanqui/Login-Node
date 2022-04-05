# Instalar dependecias
npm install

# Correr proyecto: npm run dev

# Crear .env
configure the environment variables file for the operation of the API and the connection to the database


# Crear tablas en mysql DB database/migrations
## Comando para crear migraciones: 
npx sequelize db:migrate


# Crear modelos y migraciones
#comando para crear modelos y migraciones:
npx sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string




