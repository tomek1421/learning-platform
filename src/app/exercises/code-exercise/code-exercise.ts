import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { CodeExerciseDto, CodeTokenDto } from '../../types/CodeExerciseDto';
import { ExerciseInterface } from '../../types/exerciseInterfaces';

@Component({
  selector: 'app-code-exercise',
  imports: [],
  templateUrl: './code-exercise.html',
  styleUrl: './code-exercise.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CodeExercise implements ExerciseInterface {
  @Input({required: true}) codeExercise!: CodeExerciseDto;

  @Input() set resetTrigger(_: number) {
    this.gapInput = null;
    this.selectedId = null;
  }

  @Input({required: true}) isSubmited!: boolean;

  @Output() userAnswer = new EventEmitter<boolean>();

  gapInput?: CodeTokenDto[] | null = null;
  selectedId?: number | null = null;

  public setInputGap(id: number) {
    const option = this.codeExercise.options.find(x => x.id === id);
    this.gapInput = option?.content;
    this.selectedId = option?.id;
    // this.userAnswer.emit(option?.id ?? 1);
    
    const isCorrect = this.isAnswerCorerct();
    this.userAnswer.emit(isCorrect);
  }

  public indentSpaces(indent?: number | undefined): string {
    if (!indent)
      return '';
    return '&nbsp'.repeat(indent * 4);
  }

  isAnswerCorerct(): boolean {
    return this.selectedId === this.codeExercise.correctOptionId;
  }

}
