# libros-api

Backend del Catálogo de Libros. Express + TypeScript, datos en `data/libros.json`.

## Desarrollo (Consola 1)

```bash
npm install
npm run dev        # http://localhost:3000/api/libros
```

## Producción (VM lab-back)

```bash
npm ci && npm run build
sudo npm install -g pm2
PORT=3000 CORS_ORIGIN=http://<IP_FRONT> pm2 start dist/index.js --name libros-api
pm2 save
```

## Endpoints

| Método | Ruta | Respuesta |
| --- | --- | --- |
| GET | /api/health | 200 `{ "status": "ok" }` |
| GET | /api/libros | 200 arreglo de libros |
| GET | /api/libros/:id | 200 libro, o 404 |
| POST | /api/libros | 201 libro creado (body: titulo, autor, anio), o 400 |
