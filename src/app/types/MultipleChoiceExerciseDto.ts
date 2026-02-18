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
    type: 'code' | 'multiple' | 'order',
    instruction: TextWithCodeDto[],
    lines?: CodeLinesDto[],
    correctOptionId: number,
    options: TextWithCodeAnswerDto[]
}