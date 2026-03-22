import { CodeTokenDto } from "./CodeExerciseDto";

export interface TextWithCodeContentDto {
    token: CodeTokenDto[] | string
}

export interface TextWithCodeDto {
    content: TextWithCodeContentDto[]
}

export interface CodeLinesDto {
    indent?: number;
    tokens: CodeTokenDto[];
}

export interface TextWithCodeAnswerDto {
    id: number,
    answer: TextWithCodeDto[]
}

export interface MultipleChoiceExerciseDto {
    id: string,
    type: 'code' | 'multiple' | 'order' | 'match',
    instruction: TextWithCodeDto[],
    lines?: CodeLinesDto[],
    correctOptionId: number,
    options: TextWithCodeAnswerDto[]
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