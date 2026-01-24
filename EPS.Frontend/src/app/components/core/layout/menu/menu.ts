import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  menuItems = ['Home', 'O que é', 'Encontre o seu', 'FAQ', 'Contato'];
}
