import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { CodeExerciseDto, CodeTokenDto } from '../../types/CodeExerciseDto';

@Component({
  selector: 'app-code-exercise',
  imports: [],
  templateUrl: './code-exercise.html',
  styleUrl: './code-exercise.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CodeExercise {

  @Input({required: true}) codeExercise!: CodeExerciseDto;

  @Input() set resetTrigger(_: number) {
    this.gapInput = null;
    this.selectedId = null;
  }

  @Output() userAnswer = new EventEmitter<number>();

  gapInput?: CodeTokenDto[] | null = null;
  selectedId?: number | null = null;

  public setInputGap(id: number) {
    const option = this.codeExercise.options.find(x => x.id === id);
    this.gapInput = option?.content;
    this.selectedId = option?.id;
    this.userAnswer.emit(option?.id ?? 1);
  }

  public indentSpaces(indent?: number | undefined): string {
    if (!indent)
      return '';
    return '&nbsp'.repeat(indent * 4);
  }

}
