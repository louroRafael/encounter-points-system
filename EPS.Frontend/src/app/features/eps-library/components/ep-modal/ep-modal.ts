import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ep } from '../../../../shared/models/encounter-point.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ep-modal',
  imports: [DatePipe],
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
