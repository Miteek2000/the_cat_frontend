'use client';

interface Props {
  activeBreed: string | null;
  onSelect: (id: string) => void;
}

const BREEDS = [
  { label: 'Bengal',            id: 'beng' },
  { label: 'Persian',           id: 'pers' },
  { label: 'Siamese',           id: 'siam' },
  { label: 'Maine Coon',        id: 'mcoo' },
  { label: 'Ragdoll',           id: 'ragd' },
  { label: 'British Shorthair', id: 'bsho' },
];

export default function BreedList({ activeBreed, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {BREEDS.map((b) => (
        <button
          key={b.id}
          onClick={() => onSelect(b.id)}
          className={`px-4 py-1 rounded-full text-sm font-medium transition-opacity hover:opacity-80 ${
            activeBreed === b.id
              ? 'bg-[#5A6543] text-white'
              : 'bg-[#BFA080] text-white'
          }`}
        >
          {b.label}
        </button>
      ))}
    </div>
  );
}
