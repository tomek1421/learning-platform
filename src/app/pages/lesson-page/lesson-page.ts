import { Component } from '@angular/core';
import { csHelloWorldExercise, multipleChoiceExercise } from '../../data/exercises';
import { CodeExercisDto } from '../../types/CodeExerciseDto';
import { CodeExercise } from "../../exercises/code-exercise/code-exercise";
import { MultipleChoiceExercise } from "../../exercises/multiple-choice-exercise/multiple-choice-exercise";
import { MultipleChoiceExerciseDto } from '../../types/MultipleChoiceExerciseDto';

@Component({
  selector: 'app-lesson-page',
  imports: [CodeExercise, MultipleChoiceExercise],
  templateUrl: './lesson-page.html',
  styleUrl: './lesson-page.scss',
})
export class LessonPage {
  exerciseData: CodeExercisDto = csHelloWorldExercise;
  multipleChoiceExerciseData: MultipleChoiceExerciseDto = multipleChoiceExercise;

  listOfExercises = [this.exerciseData, this.multipleChoiceExerciseData];

  selectedAnswerId: number | null = null;

  isAnswerSubmited = false;
  isAnswerCorrect = false;

  private successSound = new Audio('assets/sounds/complete3.mp3');
  private failureSound = new Audio('assets/sounds/failed2.mp3');

  onSelectAnswer(answerId: number) {
    this.selectedAnswerId = answerId;
  }

  onSubmitAnswer() {
    this.isAnswerSubmited = true;
    // maybe this logic in exercise compoennt and just emit it
    this.isAnswerCorrect = csHelloWorldExercise.correctOptionId === this.selectedAnswerId;
    
    if (this.isAnswerCorrect) {
      this.playSuccess();
    } else {
      this.playFailure();
    }
    // console.log(this.isAnswerSubmited, this.isAnswerCorrect);
  }

  playSuccess() {
    this.successSound.currentTime = 0;
    this.successSound.play();
  }

  playFailure() {
    this.failureSound.currentTime = 0;
    this.failureSound.volume = 0.3;
    this.failureSound.play();
  }
}
