import express from 'express';
import cors from 'cors';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  anio: number;
}

const PORT = Number(process.env.PORT) || 3000;
const ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:5173';
const FILE = path.join(__dirname, '..', 'data', 'libros.json');

const leer = (): Libro[] => JSON.parse(readFileSync(FILE, 'utf-8'));
const guardar = (libros: Libro[]) => writeFileSync(FILE, JSON.stringify(libros, null, 2));

const app = express();
app.use(cors({ origin: ORIGIN }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/libros', (_req, res) => {
  res.json(leer());
});

app.get('/api/libros/:id', (req, res) => {
  const libro = leer().find(l => l.id === Number(req.params.id));
  if (!libro) {
    res.status(404).json({ error: 'No encontrado' });
    return;
  }
  res.json(libro);
});

app.post('/api/libros', (req, res) => {
  const { titulo, autor, anio } = req.body ?? {};
  if (!titulo || !autor || !anio) {
    res.status(400).json({ error: 'Campos requeridos: titulo, autor, anio' });
    return;
  }
  const libros = leer();
  const nuevo: Libro = {
    id: Math.max(0, ...libros.map(l => l.id)) + 1,
    titulo: String(titulo),
    autor: String(autor),
    anio: Number(anio),
  };
  guardar([...libros, nuevo]);
  res.status(201).json(nuevo);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API en puerto ${PORT} (CORS: ${ORIGIN})`);
});
