import { Component, inject, OnInit } from '@angular/core';
import { csHelloWorldExercise, codeOrderExercise, multipleChoiceExercise, multipleChoiceExercise2, matchPairsExercise } from '../../data/exercises';
import { CodeExerciseDto } from '../../types/CodeExerciseDto';
import { CodeExercise } from "../../exercises/code-exercise/code-exercise";
import { MultipleChoiceExercise } from "../../exercises/multiple-choice-exercise/multiple-choice-exercise";
import { MultipleChoiceExerciseDto } from '../../types/MultipleChoiceExerciseDto';
import { CodeOrderExercise } from "../../exercises/code-order-exercise/code-order-exercise";
import { CodeOrderExerciseDto } from '../../types/CodeOrderExercise';
import { MatchPairsExerciseDto } from '../../types/MatchPairsExerciseDto';
import { MatchPairsExercise } from "../../exercises/match-pairs-exercise/match-pairs-exercise";
import { ExerciseDto, LessonDto } from '../../types/Course';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { loadLesson } from '../../shared/dataLoader';
import { NavStateService } from '../../services/nav-state-service';

@Component({
  selector: 'app-lesson-page',
  imports: [CodeExercise, MultipleChoiceExercise, CodeOrderExercise, MatchPairsExercise, RouterLink],
  templateUrl: './lesson-page.html',
  styleUrl: './lesson-page.scss',
})
export class LessonPage implements OnInit {

  async ngOnInit() {
    const chapterId = this.route.snapshot.paramMap.get('chapterId') ?? "ERROR";
    const lessonId = this.route.snapshot.paramMap.get('lessonId') ?? "ERROR";

    // console.log(lessonId);

    const lesson: LessonDto = await loadLesson(chapterId, lessonId);
    this.listOfExercises = lesson.lessonItems;
    this.navState.setTotal(lesson.lessonItems.length);
  }

  navState = inject(NavStateService);

  exerciseData: CodeExerciseDto = csHelloWorldExercise;
  multipleChoiceExerciseData: MultipleChoiceExerciseDto = multipleChoiceExercise;
  multipleChoiceExerciseData2: MultipleChoiceExerciseDto = multipleChoiceExercise2;
  codeOrderExerciseData: CodeOrderExerciseDto = codeOrderExercise;
  matchPairsExerciseData: MatchPairsExerciseDto = matchPairsExercise;

  private route = inject(ActivatedRoute);

  // listOfExercises: ExerciseDto[] = [this.matchPairsExerciseData, this.exerciseData, this.multipleChoiceExerciseData, this.multipleChoiceExerciseData2, this.codeOrderExerciseData];
  // listOfExercises: ExerciseDto[] = [this.multipleChoiceExerciseData, this.codeOrderExerciseData, this.matchPairsExerciseData, this.multipleChoiceExerciseData2];
  listOfExercises: ExerciseDto[] = [];

  currentExerciseIndex = 0;

  resetCounter = 0;

  selectedAnswerId: number | null = null;

  isAnswerSubmited = false;
  isAnswerCorrect = false;

  showExercise = true;
  isFinished = false;

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
    if (this.currentExerciseIndex >= this.listOfExercises.length - 1)
      this.isFinished = true;

    // to reset animation
    setTimeout(() => {
      this.showExercise = true;
      this.currentExerciseIndex += 1;
      this.navState.setCurrent(this.currentExerciseIndex);
      this.reset();
    }, 0);
  }

  reset() {
    this.selectedAnswerId = null;
    this.isAnswerSubmited = false;
    this.isAnswerCorrect = false;

    this.resetCurrentExercise();
  }

  disable() {
    this.selectedAnswerId = null;
  }

  private resetCurrentExercise() {
    this.resetCounter++;
  }

  parseToCodeExercise(obj: any) {
    return obj as CodeExerciseDto;
  }

  parseToMultipleExercise(obj: any) {
    return obj as MultipleChoiceExerciseDto;
  }

  parseToCodeOrderExercise(obj: any) {
    return obj as CodeOrderExerciseDto;
  }

  parseToMatchPairsExercise(obj: any) {
    return obj as MatchPairsExerciseDto;
  }

}
