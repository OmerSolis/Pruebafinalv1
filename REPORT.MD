# REPORT.md

## Nombre del proyecto

**Pipeline de integración continua para API de gestión de usuarios**

## Repositorio

🔗 https://github.com/OmerSolis/Pruebafinalv1

---

## 🔧 Pasos realizados

### 1. Configuración inicial del repositorio

- Se creó un repositorio Git local.
- Se realizó un primer commit que incluye: `db.json`, `app.js`, `package.json`, y pruebas (`test/app.test.js`).
- Se creó un repositorio remoto en GitHub y se conectó correctamente: [Pruebafinalv1](https://github.com/OmerSolis/Pruebafinalv1).

---

### 2. Configuración básica de la API

- Se modificó `app.js` para leer directamente los datos desde `db.json`.
- Se implementaron los endpoints:
  - `GET /users` → Lista todos los usuarios.
  - `GET /users/:id` → Muestra un usuario por ID.
- Se verificó con navegador y `curl` que la API responde correctamente en `localhost:3000`.

---

### 3. Automatización básica con Jenkins

- Se creó un `Jenkinsfile` con las siguientes etapas:
  1. Clonar el repositorio desde GitHub.
  2. Instalar dependencias (`npm install`).
  3. Iniciar el servidor (`npm start`) en segundo plano.
  4. Esperar unos segundos y hacer una petición a `/users` usando `curl` para comprobar que la API esté en funcionamiento.
- El `Jenkinsfile` fue adaptado específicamente para funcionar en entorno **Windows**, usando `bat`, `start /B`, `ping` para delays, y `curl`.

---

### 4. Ejecución de pruebas automatizadas

- Se integró la etapa `npm test` al pipeline.
- Se configuró para que el pipeline **falle si alguna prueba no pasa**, cumpliendo con las buenas prácticas de CI.
- Se utilizaron `Jest` y `Supertest` para probar la API.

---

### 5. Reporte y retroalimentación

- Se agregó una etapa final al `Jenkinsfile` que:
  - Ejecuta `npm test` nuevamente y guarda la salida completa (stdout + stderr) en `test-report.txt`.
  - Usa `archiveArtifacts` para almacenar el archivo como artefacto del build.
- Se confirmó que el reporte es accesible desde Jenkins.

---

## 🧪 Resultado de pruebas

```bash
PASS  tests/app.test.js
✓ should return a list of users (XX ms)
✓ should return a single user (XX ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total