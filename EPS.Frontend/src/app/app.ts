import { Component } from '@angular/core';
import { Shell } from './core/layout/shell/shell';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Shell],
})
export class App {}
