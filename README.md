##Proyecto integración Django con tecnología npm


## Configuracon sitio Mysite

#####1.- Instalar virtualenv y crear el entorno
Para poder integrar las distintas soluciones como ejemplo en este caso angular, devemos instalar
los siguientes requerimientos. Para los proyectos de angular-calculator y angular-coronavirus-cases

    npm install --save-dev webpack webpack-bundle-tracker
    npm i -D @angular-builders/custom-webpack


#####1.- Instalar virtualenv y crear el entorno django
    apt-get install python3-venv
    crear un entorno virtual ejemplo
    python3 -m venv env_angular_django

    activar el entorno virtual
    source ~/env_angular_django/bin/activate

2.- Instalar lor requerimientos
   
    cd mysite
    ~$ mysute pip install -r requirements.txt
    
    Comprobar el proyecto Django funiciona
    
    python manage.py runserver

    
    