import { Component } from '@angular/core';
import { csHelloWorldExercise, multipleChoiceExercise, multipleChoiceExercise2 } from '../../data/exercises';
import { CodeExerciseDto } from '../../types/CodeExerciseDto';
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
  exerciseData: CodeExerciseDto = csHelloWorldExercise;
  multipleChoiceExerciseData: MultipleChoiceExerciseDto = multipleChoiceExercise;
  multipleChoiceExerciseData2: MultipleChoiceExerciseDto = multipleChoiceExercise2;

  listOfExercises = [this.exerciseData, this.exerciseData, this.multipleChoiceExerciseData, this.multipleChoiceExerciseData2];

  currentExerciseIndex = 0;

  resetCounter = 0;

  selectedAnswerId: number | null = null;

  isAnswerSubmited = false;
  isAnswerCorrect = false;

  showExercise = true;

  private successSound = new Audio('assets/sounds/complete3.mp3');
  private failureSound = new Audio('assets/sounds/failed2.mp3');

  get currentExercise() {
    return this.listOfExercises[this.currentExerciseIndex];
  }

  onSelectAnswer(answerId: number) {
    this.selectedAnswerId = answerId;
  }

  onSubmitAnswer() {
    this.isAnswerSubmited = true;
    // maybe this logic in exercise compoennt and just emit it
    this.isAnswerCorrect = this.currentExercise.correctOptionId === this.selectedAnswerId;
    
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

  nextExecise() {
    this.showExercise = false;

    // to reset animation
    setTimeout(() => {
      this.showExercise = true;
      this.currentExerciseIndex += 1;
      this.reset();
    }, 0);
  }

  reset() {
    this.selectedAnswerId = null;
    this.isAnswerSubmited = false;
    this.isAnswerCorrect = false;

    this.resetCurrentExercise();
  }

  private resetCurrentExercise() {
    this.resetCounter++;
  }

  parseToCodeExercise() {
    return this.currentExercise as CodeExerciseDto;
  }

  parseToMultipleExercise() {
    return this.currentExercise as MultipleChoiceExerciseDto;
  }
}
