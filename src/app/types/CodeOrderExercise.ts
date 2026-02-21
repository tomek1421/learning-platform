import { AnswerDto } from "./CodeExerciseDto";

export interface CodeOrderExerciseDto {
    id: string,
    type: 'code' | 'multiple' | 'order' | 'match',
    instruction: string,
    options: AnswerDto[],
    correctOptionsIdOrder: number[]
}