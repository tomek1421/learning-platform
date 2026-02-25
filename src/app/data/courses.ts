import { CourseDto } from "../types/Course";

export const levelColors = [
    "92ee00",
    "00ee7d",
    "5400ee",
    "cb00ee",
    "ee0068",
    "ee9a00",
];

export const csharpCourse: CourseDto = {
    id: "csharp-course",
    name: "C# 13 Ultimate Guide",
    chapters: [
        {
            id: "csharp-course-1",
            name: "Fundamentals",
            lessonReferences: [
                { referenceId: 'lesson-1', type: 'note', name: 'Introduction to .NET' },
                { referenceId: 'lesson-2', type: 'note', name: 'CLI' },
            ]
        },
        {
            id: "csharp-course-2",
            name: "Variables and Types",
            lessonReferences: [
                { referenceId: 'lesson-6', type: 'note', name: 'Variables' },
                { referenceId: 'lesson-7', type: 'exercise', name: 'Primitive types' },
                { referenceId: 'lesson-8', type: 'note', name: 'Type inference (var)' },
                { referenceId: 'lesson-9', type: 'note', name: 'Constants' },
                { referenceId: 'lesson-10', type: 'exercise', name: 'Type casting' },
            ]
        }
    ],
    fastReferences: [
        {
            referenceId: 'lesson-11',
            type: 'note',
            name: 'TOP 10 exercises'
        },
        {
            referenceId: 'lesson-22',
            type: 'exercise',
            name: 'For Interview'
        },
        {
            referenceId: 'lesson-33',
            type: 'note',
            name: 'SHORT SUMMARY'
        }
    ]
}