import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CodeExercise } from './exercises/code-exercise/code-exercise';
import { csHelloWorldExercise } from './data/exercises';
import { CodeExercisDto } from './types/CodeExerciseDto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CodeExercise],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  exerciseData: CodeExercisDto = csHelloWorldExercise;
  
}
