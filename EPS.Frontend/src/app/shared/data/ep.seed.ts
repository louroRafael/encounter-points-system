import { Ep } from "../models/encounter-point.model";
import { EpCategory } from "../models/ep-category.model";

export const EP_CATEGORIES: EpCategory[] = [
    { id: 1, name: 'Esportes', hexColor: '#FF0000', imageName: 'bg-futebol' },
    { id: 2, name: 'Games', hexColor: '#005CFF', imageName: 'bg-boardgame' },
    { id: 3, name: 'Outros', hexColor: '#00DD64', imageName: 'bg-videogame' }
];

export const ENCOUNTER_POINTS: Ep[] = [
  {
    id: 1,
    name: 'DIY',
    categoryId: 3, // Outros
    leader: 'Julia Ortencio',
    address: 'Uberaba',
    imageName: 'bg-diy',
    startAt: new Date('2026-04-25T14:30:00'),
    position: {
      top: 38,
      left: 79
    }
  },
  {
    id: 2,
    name: 'Airsoft',
    categoryId: 1, // Esportes
    leader: 'Bruno Guimarães',
    address: 'Jardim das Américas',
    imageName: 'bg-airsoft',
    startAt: new Date('2026-04-25T18:30:00'),
    position: {
      top: 30,
      left: 75
    }
  },
  {
    id: 3,
    name: 'Gastronomia',
    categoryId: 3, // Outros
    leader: "Luymara Sant'ana",
    address: 'Batel',
    imageName: 'bg-gastronomia',
    startAt: new Date('2026-04-25T10:00:00'),
    position: {
      top: 26,
      left: 47
    }
  },
  {
    id: 4,
    name: 'Volei Quadra',
    categoryId: 1, // Esportes
    leader: 'Pedro Vilas Boas',
    address: 'Top Sports - Portão',
    imageName: 'bg-volei',
    startAt: new Date('2026-04-25T11:00:00'),
    position: {
      top: 42,
      left: 44
    }
  },
  {
    id: 5,
    name: 'Volei Areia',
    categoryId: 1, // Esportes
    leader: 'Pedro Vilas Boas',
    address: 'FTM - Novo Mundo',
    imageName: 'bg-volei',
    startAt: new Date('2026-04-15T14:00:00'),
    position: {
      top: 48,
      left: 42
    }
  },
  {
    id: 6,
    name: 'Boardgames',
    categoryId: 2, // Games
    leader: 'Gabriel Morais',
    address: 'Espaço Vox - Novo Mundo',
    imageName: 'bg-boardgame',
    startAt: new Date('2026-04-25T16:00:00'),
    position: {
      top: 50,
      left: 44
    }
  },
  {
    id: 7,
    name: 'Futebol Sintético',
    categoryId: 1, // Esportes
    leader: 'Jhonata Santos',
    address: 'Tá Voando Academy - Vila Izabel',
    imageName: 'bg-futebol',
    startAt: new Date('2026-04-25T16:00:00'),
    position: {
      top: 38,
      left: 44
    }
  },
  {
    id: 8,
    name: 'Funcional',
    categoryId: 1, // Esportes
    leader: 'Thalissa Gorkawczuk',
    address: 'Parque Barigui',
    imageName: 'bg-funcional',
    startAt: new Date('2026-04-25T09:30:00'),
    position: {
      top: 23,
      left: 42
    }
  },
  {
    id: 9,
    name: 'Montanha - Anhangava',
    categoryId: 3, // Outros
    leader: 'Leonardo e Yasmin',
    address: 'Piraquara',
    imageName: 'bg-trilha',
    startAt: new Date('2026-04-25T04:00:00'),
    position: {
      top: 36,
      left: 96
    }
  },
  {
    id: 10,
    name: 'Montanha - Canal',
    categoryId: 3, // Outros
    leader: 'Larson e Pedro',
    address: 'Piraquara',
    imageName: 'bg-trilha',
    startAt: new Date('2026-04-25T04:30:00'),
    position: {
      top: 38,
      left: 95
    }
  },
  {
    id: 11,
    name: 'Montanha - Pão de Loth',
    categoryId: 3, // Outros
    leader: 'Gustavo e Nacélio',
    address: 'Quatro Barras',
    imageName: 'bg-trilha',
    startAt: new Date('2026-04-25T07:30:00'),
    position: {
      top: 8,
      left: 90
    }
  },
  {
    id: 12,
    name: 'Café',
    categoryId: 3, // Outros
    leader: 'Felipe Braga',
    address: 'Campo Comprido',
    imageName: 'bg-cafe',
    startAt: new Date('2026-04-25T09:00:00'),
    position: {
      top: 35,
      left: 27
    }
  },
  {
    id: 13,
    name: 'Corrida',
    categoryId: 1, // Esportes
    leader: 'Abraão',
    address: 'Parque Barigui',
    imageName: 'bg-corrida',
    startAt: new Date('2026-04-25T16:30:00'),
    position: {
      top: 24,
      left: 44
    }
  },
  {
    id: 14,
    name: 'Skate',
    categoryId: 1, // Esportes
    leader: 'Vinicius Condo',
    address: 'Pista Wenceslau',
    imageName: 'bg-skate',
    startAt: new Date('2026-04-25T14:30:00'),
    position: {
      top: 42,
      left: 50
    }
  },
  {
    id: 15,
    name: 'DIY',
    categoryId: 3, // Outros
    leader: 'Gabi Gambeta e Dana',
    address: 'Parque Barigui',
    imageName: 'bg-diy',
    startAt: new Date('2026-04-25T09:00:00'),
    position: {
      top: 25,
      left: 43
    }
  },
  {
    id: 16,
    name: 'Futebol Sintético',
    categoryId: 1, // Esportes
    leader: 'Ramon Barros',
    address: 'Alcance Santa Felicidade',
    imageName: 'bg-futebol',
    startAt: new Date('2026-04-25T15:00:00'),
    position: {
      top: 17,
      left: 26
    }
  },
  {
    id: 17,
    name: 'Basquete',
    categoryId: 1, // Esportes
    leader: 'Rafhael Barbosa',
    address: 'Praça Abibe Isfer',
    imageName: 'bg-basquete',
    startAt: new Date('2026-04-25T09:00:00'),
    position: {
      top: 32,
      left: 49
    }
  },
];

