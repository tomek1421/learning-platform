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

    @Input({required: true}) isSubmited!: boolean;

    @Output() userAnswer = new EventEmitter<boolean>();

    @Output() reset = new EventEmitter();

    @Output() disable = new EventEmitter();

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
      
      if (this.selectedIdsOrder.length === this.codeOrderExercise.options.length) {
        this.userAnswer.emit(isCorrect);
      } else {
        this.disable.emit();
      }
    }

    getOptionOrder(id: number) {
      return this.selectedIdsOrder.findIndex(optionId => optionId === id) + 1;
    }

    isOptionCorrect(id: number) {
      const helperList = this.selectedIdsOrder.map((value, i) => value === this.codeOrderExercise.correctOptionsIdOrder[i]);
      const index = this.selectedIdsOrder.findIndex(o => o === id);
      return helperList[index];
    }

    isSelected(id: number) {
      return this.selectedIdsOrder.find(selectedId  => selectedId  === id);
    }

    isAnswerCorerct(): boolean {
      if (this.selectedIdsOrder.length !== this.codeOrderExercise.correctOptionsIdOrder.length) return false;
      return this.selectedIdsOrder.every((value, index) => value === this.codeOrderExercise.correctOptionsIdOrder[index]);
    }

    onReset(): void {
      this.selectedIdsOrder = [];
      this.reset.emit();
    }
}
