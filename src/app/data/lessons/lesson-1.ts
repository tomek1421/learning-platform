import { LessonDto } from "../../types/Course";
import { codeOrderExercise, csHelloWorldExercise, multipleChoiceExercise } from "../exercises";

const lesson: LessonDto = {
    id: 'lesson-1',
    lessonItems: [
        multipleChoiceExercise,
        csHelloWorldExercise,
        codeOrderExercise
    ]
}

export default lesson;