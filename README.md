# Instalar dependecias
npm install

# Correr proyecto: npm run dev

# Crear .env
configurar variables de entorno para la conexion a la BD y la configuracion del puerto del Api

# Crear tablas en mysql DB database/migrations
## Comando para crear migraciones: 
npx sequelize db:migrate


# Crear modelos y migraciones
#comando para crear modelos y migraciones:
npx sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string




