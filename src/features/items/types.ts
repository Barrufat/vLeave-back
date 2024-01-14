export interface ItemStructure {
  name: string;
  collection: string;
  type: string;
  description: string;
  mainImage: string;
  detailImages: string[];
  model3D: string;
  price: number;
  stock: number;
  isAvaliable: boolean;
}

export interface ItemStructureWithId extends ItemStructure {
  id: string;
}
