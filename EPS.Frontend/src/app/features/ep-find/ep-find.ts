import { Component, OnInit } from '@angular/core';
import { Ep } from '../../shared/models/encounter-point.model';
import { EpService } from '../../core/services/ep';
import { EpCategory } from '../../shared/models/ep-category.model';
import { EpFlag } from '../../shared/components/ep-flag/ep-flag';

@Component({
  selector: 'app-ep-find',
  imports: [
    EpFlag
  ],
  templateUrl: './ep-find.html',
  styleUrl: './ep-find.css',
})
export class EpFind implements OnInit {
  categories: EpCategory[] = [];
  encounterPoints: Ep[] = [];

  constructor(private epService: EpService) {}

  ngOnInit(): void {
    this.categories = this.epService.getAllCategories();
    this.encounterPoints = this.epService.getAll();
  }
}
