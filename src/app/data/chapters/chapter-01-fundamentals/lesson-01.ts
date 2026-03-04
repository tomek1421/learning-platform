import { LessonDto } from "../../../types/Course";
import { multipleChoiceExercise, csHelloWorldExercise, codeOrderExercise } from "../../exercises";


const lesson: LessonDto = {
    id: 'lesson-01',
    lessonItems: [
        multipleChoiceExercise,
        csHelloWorldExercise,
        codeOrderExercise
    ]
}

export default lesson;