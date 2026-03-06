'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cat } from '@/types/cat';
import { getCats, getCatsByBreed } from '@/services/catService';
import CatDetail from '@/components/CatDetail';
import CatGrid from '@/components/catgrid';
import SearchBar from '@/components/SearchBar';
import BreedList from '@/components/breedList';
import LoadingSkeleton from '@/components/loadingSkeleton';
import ErrorMessage from '@/components/ErrorMessage';

export default function CatsPage() {
  const [cats, setCats]               = useState<Cat[]>([]);
  const [selected, setSelected]       = useState<Cat | null>(null);
  const [activeBreed, setActiveBreed] = useState<string | null>(null);
  const [search, setSearch]           = useState('');
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState<string | null>(null);

  const fetchCats = async (breedId?: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = breedId ? await getCatsByBreed(breedId) : await getCats(20);
      setCats(data);
      setSelected(data[0] ?? null);
    } catch {
      setError('No se pudieron cargar los gatos.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchCats(); }, []);

  const handleBreed = (id: string) => {
    if (activeBreed === id) {
      setActiveBreed(null);
      fetchCats();
    } else {
      setActiveBreed(id);
      fetchCats(id);
    }
  };

  const filtered = cats.filter((c) =>
    search === '' || c.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: '#B59B84' }}
    >
      <div
        className="relative flex overflow-hidden shadow-2xl w-screen h-screen"
        style={{ border: '14px solid #B59B84' }}
      >



        <CatDetail cat={selected} />

        <div className="relative flex flex-col w-[60%] bg-cover bg-center overflow-hidden">
          <div className="absolute inset-0 bg-[#E7E7E7]/80" />

          <div className="relative z-10 flex flex-col h-full p-6 gap-4 overflow-hidden">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="px-4 py-1 rounded-full text-sm font-medium text-white bg-[#BFA080] transition-opacity hover:opacity-80"
              >
                Inicio
              </Link>
            </div>
            <SearchBar value={search} onChange={setSearch} />

            <BreedList
              activeBreed={activeBreed}
              onSelect={handleBreed}
            />

            <div className="overflow-y-auto flex-1 pr-1">
              {loading && <LoadingSkeleton />}
              {error && <ErrorMessage message={error} />}
              {!loading && !error && (
                <CatGrid
                  cats={filtered}
                  selectedId={selected?.id ?? null}
                  onSelect={setSelected}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}