import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ep-flag',
  imports: [],
  templateUrl: './ep-flag.html',
  styleUrl: './ep-flag.css',
})
export class EpFlag {
  @Input() color?: string = '#FFF';
}
