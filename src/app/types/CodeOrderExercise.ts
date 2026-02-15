import { AnswerDto } from "./CodeExerciseDto";

export interface CodeOrderExerciseDto {
    id: string,
    type: 'order',
    instruction: string,
    options: AnswerDto[],
    correctOptionsIdOrder: number[]
}