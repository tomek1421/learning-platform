import { computed, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavStateService {
  totalExercises = 0;
  currentExerciseIndex = 0;

  setTotal(count: number) {
    this.totalExercises = count;
  }

  setCurrent(index: number) {
    this.currentExerciseIndex = index;
  }

  reset() {
    this.totalExercises = 0;
    this.currentExerciseIndex = 0;
  }
}
