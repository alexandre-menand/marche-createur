import { IMarche } from '../interfaces/IMarche'

export const mockMarches: IMarche[] = [
  {
    id: '1',
    title: 'Marché de Noël',
    description:
      'Un marché traditionnel de Noël avec des produits artisanaux et une ambiance festive.',
    date: new Date('2025-12-01'),
    adresse: {
      id: '101',
      city: 'Paris',
      state: 'Île-de-France',
      codePostal: '75001',
      adresse1: 'Place Vendôme',
    },
    image: 'https://menand.fr/projets/laurine/laurine-accueil.png',
  },
  {
    id: '2',
    title: 'Marché Artisanal',
    description:
      'Des artisans locaux partagent leurs créations uniques et faites à la main.',
    date: new Date('2025-11-20'),
    adresse: {
      id: '102',
      city: 'Marseille',
      state: "Provence-Alpes-Côte d'Azur",
      codePostal: '13001',
      adresse1: 'Quai du Port',
    },
    image: 'https://menand.fr/projets/laurine/laurine-accueil.png',
  },
  {
    id: '3',
    title: 'Marché Bio',
    description:
      'Découvrez des produits locaux et biologiques pour une nourriture responsable.',
    date: new Date('2025-10-15'),
    adresse: {
      id: '103',
      city: 'Lyon',
      state: 'Auvergne-Rhône-Alpes',
      codePostal: '69002',
      adresse1: 'Rue Mercière',
      adresse2: 'Halle des Grains',
    },
    image: 'https://menand.fr/projets/laurine/laurine-accueil.png',
  },
  {
    id: '4',
    title: 'Marché Nocturne',
    description:
      'Un marché nocturne animé avec musique live et spécialités locales.',
    date: new Date('2025-09-10'),
    adresse: {
      id: '104',
      city: 'Bordeaux',
      state: 'Nouvelle-Aquitaine',
      codePostal: '33000',
      adresse1: 'Rue Sainte-Catherine',
    },
    image: 'https://menand.fr/projets/laurine/laurine-accueil.png',
  },
  {
    id: '5',
    title: 'Marché Fermier',
    description:
      'Les agriculteurs locaux présentent leurs meilleurs produits frais.',
    date: new Date('2025-08-25'),
    adresse: {
      id: '105',
      city: 'Strasbourg',
      state: 'Grand Est',
      codePostal: '67000',
      adresse1: 'Place Kléber',
    },
    image: 'https://menand.fr/projets/laurine/laurine-accueil.png',
  },
]
