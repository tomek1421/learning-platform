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

// ✅ object types → bl
// ✅ keywords → bl
// ✅ variables → lb
// ✅ methods → yl
// ✅ punctuation → wh
// ✅ strings → or
// ✅ numbers → bl
// ✅ answers like All stay plain text

// Since multiple code snippets exist, we can include them in lines for display.