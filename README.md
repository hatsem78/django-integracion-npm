# Configuracon sitio Mysite

1.- Instalar virtualenv y crear el entorno
    npm install --save-dev webpack webpack-bundle-tracker
    npm i -D @angular-builders/custom-webpack
    apt-get install python3-venv
    crear un entorno virtual ejemplo
    python3 -m venv env_angular_django

    activar el entorno virtual
    source ~/env_tva/bin/activate

2.- Instalar Django 2.1.3 o superior
   
    pip install django==2.1.3
    
    crear proyecto Mysite
    django-admin startproject mysite
    
    Comprobar el proyecto Django funiciona
    python manage.py runserver

3.- Crear app encuesta

    python manage.py startapp app_angular
    
    