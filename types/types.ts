export type Category =
  | "T-shirts"
  | "Jeans"
  | "Shirts"
  | "Jackets"
  | "Accessories";

export const categories: Category[] = [
  "T-shirts",
  "Jeans",
  "Shirts",
  "Jackets",
  "Accessories",
];

export type FilterPayload = {
  categories: Category[];
  size: string[];
  price: {
    min: number;
    max: number;
  };
  colors: string[];
};
