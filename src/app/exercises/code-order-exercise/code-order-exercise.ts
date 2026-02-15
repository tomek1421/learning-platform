import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output } from '@angular/core';
import { CodeOrderExerciseDto } from '../../types/CodeOrderExercise';
import { ExerciseInterface } from '../../types/exerciseInterfaces';

@Component({
  selector: 'app-code-order-exercise',
  imports: [],
  templateUrl: './code-order-exercise.html',
  styleUrl: './code-order-exercise.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CodeOrderExercise implements ExerciseInterface {

    @Input({required: true}) codeOrderExercise!: CodeOrderExerciseDto;

    @Output() userAnswer = new EventEmitter<boolean>();

    selectedIdsOrder: number[] = [];

    getOption(id: number) {
      return this.codeOrderExercise.options.find(option => option.id === id);
    }

    onClickOption(id: number) {
      if (this.isSelected(id))
      {
        this.selectedIdsOrder = this.selectedIdsOrder.filter(selectedId => selectedId !== id);
      } else {
        this.selectedIdsOrder = [...this.selectedIdsOrder, id];
      }

      const isCorrect = this.isAnswerCorerct();
      
      if (this.selectedIdsOrder.length === this.codeOrderExercise.options.length)
        this.userAnswer.emit(isCorrect);
    }

    isSelected(id: number) {
      return this.selectedIdsOrder.find(selectedId  => selectedId  === id);
    }

    isAnswerCorerct(): boolean {
      if (this.selectedIdsOrder.length !== this.codeOrderExercise.correctOptionsIdOrder.length) return false;
      return this.selectedIdsOrder.every((value, index) => value === this.codeOrderExercise.correctOptionsIdOrder[index]);
    }
}
