'use client';

import { Cat } from '@/types/cat';
import CatCard from './catCard';

interface Props {
  cats: Cat[];
  selectedId: string | null;
  onSelect: (cat: Cat) => void;
}

export default function CatGrid({ cats, selectedId, onSelect }: Props) {
  return (
    <div className="grid grid-cols-3 gap-2 p-2">
      {cats.map((cat) => (
        <CatCard
          key={cat.id}
          cat={cat}
          isSelected={cat.id === selectedId}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
