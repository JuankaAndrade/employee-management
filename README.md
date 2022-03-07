# Desarrollador

Este proyecto fue desarrollado por Juan Andrade con front END Angular 8

# Arquitectura del Proyecto

Este proyecto es una aplicación angular con 

-------------------------------------------------------------------
Modulo    Componente Empleado
                        enlace de datos
        Componente    -------------------->  Componente
        Empleado Html <-------------------  TypeScript

 -------------------------------------------------------------------      
                |                               |
                |                               | Constructor
                |                               |
            Directivas                      HttpClient
            Angular                          Service
                                                |
                                                |
                                                |   HTTP GET
---------------------------------------------------------------------
                                                |
                                                |
                                            REST Controller
Aplicación Spring Boot
--------------------------------------------------------------------- 

# Componentes Agregados

Este proyecto tiene componentes del tipo 
    * Header
    * Footer
    * LogIn
    * LogOut
    * Empleado - AgregarEmpleado

Su version de [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Servidor de desarollo

Para correr el servidor usar el comando 'ng serve', el proyecto sirve sobre el siguiente link `http://localhost:4200/`

## Usuario de Autentificación

El usuario Administrador tiene estas credenciales
    user: admin
    password: abc123

El usuario básico tiene estas cedenciales
    user: user
    password: abc123

## Autentificación LOG IN

Existen modulos de autentificación simple por roles y cración de sesiones los modulos utilizados fueron
    *   AuthenticationService
    *   AuthGaurd

Que usando el rutamiento se guía la ruta adecuada del rol

