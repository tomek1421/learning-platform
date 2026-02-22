import { CodeExerciseDto } from "./CodeExerciseDto"
import { CodeOrderExerciseDto } from "./CodeOrderExercise"
import { MatchPairsExerciseDto } from "./MatchPairsExerciseDto"
import { MultipleChoiceExerciseDto } from "./MultipleChoiceExerciseDto"

export type LessonItem = CodeExerciseDto | MultipleChoiceExerciseDto | CodeOrderExerciseDto | MatchPairsExerciseDto;

export interface LessonReference {
    referenceId: string,
    type: 'note' | 'exercise',
    name: string
}

export interface ChapterDto {
    id: string,
    name : string,
    lessonReferences: LessonReference[]
}

export interface CourseDto {
    id: string,
    name: string,
    chapters: ChapterDto[],
    fastReferences: LessonReference[] 
}
