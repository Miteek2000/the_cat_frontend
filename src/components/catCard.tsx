'use client';

import Image from 'next/image';
import { Cat } from '@/types/cat';

interface Props {
  cat: Cat;
  isSelected: boolean;
  onSelect: (cat: Cat) => void;
}

export default function CatCard({ cat, isSelected, onSelect }: Props) {
  return (
    <div
      onClick={() => onSelect(cat)}
      className={`rounded-2xl cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg p-5 bg-[#B59B84] ${
        isSelected ? 'ring-4 ring-[#91735B]' : ''
      }`}
    >
      <div className="relative aspect-square rounded-xl overflow-hidden">
        <Image
          src={cat.url}
          alt="Gato"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
