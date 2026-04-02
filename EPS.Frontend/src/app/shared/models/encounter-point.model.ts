import { EpCategory } from "./ep-category.model";

export interface Ep {
  id: number;
  name: string;
  categoryId: number;
  category?: EpCategory;
  leader: string;
  address: string;
  imageName: string;
  startAt: Date;
  position: {
    left: number;
    top: number;
  };
}