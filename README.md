# Proyecto de Formulario con Firebase y React

Este proyecto es un formulario de registro que utiliza **Firebase Authentication** para registrar usuarios y **Simple React Validator** para validar los datos ingresados.

## Funcionalidad

1. **Formulario de Registro**:
   - Permite ingresar correo y contraseña.
   - Valida los campos usando reglas simples:
     - Correo: obligatorio y en formato válido.
     - Contraseña: mínimo 6 caracteres.

2. **Registro con Firebase**:
   - Usa `createUserWithEmailAndPassword` para registrar nuevos usuarios en Firebase.
   - Muestra mensajes de éxito o error según el resultado.

3. **Validación Dinámica**:
   - Muestra mensajes de error debajo de los campos si no cumplen las reglas.

## Tecnologías utilizadas

- **React**: Para la interfaz del formulario.
- **Simple React Validator**: Para validar los datos de entrada.
- **Firebase Authentication**: Para registrar usuarios.
- **Yarn**: Para gestionar dependencias.

## Instalación

1. Instala las dependencias con:
   ```bash
   yarn install
