import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-page',
  imports: [
    CommonModule,
    Menu
  ],
  templateUrl: './page.html',
  styleUrl: './page.css',
})
export class Page {
  activeBg: string = 'futebol';

  epCategories = [
    { label: 'Futebol', key: 'futebol' },
    { label: 'Boardgame', key: 'boardgame' },
    { label: 'Escalada', key: 'escalada' },
    { label: 'Bike', key: 'bike' },
    { label: 'Corrida', key: 'corrida'},
    { label: 'Trilha', key: 'trilha'}
  ];

  getBackground(): string {
    return `url(/assets/images/bg-${this.activeBg}.jpg)`;
  }
}
