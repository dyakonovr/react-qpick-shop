export interface IProductFitlers {
  categories?: number[];
  price?: IMinMaxRange;
  rating?: IMinMaxRange;
};

export interface IMinMaxRange {
  min?: number;
  max?: number;
};