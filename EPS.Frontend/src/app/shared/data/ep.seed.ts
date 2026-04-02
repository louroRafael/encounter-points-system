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
    name: 'Futebol',
    categoryId: 1, // Esportes
    leader: 'João Silva',
    address: 'Quadra Central - Curitiba',
    imageName: 'bg-futebol',
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
    imageName: 'bg-volei',
    startAt: new Date('2026-04-11T20:00:00'),
    position: {
      top: 26,
      left: 34
    }
  },
  {
    id: 3,
    name: 'Catan',
    categoryId: 2, // Games
    leader: 'Gabriel Morais',
    address: 'Salão Festa - Ap Gabe',
    imageName: 'bg-boardgame',
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
    imageName: 'bg-futebol',
    startAt: new Date('2026-04-12T21:00:00'),
    position: {
      top: 58,
      left: 38
    }
  },
  {
    id: 5,
    name: 'FIFA 24',
    categoryId: 2, // Games
    leader: 'Rafael Costa',
    address: 'Arena Gamer Curitiba',
    imageName: 'bg-videogame',
    startAt: new Date('2026-04-13T19:30:00'),
    position: {
      top: 40,
      left: 52
    }
  },
  {
    id: 6,
    name: 'League of Legends',
    categoryId: 2, // Games
    leader: 'André Lima',
    address: 'LAN House XP',
    imageName: 'bg-esports',
    startAt: new Date('2026-04-14T20:00:00'),
    position: {
      top: 33,
      left: 60
    }
  },
  {
    id: 7,
    name: 'Xadrez',
    categoryId: 2, // Games
    leader: 'Fernanda Rocha',
    address: 'Biblioteca Pública',
    imageName: 'bg-boardgame',
    startAt: new Date('2026-04-15T17:00:00'),
    position: {
      top: 22,
      left: 44
    }
  },
  {
    id: 8,
    name: 'DIY Marcenaria',
    categoryId: 3, // Outros
    leader: 'Carlos Nogueira',
    address: 'Oficina Criativa',
    imageName: 'bg-leisure',
    startAt: new Date('2026-04-16T14:00:00'),
    position: {
      top: 60,
      left: 48
    }
  },
  {
    id: 9,
    name: 'Valorant',
    categoryId: 2, // Games
    leader: 'Bruno Alves',
    address: 'Gaming House Alpha',
    imageName: 'bg-esports',
    startAt: new Date('2026-04-16T22:00:00'),
    position: {
      top: 47,
      left: 67
    }
  },
  {
    id: 10,
    name: 'Cerâmica Fria',
    categoryId: 3, // Outros
    leader: 'Patrícia Gomes',
    address: 'Café Central',
    imageName: 'bg-leisure',
    startAt: new Date('2026-04-17T16:00:00'),
    position: {
      top: 72,
      left: 49
    }
  }
];

