# Usa una imagen base de Node.js
FROM node:18
# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app
# Copia los archivos del proyecto al contenedor
COPY package*.json ./
# Instala las dependencias del backend
RUN npm install
# Verificar que Express esté instalado correctamente
RUN npm list express
# Copia el resto de los archivos del proyecto
COPY . .
# Comando para ejecutar la API
CMD [ "npm", "run", "start" ]
