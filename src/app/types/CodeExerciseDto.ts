export type Color =
  | 'wh'      // white
  | 'bl'      // blue (keyword)
  | 'gr'      // green (method)
  | 'yl'      // yellow (type)
  | 'or'      // orange (string)
  | 'pk';     // pink (dot / punctuation)

export interface CodeTokenDto {
    type: Color;
    value: string
}

export interface CodeLineDto {
    indent?: number;
    before: CodeTokenDto[];
    gap?: boolean;
    after?: CodeTokenDto[];
}

export interface AnswerDto {
    id: number,
    content: CodeTokenDto[]
}

export interface CodeExerciseDto {
    id: string;
    type: 'code' | 'multiple' | 'order';
    instruction: string;
    correctOptionId: number;
    options: AnswerDto[];
    lines: CodeLineDto[];
}