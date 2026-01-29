import { Injectable } from '@angular/core';
import { ENCOUNTER_POINTS, EP_CATEGORIES } from '../../shared/data/ep.seed';

@Injectable({
  providedIn: 'root',
})
export class EpService {

  getAll() {
    return ENCOUNTER_POINTS.map(ep => ({
      ...ep,
      category: EP_CATEGORIES.find(
        category => category.id == ep.categoryId
      )
    }));
  }

  getAllCategories() {
    return EP_CATEGORIES;
  }
  
}
