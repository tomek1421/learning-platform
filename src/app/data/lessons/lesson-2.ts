import { LessonDto } from "../../types/Course";
import { csHelloWorldExercise, multipleChoiceExercise } from "../exercises";

const lesson: LessonDto = {
    id: 'lesson-2',
    lessonItems: [
        csHelloWorldExercise,
        multipleChoiceExercise,
    ]
}

export default lesson;