import { LessonDto } from "../types/Course";

export async function loadLesson(chapterId: string, lessonId: string): Promise<LessonDto> {
    // dynamic import based on referenceId
    const lessonModule = await import(`../data/chapters/${chapterId}/${lessonId}.ts`); // maybe add dynamic chapter
    return lessonModule.default;
}

// TODO: how to get next lesson id?
// based on current loaded lesson find it it in courses.ts and take id from next one in the list
// use localstore for progess

// usage
// async ngOnInit() {
//     this.lesson = await loadLesson(this.reference);
// }