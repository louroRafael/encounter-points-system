import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  isMenuOpen = false;
  menuItems = ['Home', 'O que é', 'Encontre o seu', 'FAQ', 'Contato'];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
