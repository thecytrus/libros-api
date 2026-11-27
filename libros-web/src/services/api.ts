export interface Libro {
  id: number;
  titulo: string;
  autor: string;
  anio: number;
}

// Única fuente de la URL del backend: viene de .env.development / .env.production
const API = import.meta.env.VITE_API_URL;

export const getLibros = async (): Promise<Libro[]> => {
  const r = await fetch(`${API}/libros`);
  if (!r.ok) throw new Error(`Error ${r.status}`);
  return r.json();
};

export const getLibro = async (id: number): Promise<Libro | null> => {
  const r = await fetch(`${API}/libros/${id}`);
  return r.ok ? r.json() : null;
};

export const crearLibro = async (libro: Omit<Libro, 'id'>): Promise<Libro> => {
  const r = await fetch(`${API}/libros`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(libro),
  });
  if (!r.ok) throw new Error(`Error ${r.status}`);
  return r.json();
};
