import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Ep } from '../../shared/models/encounter-point.model';
import { EpService } from '../../core/services/ep';
import { EpCategory } from '../../shared/models/ep-category.model';
import { EpFlag } from '../../shared/components/ep-flag/ep-flag';
import { FlagFrame } from '../../shared/components/flag-frame/flag-frame';

@Component({
  selector: 'app-ep-find',
  imports: [
    DatePipe,
    EpFlag,
    FlagFrame
  ],
  templateUrl: './ep-find.html',
  styleUrl: './ep-find.css',
})
export class EpFind implements OnInit {
  categories: EpCategory[] = [];
  encounterPoints: Ep[] = [];
  activeCategory: number | null = null;
  activeEp: Ep | null = null;

  constructor(private epService: EpService) {}

  ngOnInit(): void {
    this.categories = this.epService.getAllCategories();
    this.encounterPoints = this.epService.getAll();
  }

  filterCategory(categoryId: number): void {
    this.activeCategory = (categoryId === this.activeCategory) ? null : categoryId;
  }

  selectEp(ep: Ep): void {
    if (ep === this.activeEp) {
      this.activeEp = null;
    }
    else {
      this.activeEp = ep;

      setTimeout(() => {
        this.scrollTo("ep-details");
      });
    }
  }

  getWeekDay(date: Date): string {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(date);
  }

  scrollTo(ref: string) {
    const el = document.getElementById(ref);
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}
