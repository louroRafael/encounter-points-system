import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-card',
  imports: [],
  templateUrl: './faq-card.html',
  styleUrl: './faq-card.css',
})
export class FaqCard {
  @Input() number!: number;
  @Input() question!: string;
  @Input() answer!: string;

  isCardOpen = false;

  toggle() {
    this.isCardOpen = !this.isCardOpen;
  }

  formatNumber(n: number): string {
    return n.toString().padStart(2, '0');
  }
}
