# libros-web

Frontend del Catálogo de Libros. Vue 3 + Vite + TypeScript + Vue Router.

| Ruta | Vista | Endpoint |
| --- | --- | --- |
| / | ListaView | GET /api/libros |
| /libros/:id | DetalleView | GET /api/libros/:id |
| /nuevo | NuevoView | POST /api/libros |

## Desarrollo (Consola 2)

Con el backend corriendo en el puerto 3000:

```bash
npm install
npm run dev        # http://localhost:5173
```

La URL de la API se lee de `VITE_API_URL` (`.env.development`).

## Producción (VM lab-front)

```bash
echo "VITE_API_URL=http://<IP_BACK>:3000/api" > .env.production
npm ci && npm run build
sudo mkdir -p /var/www/libros && sudo cp -r dist/* /var/www/libros/
```

Configurar Nginx (`/etc/nginx/sites-available/default`):

```
server {
  listen 80;
  root /var/www/libros;
  index index.html;
  location / { try_files $uri $uri/ /index.html; }
}
```

Luego `sudo nginx -t && sudo systemctl restart nginx`.
