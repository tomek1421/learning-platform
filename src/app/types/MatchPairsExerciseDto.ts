import { TextWithCodeAnswerDto, TextWithCodeDto } from "./MultipleChoiceExerciseDto";

export interface MatchPairDto {
    id: number,
    firstOption: TextWithCodeAnswerDto,
    secondOption: TextWithCodeAnswerDto
}

export interface MatchPairsExerciseDto {
    id: string,
    type: 'code' | 'multiple' | 'order' | 'match',
    instruction: TextWithCodeDto[],
    options: MatchPairDto[],
}