import { Ep } from "../models/encounter-point.model";
import { EpCategory } from "../models/ep-category.model";

export const EP_CATEGORIES: EpCategory[] = [
    { id: 1, name: 'Esportes', hexColor: '#FF0000' },
    { id: 2, name: 'Boardgames', hexColor: '#005CFF' },
    { id: 3, name: 'Videogames', hexColor: '#00DD64' },
    { id: 4, name: 'E-Sports', hexColor: '#FC7E00' },
    { id: 5, name: 'Lazer', hexColor: '#8800FF' },
    { id: 6, name: 'DIY', hexColor: '#ED1E79' },
];

export const ENCOUNTER_POINTS: Ep[] = [
  {
    id: 1,
    name: 'Futebol',
    categoryId: 1, // Esportes
    leader: 'João Silva',
    address: 'Quadra Central - Curitiba',
    startAt: new Date('2026-04-11T10:30:00'),
    position: {
      top: 46,
      left: 28
    }
  },
  {
    id: 2,
    name: 'Volei',
    categoryId: 1, // Esportes
    leader: 'Maria Santos',
    address: 'Top Sports',
    startAt: new Date('2026-04-11T20:00:00'),
    position: {
      top: 26,
      left: 34
    }
  },
  {
    id: 3,
    name: 'Catan',
    categoryId: 2, // Boardgames
    leader: 'Gabriel Morais',
    address: 'Salão Festa - Ap Gabe',
    startAt: new Date('2026-04-11T18:00:00'),
    position: {
      top: 75,
      left: 35
    }
  },
  {
    id: 4,
    name: 'Futsal Noturno',
    categoryId: 1, // Esportes
    leader: 'Lucas Pereira',
    address: 'Ginásio Bairro Novo',
    startAt: new Date('2026-04-12T21:00:00'),
    position: {
      top: 58,
      left: 38
    }
  },
  {
    id: 5,
    name: 'FIFA 24',
    categoryId: 3, // Videogames
    leader: 'Rafael Costa',
    address: 'Arena Gamer Curitiba',
    startAt: new Date('2026-04-13T19:30:00'),
    position: {
      top: 40,
      left: 52
    }
  },
  {
    id: 6,
    name: 'League of Legends',
    categoryId: 4, // E-Sports
    leader: 'André Lima',
    address: 'LAN House XP',
    startAt: new Date('2026-04-14T20:00:00'),
    position: {
      top: 33,
      left: 60
    }
  },
  {
    id: 7,
    name: 'Xadrez',
    categoryId: 2, // Boardgames
    leader: 'Fernanda Rocha',
    address: 'Biblioteca Pública',
    startAt: new Date('2026-04-15T17:00:00'),
    position: {
      top: 22,
      left: 44
    }
  },
  {
    id: 8,
    name: 'DIY Marcenaria',
    categoryId: 6, // DIY
    leader: 'Carlos Nogueira',
    address: 'Oficina Criativa',
    startAt: new Date('2026-04-16T14:00:00'),
    position: {
      top: 60,
      left: 48
    }
  },
  {
    id: 9,
    name: 'Valorant',
    categoryId: 4, // E-Sports
    leader: 'Bruno Alves',
    address: 'Gaming House Alpha',
    startAt: new Date('2026-04-16T22:00:00'),
    position: {
      top: 47,
      left: 67
    }
  },
  {
    id: 10,
    name: 'Jogos de Mesa',
    categoryId: 5, // Lazer
    leader: 'Patrícia Gomes',
    address: 'Café Central',
    startAt: new Date('2026-04-17T16:00:00'),
    position: {
      top: 72,
      left: 49
    }
  }
];

