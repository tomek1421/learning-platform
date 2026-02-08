import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { MultipleChoiceExerciseDto } from '../../types/MultipleChoiceExerciseDto';
import { CodeTokenDto } from '../../types/CodeExerciseDto';

@Component({
  selector: 'app-multiple-choice-exercise',
  imports: [],
  templateUrl: './multiple-choice-exercise.html',
  styleUrl: './multiple-choice-exercise.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MultipleChoiceExercise {

  @Input({required: true}) multipleChoiceExercise!: MultipleChoiceExerciseDto;

  @Input() set resetTrigger(_: number) {
    this.selectedId = null;
  }

  @Output() userAnswer = new EventEmitter<number>();

  selectedId: number | null = null;

  setSelectedAnswer(optionId: number) {
    this.selectedId = optionId;
    this.userAnswer.emit(optionId);
  }

  isArray(value: CodeTokenDto[] | string) {
    return Array.isArray(value);
  }
}
