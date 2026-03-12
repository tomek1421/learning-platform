import { LessonDto } from "../../../types/Course";
import { codeOrderExercise, csHelloWorldExercise, matchPairsExercise, multipleChoiceExercise, multipleChoiceExercise2 } from "../../exercises";

const lesson: LessonDto = {
    id: 'lesson-01-top-10',
    lessonItems: [
        codeOrderExercise,
        csHelloWorldExercise,
        matchPairsExercise,
        multipleChoiceExercise,
        multipleChoiceExercise2
    ]
}

export default lesson;