export interface Breed {
  id: string;
  name: string;
  origin: string;
  description: string;
  temperament: string;
  life_span: string;
  intelligence: number;
  affection_level: number;
  energy_level: number;
  child_friendly: number;
  dog_friendly: number;
  grooming: number;
  weight: {
    metric: string;
  };
}


export interface Cat {
  id: string;
  url: string;
  breeds: Breed[];
}


export interface ApiResponse<T> {
  success: boolean;
  count?: number;
  cats?: T;
  cat?: T;
  breeds?: T;
  message?: string;
}