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
                // { referenceId: 'lesson-03', type: 'exercise', name: '.NET Framework Architecture' },
            ]
        },
        // {
        //     id: "chapter-02-language-basics",
        //     name: "Language Basics",
        //     lessonReferences: [
        //         { referenceId: 'lesson-01', type: 'exercise', name: 'First C# Application' },
        //         { referenceId: 'lesson-03', type: 'exercise', name: 'Variables' },
        //         { referenceId: 'lesson-04', type: 'exercise', name: 'Primitive Types' },
        //         { referenceId: 'lesson-04', type: 'exercise', name: 'Operators' },
        //         { referenceId: 'lesson-04', type: 'exercise', name: 'break and continue' },
        //         { referenceId: 'lesson-04', type: 'exercise', name: 'goto' },
        //     ]
        // },
        {
            id: "chapter-02-oop",
            name: "Object-Oriented Programming",
            lessonReferences: [
                { referenceId: 'lesson-01', type: 'exercise', name: 'covariance and contravariance' },
            ]
        },
        // {
        //     id: "chapter-04-fields",
        //     name: "Fields",
        //     lessonReferences: [
        //         { referenceId: 'lesson-01', type: 'exercise', name: 'aaa' },
        //     ]
        // },
        // {
        //     id: "chapter-05-methods",
        //     name: "Methods",
        //     lessonReferences: [
        //         { referenceId: 'lesson-01', type: 'exercise', name: 'aaa' },
        //     ]
        // },
        // {
        //     id: "chapter-06-type-conversion",
        //     name: "Type Conversion",
        //     lessonReferences: [
        //         { referenceId: 'lesson-01', type: 'exercise', name: 'aaa' },
        //     ]
        // },
        // {
        //     id: "chapter-07-constructors",
        //     name: "Constructors",
        //     lessonReferences: [
        //         { referenceId: 'lesson-01', type: 'exercise', name: 'aaa' },
        //     ]
        // },
    ],
    fastReferences: [
        {
            referenceId: 'lesson-01-top-10',
            type: 'note',
            name: 'TOP 10 exercises'
        },
        {
            referenceId: 'lesson-02-hard',
            type: 'note',
            name: 'hard c# quiz'
        },
    ]
}