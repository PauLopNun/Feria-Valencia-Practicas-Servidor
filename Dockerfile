FROM node:24-slim

# Instala netcat-openbsd para que wait-for.sh funcione
RUN apt-get update && apt-get install -y netcat-openbsd && apt-get clean

WORKDIR /app

COPY package*.json ./

# Instala dependencias necesarias (elimina mysql2, añade pg)
RUN npm install mjml pg express csv-parser nodemailer dotenv

COPY . .

EXPOSE 3000

# Arranca el servidor Node.js usando start.sh
CMD ["sh", "./start.sh"]
