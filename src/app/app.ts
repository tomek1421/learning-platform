import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavStateService } from './services/nav-state-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  schemas: []
})
export class App {
  
  private route = inject(ActivatedRoute);
  navState = inject(NavStateService);

  get showLessonNav() {
    return this.route.firstChild?.snapshot.data['showLessonNav'];
  }

  calculateBarProgress(): number {
    const current = this.navState.currentExerciseIndex;
    const total = this.navState.totalExercises;

    if (current > 0 && total > 0) {
      return Math.round((current / total) * 100);
    }

    return 0;
  }
}
