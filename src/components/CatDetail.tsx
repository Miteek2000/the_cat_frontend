'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Cat, Breed } from '@/types/cat';
import { getCatById } from '@/services/catService';

interface Props {
  cat: Cat | null;
}

function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2 text-xs text-[#5A4A3A]">
      <span className="w-24 shrink-0">{label}</span>
      <div className="flex-1 bg-[#C9B8A8] rounded-full h-1.5">
        <div
          className="bg-[#7A6550] h-1.5 rounded-full transition-all"
          style={{ width: `${(value / 5) * 100}%` }}
        />
      </div>
      <span className="w-4 text-right">{value}</span>
    </div>
  );
}

export default function CatDetail({ cat }: Props) {
  const [breed, setBreed] = useState<Breed | null>(null);
  const [loadingBreed, setLoadingBreed] = useState(false);

  useEffect(() => {
    if (!cat) { setBreed(null); return; }

    if (cat.breeds && cat.breeds.length > 0) {
      setBreed(cat.breeds[0]);
      return;
    }

    setLoadingBreed(true);
    getCatById(cat.id)
      .then((data) => setBreed(data.breeds?.[0] ?? null))
      .catch(() => setBreed(null))
      .finally(() => setLoadingBreed(false));
  }, [cat?.id]);

  return (
    <div
      className="relative flex flex-col items-center justify-start w-[40%] bg-[#E7E7E7] z-10 overflow-y-auto py-8 gap-5"
      style={{ boxShadow: '10px 0 40px rgba(0,0,0,0.45)' }}
    >
      {cat ? (
        <>
          <div
            className="relative bg-[#D9CFC3] shadow-2xl shrink-0"
            style={{
              width: '70%',
              aspectRatio: '1 / 1',
              padding: '14px',
            }}><Image
              src={cat.url}
              alt="Gato seleccionado"
              fill
              className="object-cover"
              style={{ padding: '14px' }}
              priority/>
          </div>

          {loadingBreed ? (
            <p className="text-xs italic text-[#9A7A5A] w-[80%] text-center animate-pulse">
              Cargando información...
            </p>
          ) : breed ? (
            <div className="w-[80%] flex flex-col gap-3">
              <div>
                <h2 className="text-lg font-bold text-[#3D2E1E]">{breed.name}</h2>
                <p className="text-xs text-[#7A6550]">{breed.origin} · {breed.life_span} años</p>
              </div>

              <p className="text-xs text-[#5A4A3A] leading-relaxed">{breed.description}</p>

              <div className="flex flex-wrap gap-1">
                {breed.temperament.split(', ').map((t) => (
                  <span
                    key={t}
                    className="text-[10px] bg-[#C9B8A8] text-[#3D2E1E] px-2 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-1.5 pt-1">
                <StatBar label="Inteligencia"  value={breed.intelligence} />
                <StatBar label="Cariño"        value={breed.affection_level} />
                <StatBar label="Energía"       value={breed.energy_level} />
                <StatBar label="Con niños"     value={breed.child_friendly} />
                <StatBar label="Con perros"    value={breed.dog_friendly} />
                <StatBar label="Aseo"          value={breed.grooming} />
              </div>

              <p className="text-xs text-[#9A7A5A]">
                Peso: <span className="font-medium text-[#5A4A3A]">{breed.weight.metric} kg</span>
              </p>
            </div>
          ) : (
            <p className="text-xs italic text-[#9A7A5A] w-[80%] text-center">
              Sin información de raza para este gato
            </p>
          )}
        </>
      ) : (
        <p className="text-sm italic text-[#9A7A5A] mt-auto mb-auto">Selecciona un gato</p>
      )}
    </div>
  );
}