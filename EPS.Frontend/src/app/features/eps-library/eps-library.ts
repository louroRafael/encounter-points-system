import { Component, OnInit } from '@angular/core';
import { EpCategory } from '../../shared/models/ep-category.model';
import { EpService } from '../../core/services/ep';
import { Ep } from '../../shared/models/encounter-point.model';
import { EpCard } from './components/ep-card/ep-card';
import { EpModal } from "./components/ep-modal/ep-modal";

@Component({
  selector: 'app-eps-library',
  imports: [EpCard, EpModal],
  templateUrl: './eps-library.html',
  styleUrl: './eps-library.css',
})
export class EpsLibrary implements OnInit{
  categories: EpCategory[] = [];
  encounterPoints: Ep[] = [];
  selectedEp: Ep | null = null;

  constructor(private epService: EpService) {}

  ngOnInit(): void {
    this.categories = this.epService.getAllCategories();
    this.encounterPoints = this.epService.getAll();
  }

  getEpsByCategory(categoryId: number): Ep[] {
    return this.encounterPoints.filter(x => x.categoryId == categoryId);
  }
}
