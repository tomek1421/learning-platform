import { CodeTokenDto } from "./CodeExerciseDto";

export interface TextWithCodeContentDto {
    token: CodeTokenDto[] | string
}

export interface TextWithCodeDto {
    content: TextWithCodeContentDto[]
}

export interface TextWithCodeAnswerDto {
    id: number,
    answer: TextWithCodeDto[]
}

export interface MultipleChoiceExerciseDto {
    id: string,
    instruction: TextWithCodeDto[],
    correctOptionId: number,
    options: TextWithCodeAnswerDto[]
}

// TOTALLY WRONG - TODO: fix it