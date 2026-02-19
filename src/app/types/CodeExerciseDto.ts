export type Color =
  | 'wh'      // white
  | 'bl'      // blue (keyword)
  | 'lb'      // light blue - type/class/interface
  | 'gr'      // green (method)
  | 'yl'      // yellow (type)
  | 'or'      // orange (string)
  | 'pk'      // pink (dot / punctuation)
  | 'cmt';    // comment green

export interface CodeTokenDto {
    type: Color;
    value: string
}

export interface InteractiveCodeLineDto {
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
    lines: InteractiveCodeLineDto[];
}