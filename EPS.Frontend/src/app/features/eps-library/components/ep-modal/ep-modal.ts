import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ep } from '../../../../shared/models/encounter-point.model';

@Component({
  selector: 'app-ep-modal',
  imports: [],
  templateUrl: './ep-modal.html',
  styleUrl: './ep-modal.css',
})
export class EpModal {
  @Input() ep!: Ep;
  @Output() closeEvent = new EventEmitter<void>();

  close() {
    this.closeEvent.emit();
  }
}
