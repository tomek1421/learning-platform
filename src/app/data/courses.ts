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
            id: "chapter-01-fundamentals",
            name: "Fundamentals",
            lessonReferences: [
                { referenceId: 'lesson-01', type: 'note', name: 'Introduction to .NET' },
                { referenceId: 'lesson-02', type: 'note', name: 'CLI' },
            ]
        },
        {
            id: "chapter-02-language-basics",
            name: "Language Basics",
            lessonReferences: [
                { referenceId: 'lesson-01', type: 'note', name: 'Variables' },
            ]
        }
    ],
    fastReferences: [
        {
            referenceId: 'lesson-01-top-10',
            type: 'note',
            name: 'TOP 10 exercises'
        }
    ]
}