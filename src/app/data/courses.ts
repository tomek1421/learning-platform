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
                { referenceId: 'lesson-01', type: 'exercise', name: 'Introduction to .NET' },
                { referenceId: 'lesson-02', type: 'exercise', name: 'CLR' },
                { referenceId: 'lesson-03', type: 'exercise', name: '.NET Framework Architecture' },
            ]
        },
        {
            id: "chapter-02-language-basics",
            name: "Language Basics",
            lessonReferences: [
                { referenceId: 'lesson-01', type: 'exercise', name: 'First C# Application' },
                // { referenceId: 'lesson-02', type: 'exercise', name: 'The System.Console Class' },
                { referenceId: 'lesson-03', type: 'exercise', name: 'Variables' },
                { referenceId: 'lesson-04', type: 'exercise', name: 'Primitive Types' },
                { referenceId: 'lesson-04', type: 'exercise', name: 'Operators' },
                // { referenceId: 'lesson-04', type: 'exercise', name: 'if and its forms' },
                // { referenceId: 'lesson-04', type: 'exercise', name: 'switch-case' },
                // { referenceId: 'lesson-04', type: 'exercise', name: 'while Loop' },
                // { referenceId: 'lesson-04', type: 'exercise', name: 'do-while Loop' },
                // { referenceId: 'lesson-04', type: 'exercise', name: 'for Loop' },
                { referenceId: 'lesson-04', type: 'exercise', name: 'break and continue' },
                // { referenceId: 'lesson-04', type: 'exercise', name: 'Nested for Loops' },
                { referenceId: 'lesson-04', type: 'exercise', name: 'goto' },
            ]
        },
        {
            id: "chapter-03-oop",
            name: "Object-Oriented Programming",
            lessonReferences: [
                { referenceId: 'lesson-01', type: 'exercise', name: 'aaa' },
            ]
        },
        {
            id: "chapter-04-fields",
            name: "Fields",
            lessonReferences: [
                { referenceId: 'lesson-01', type: 'exercise', name: 'aaa' },
            ]
        },
        {
            id: "chapter-05-methods",
            name: "Methods",
            lessonReferences: [
                { referenceId: 'lesson-01', type: 'exercise', name: 'aaa' },
            ]
        },
        {
            id: "chapter-06-type-conversion",
            name: "Type Conversion",
            lessonReferences: [
                { referenceId: 'lesson-01', type: 'exercise', name: 'aaa' },
            ]
        },
        {
            id: "chapter-07-constructors",
            name: "Constructors",
            lessonReferences: [
                { referenceId: 'lesson-01', type: 'exercise', name: 'aaa' },
            ]
        },
    ],
    fastReferences: [
        {
            referenceId: 'lesson-01-top-10',
            type: 'note',
            name: 'TOP 10 exercises'
        }
    ]
}