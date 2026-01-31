import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flag-frame',
  imports: [],
  templateUrl: './flag-frame.html',
  styleUrl: './flag-frame.css',
})
export class FlagFrame {
  @Input() imageName?: string = 'assets/images/bg-futebol.jpg';

  get imageUrl(): string {
    return `assets/images/${this.imageName}.jpg`;
  }
}
