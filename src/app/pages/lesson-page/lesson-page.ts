import { Component } from '@angular/core';
import { csHelloWorldExercise, codeOrderExercise, multipleChoiceExercise, multipleChoiceExercise2 } from '../../data/exercises';
import { CodeExerciseDto } from '../../types/CodeExerciseDto';
import { CodeExercise } from "../../exercises/code-exercise/code-exercise";
import { MultipleChoiceExercise } from "../../exercises/multiple-choice-exercise/multiple-choice-exercise";
import { MultipleChoiceExerciseDto } from '../../types/MultipleChoiceExerciseDto';
import { CodeOrderExercise } from "../../exercises/code-order-exercise/code-order-exercise";
import { CodeOrderExerciseDto } from '../../types/CodeOrderExercise';

@Component({
  selector: 'app-lesson-page',
  imports: [CodeExercise, MultipleChoiceExercise, CodeOrderExercise],
  templateUrl: './lesson-page.html',
  styleUrl: './lesson-page.scss',
})
export class LessonPage {
  exerciseData: CodeExerciseDto = csHelloWorldExercise;
  multipleChoiceExerciseData: MultipleChoiceExerciseDto = multipleChoiceExercise;
  multipleChoiceExerciseData2: MultipleChoiceExerciseDto = multipleChoiceExercise2;
  codeOrderExerciseData: CodeOrderExerciseDto = codeOrderExercise;

  listOfExercises = [this.exerciseData, this.multipleChoiceExerciseData, this.multipleChoiceExerciseData2, this.codeOrderExerciseData];
  // listOfExercises = [this.codeOrderExerciseData];

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

  onSubmitAnswer() {
    this.isAnswerSubmited = true;
    
    if (this.isAnswerCorrect) {
      this.playSuccess();
    } else {
      this.playFailure();
    }
    // console.log(this.isAnswerSubmited, this.isAnswerCorrect);
  }

  onSelectAnswer(isCorrect: boolean) {
    this.selectedAnswerId = 1;
    this.isAnswerCorrect = isCorrect;
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
