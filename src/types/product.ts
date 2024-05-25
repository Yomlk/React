export interface ProductItem {
  id: number;
  name: string;
  imageUrl:string,
  price: number;
  discount?: {
    type: string;
    value: number;
  };
  rating:number;
  isFavorite:boolean;
}