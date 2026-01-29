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
  menuItems = [
    { label: 'Home', ref: 'home' },
    { label: 'O que é', ref: 'about' },
    { label: 'Encontre o seu', ref: 'ep-find' },
    { label: 'FAQ', ref: 'faq' },
    { label: 'Contato', ref: 'contact' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(ref: string) {
    const el = document.getElementById(ref);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
