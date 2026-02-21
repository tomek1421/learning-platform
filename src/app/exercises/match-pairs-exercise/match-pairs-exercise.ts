import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatchPairDto, MatchPairsExerciseDto } from '../../types/MatchPairsExerciseDto';
import { CodeTokenDto } from '../../types/CodeExerciseDto';
import { ExerciseInterface } from '../../types/exerciseInterfaces';
import { shuffle } from '../../shared/functions';

@Component({
  selector: 'app-match-pairs-exercise',
  imports: [],
  templateUrl: './match-pairs-exercise.html',
  styleUrl: './match-pairs-exercise.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MatchPairsExercise implements ExerciseInterface, OnInit {
  
  ngOnInit() {
    this.shuffleOptions = shuffle<MatchPairDto>(this.matchPairsExercise.options);
  }

  @Input({required: true}) matchPairsExercise!: MatchPairsExerciseDto;

  @Input({required: true}) isSubmited!: boolean;

  @Output() userAnswer = new EventEmitter<boolean>();

  @Output() reset = new EventEmitter();

  shuffleOptions!: MatchPairDto[];

  selectedPairsIds: [number | null, number | null][] = [];

  onClickOption(id: number, column: 1 | 2) {
      if (this.isSelected(id, column))
      {
        if (column === 1)
          this.selectedPairsIds = this.selectedPairsIds.filter(s => s[column - 1] !== id);
        else if (column === 2) {
          this.selectedPairsIds = this.selectedPairsIds
          .filter(s => s[1] !== null || s[1] === id)
          .map(s => {
            if (s[column - 1] === id)
              return [s[0], null]
            return s;
          });
        }
      } else {
        if (column === 1 && !this.selectedPairsIds.some(s => s[1] === null))
          this.selectedPairsIds = [...this.selectedPairsIds, [id, null]];
        else if (column === 2) {
          this.selectedPairsIds = this.selectedPairsIds.map(s => {
            if (s[1] === null)
              return [s[0], id];
            return s;
          })
        }
      }

      if (this.selectedPairsIds.length === this.matchPairsExercise.options.length && this.selectedPairsIds.every(([a,b]) => a !== null && b !== null)) {
        const isCorrect = this.isAnswerCorerct();
        this.userAnswer.emit(isCorrect);
      }

      console.log(this.selectedPairsIds);
      
  }

  isSelected(id: number, column: 1 | 2) {
    return this.selectedPairsIds.find(s  => s[column - 1] === id);
  }

  getOptionOrder(id: number, column: 1 | 2): number {
    // return this.selectedPairsIds.findIndex(s => s[column - 1] === id) + 1;
    if (column === 2) {
      const pair = this.selectedPairsIds.find(s => s[1] === id);
      return pair?.[0] ?? -1;
    }
    return id;
  }

  mapOrderToLetter(number: number) {
    return String.fromCharCode(64 + number);
  }

  isOptionCorrect(id: number) {
    const pair = this.selectedPairsIds.find(s => s[0] === id);

    if (pair)
      return pair[0] === pair[1];
    return false;
  }

  isArray(value: CodeTokenDto[] | string) {
    return Array.isArray(value);
  }

  isAnswerCorerct(): boolean {
    return this.selectedPairsIds.every(([a,b]) => a === b);
  }

  onReset(): void {
    this.selectedPairsIds = [];
    this.reset.emit();
  }
}
