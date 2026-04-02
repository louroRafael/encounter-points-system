import { Component, Input } from '@angular/core';
import { Ep } from '../../../../shared/models/encounter-point.model';

@Component({
  selector: 'app-ep-card',
  imports: [],
  templateUrl: './ep-card.html',
  styleUrl: './ep-card.css',
})
export class EpCard {
  @Input() ep!: Ep;
}
