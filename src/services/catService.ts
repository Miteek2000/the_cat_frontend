import { Cat, Breed, ApiResponse } from "@/types/cat";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;


const headers = {
  "x-secret-key": API_KEY ?? "",
};


export async function getCats(limit = 12): Promise<Cat[]> {
  const res = await fetch(
    `${API_URL}/api/cats?limit=${limit}`,
    { headers }
  );
  if (!res.ok) throw new Error("Error al obtener gatos");
  const data: ApiResponse<Cat[]> = await res.json();
  return data.cats ?? [];
}


export async function getCatById(id: string): Promise<Cat> {
  const res = await fetch(
    `${API_URL}/api/cats/${id}`,
    { headers }
  );
  if (!res.ok) throw new Error(`Gato con ID ${id} no encontrado`);
  const data: ApiResponse<Cat> = await res.json();
  return data.cat!;
}


export async function getBreeds(): Promise<Breed[]> {
  const res = await fetch(
    `${API_URL}/api/cats/breeds`,
    { headers }
  );
  if (!res.ok) throw new Error("Error al obtener razas");
  const data: ApiResponse<Breed[]> = await res.json();
  return data.breeds ?? [];
}


export async function getCatsByBreed(
  breedId: string,
  limit = 12
): Promise<Cat[]> {
  const res = await fetch(
    `${API_URL}/api/cats/breeds/${breedId}?limit=${limit}`,
    { headers }
  );
  if (!res.ok) throw new Error(`Error al obtener gatos de raza ${breedId}`);
  const data: ApiResponse<Cat[]> = await res.json();
  return data.cats ?? [];
}