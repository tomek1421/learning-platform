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
                { referenceId: '1', type: 'note', name: 'Introduction to .NET' },
                { referenceId: '2', type: 'note', name: 'CLI' },
                { referenceId: '3', type: 'note', name: 'CLR' },
                { referenceId: '4', type: 'exercise', name: 'Project structure' },
                { referenceId: '5', type: 'exercise', name: 'Main method' },
            ]
        },
        {
            id: "csharp-course-2",
            name: "Variables and Types",
            lessonReferences: [
                { referenceId: '6', type: 'note', name: 'Variables' },
                { referenceId: '7', type: 'exercise', name: 'Primitive types' },
                { referenceId: '8', type: 'note', name: 'Type inference (var)' },
                { referenceId: '9', type: 'note', name: 'Constants' },
                { referenceId: '10', type: 'exercise', name: 'Type casting' },
            ]
        },
        {
            id: "csharp-course-3",
            name: "Control Flow",
            lessonReferences: [
                { referenceId: '11', type: 'exercise', name: 'if statement' },
                { referenceId: '12', type: 'note', name: 'switch statement' },
                { referenceId: '13', type: 'exercise', name: 'for loop' },
                { referenceId: '14', type: 'exercise', name: 'while loop' },
                { referenceId: '15', type: 'exercise', name: 'foreach loop' },
            ]
        },
        {
            id: "csharp-course-4",
            name: "Methods",
            lessonReferences: [
                { referenceId: '16', type: 'exercise', name: 'Declaring methods' },
                { referenceId: '17', type: 'exercise', name: 'Parameters' },
                { referenceId: '18', type: 'note', name: 'Return values' },
                { referenceId: '19', type: 'exercise', name: 'Method overloading' },
                { referenceId: '20', type: 'exercise', name: 'Expression-bodied methods' },
            ]
        }
    ],
    fastReferences: [
        {
            referenceId: '11',
            type: 'note',
            name: 'TOP 10 exercises'
        },
        {
            referenceId: '22',
            type: 'exercise',
            name: 'For Interview'
        },
        {
            referenceId: '33',
            type: 'note',
            name: 'SHORT SUMMARY'
        }
    ]
}