import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from '../menu/menu';
import { EpFind } from '../../../features/ep-find/ep-find';
import { Faq } from '../../../features/faq/faq';

@Component({
  selector: 'app-shell',
  imports: [
    CommonModule,
    Menu,
    EpFind,
    Faq
  ],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class Shell implements OnInit {
  activeBg: string = 'futebol';

  epCategories = [
    { label: 'Futebol', key: 'futebol' },
    { label: 'Boardgame', key: 'boardgame' },
    { label: 'Escalada', key: 'escalada' },
    { label: 'Bike', key: 'bike' },
    { label: 'Skate', key: 'skate' },
    { label: 'E-Sports', key: 'esports'},
    { label: 'Videogame', key: 'videogame'},
    { label: 'Corrida', key: 'corrida'},
    { label: 'Trilha', key: 'trilha'}
  ];

  ngOnInit() {
    this.epCategories.forEach(category => {
      const img = new Image();
      img.src = `/assets/images/bg-${category.key}.jpg`;
    });
  }

  getBackground(): string {
    return `url(assets/images/bg-${this.activeBg}.jpg)`;
  }
}
