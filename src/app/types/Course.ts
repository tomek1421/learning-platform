import { CodeExerciseDto } from "./CodeExerciseDto"
import { CodeOrderExerciseDto } from "./CodeOrderExercise"
import { MatchPairsExerciseDto } from "./MatchPairsExerciseDto"
import { MultipleChoiceExerciseDto } from "./MultipleChoiceExerciseDto"

export type ExerciseDto = CodeExerciseDto | MultipleChoiceExerciseDto | CodeOrderExerciseDto | MatchPairsExerciseDto;

export interface LessonDto {
    id: string,
    lessonItems: ExerciseDto[]
}

type LessonRegex = `lesson-${string}${string}`; // require at least one character

export const a: LessonRegex = 'lesson-1';
// export const b: RegexType = '123'; // ERROR

export interface LessonReferenceDto {
    referenceId: LessonRegex,
    type: 'note' | 'exercise',
    name: string
}

export interface ChapterDto {
    id: string,
    name : string,
    lessonReferences: LessonReferenceDto[]
}

export interface CourseDto {
    id: string,
    name: string,
    chapters: ChapterDto[],
    fastReferences: LessonReferenceDto[] 
}