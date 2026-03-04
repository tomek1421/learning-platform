import { LessonDto } from "../../../types/Course";
import { codeOrderExercise, csHelloWorldExercise, multipleChoiceExercise } from "../../exercises";

const lesson: LessonDto = {
    id: 'lesson-01-top-10',
    lessonItems: [
        codeOrderExercise
    ]
}

export default lesson;