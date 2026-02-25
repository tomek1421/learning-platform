import { LessonDto } from "../types/Course";

export async function loadLesson(referenceId: string): Promise<LessonDto> {
    // dynamic import based on referenceId
    const lessonModule = await import(`./lessons/${referenceId}.ts`); // maybe add dynamic chapter
    return lessonModule.default;
}

// usage 
// async ngOnInit() {
//     this.lesson = await loadLesson(this.reference);
// }