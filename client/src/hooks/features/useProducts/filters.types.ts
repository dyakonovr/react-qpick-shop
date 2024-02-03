export type IProductFitlers = {
  categories?: string[];
  price?: IMinMaxRange;
  rating?: IMinMaxRange;
};

export type IMinMaxRange = {
  min?: number;
  max?: number;
};