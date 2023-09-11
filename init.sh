#!/bin/bash

# Ir al directorio del backend
cd backend/ensolvers-back

# Instalar las dependencias del backend
echo "Instalando dependencias del backend..."
npm install
echo "Instalando dependencias del backend..."
npm install uuid
echo "Instalando dependencias del backend..."
npm install typeorm
echo "Instalando dependencias del backend..."
npm install mysql2
echo "Instalando dependencias del backend..."
npm install class-validator
echo "Instalando dependencias del backend..."
npm install class-transformer
# Iniciar el servidor backend (NestJS)
echo "Iniciando el servidor backend..."
npm start &

# Esperar un momento para que el servidor backend se inicie
sleep 5

# Ir al directorio del frontend
cd ../../frontend/ensolvers-app

# Instalar las dependencias del frontend
echo "Instalando dependencias del frontend..."
npm install

# Iniciar la aplicación frontend (React)
echo "Iniciando la aplicación frontend..."
npm start
