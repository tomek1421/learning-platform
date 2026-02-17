import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { MultipleChoiceExerciseDto } from '../../types/MultipleChoiceExerciseDto';
import { CodeTokenDto } from '../../types/CodeExerciseDto';
import { ExerciseInterface } from '../../types/exerciseInterfaces';

@Component({
  selector: 'app-multiple-choice-exercise',
  imports: [],
  templateUrl: './multiple-choice-exercise.html',
  styleUrl: './multiple-choice-exercise.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MultipleChoiceExercise implements ExerciseInterface {

  @Input({required: true}) multipleChoiceExercise!: MultipleChoiceExerciseDto;

  @Input() set resetTrigger(_: number) {
    this.selectedId = null;
  }

  @Input({required: true}) isSubmited!: boolean;

  @Output() userAnswer = new EventEmitter<boolean>();

  selectedId: number | null = null;

  setSelectedAnswer(optionId: number) {
    this.selectedId = optionId;
    // this.userAnswer.emit(optionId);

    const isCorerct = this.isAnswerCorerct();
    this.userAnswer.emit(isCorerct);
  }

  isArray(value: CodeTokenDto[] | string) {
    return Array.isArray(value);
  }

  isAnswerCorerct(): boolean {
    return this.selectedId === this.multipleChoiceExercise.correctOptionId;
  }
}
