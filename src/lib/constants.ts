export interface VehicleCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  displayOrder: number;
}

export const vehicleCategories: VehicleCategory[] = [
  {
    id: '1',
    name: 'SUVs',
    slug: 'suvs',
    description: 'Véhicules utilitaires sport pour tous terrains',
    displayOrder: 1
  },
  {
    id: '2',
    name: 'Berlines',
    slug: 'berlines',
    description: 'Voitures élégantes pour le confort urbain',
    displayOrder: 2
  },
  {
    id: '3',
    name: 'Compactes',
    slug: 'compactes',
    description: 'Voitures économiques et pratiques',
    displayOrder: 3
  },
  {
    id: '4',
    name: 'Luxe',
    slug: 'luxe',
    description: 'Véhicules premium haut de gamme',
    displayOrder: 4
  },
  {
    id: '5',
    name: 'Utilitaires',
    slug: 'utilitaires',
    description: 'Véhicules pour le transport et le travail',
    displayOrder: 5
  }
];

export function getCategoryBySlug(slug: string): VehicleCategory | undefined {
  return vehicleCategories.find(category => category.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return vehicleCategories.map(category => category.slug);
}

// Brand colors
export const brandColors = {
  primary: '#0066FF',
  white: '#FFFFFF',
  black: '#000000',
  blue: {
    50: '#E6F0FF',
    100: '#CCE0FF',
    200: '#99C2FF',
    300: '#66A3FF',
    400: '#3385FF',
    500: '#0066FF',
    600: '#0052CC',
    700: '#003D99',
    800: '#002966',
    900: '#001433',
  }
};
