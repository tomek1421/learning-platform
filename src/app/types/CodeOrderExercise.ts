import { AnswerDto } from "./CodeExerciseDto";

export interface CodeOrderExerciseDto {
    id: string,
    type: 'code' | 'multiple' | 'order' | 'match',
    instruction: string,
    options: AnswerDto[],
    correctOptionsIdOrder: number[]
}

// ✅ object types → bl
// ✅ keywords → bl
// ✅ variables → lb
// ✅ methods → yl
// ✅ punctuation → wh
// ✅ strings → or
// ✅ numbers → bl
// ✅ answers like All stay plain text

// Since multiple code snippets exist, we can include them in lines for display.