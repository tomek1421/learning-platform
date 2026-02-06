import { CodeExercisDto } from "../types/CodeExerciseDto";
import { MultipleChoiceExerciseDto } from "../types/MultipleChoiceExerciseDto";

export const csHelloWorldExercise: CodeExercisDto = {
  id: 'cs-hello-world',
  instruction: 'Complete the missing code',
  correctOptionId: 2,
  options: [
    {
      id: 1,
      content: [{ type: 'or', value: 'World' }],
    },
    {
      id: 2,
      content: [{ type: 'bl', value: 'Tom' }],
    },
    {
      id: 3,
      content: [{ type: 'gr', value: 'Hello' }],
    },
    {
      id: 4,
      content: [{ type: 'or', value: 'Bye Bye' }],
    },
  ],
  lines: [
    {
      before: [
        { type: 'bl', value: 'public ' },
        { type: 'bl', value: 'static ' },
        { type: 'bl', value: 'void ' },
        { type: 'yl', value: 'Main' },
        { type: 'wh', value: '()' },
      ],
    },
    {
      before: [{ type: 'wh', value: '{' }],
    },
    {
      indent: 1,
      before: [
        { type: 'yl', value: 'Console' },
        { type: 'wh', value: '.' },
        { type: 'gr', value: 'WriteLine' },
        { type: 'wh', value: '(' },
        { type: 'or', value: '"Hello ' },
      ],
      gap: true,
      after: [
        { type: 'or', value: '"' },
        { type: 'wh', value: ');' },
      ],
    },
    {
      indent: 1,
      before: [
        { type: 'yl', value: 'Console' },
        { type: 'wh', value: '.' },
        { type: 'gr', value: 'WriteLine' },
        { type: 'wh', value: '(' },
        { type: 'or', value: '"Hello World"' },
        { type: 'wh', value: ');' },
      ],
    },
    {
      before: [{ type: 'wh', value: '}' }],
    },
  ],
};

export const multipleChoiceExercise: MultipleChoiceExerciseDto = {
  id: "cs-hello-002",
  instruction: [
    {
      content: [
        { token: "What is the output of this C# code?" },
        {
          token: [
            { type: "yl", value: "Console" },
            { type: "wh", value: "." },
            { type: "gr", value: "WriteLine" },
            { type: "wh", value: "(" },
            { type: "or", value: "\"Hello World!\"" },
            { type: "wh", value: ")" },
            { type: "wh", value: ";" }
          ]
        },
        
      ]
    }
  ],
  correctOptionId: 3,
  options: [
    {
      id: 1,
      answer: [
        {
          content: [
            { token: "Hello World!" },
            {
              token: [
                { type: "yl", value: "Console" },
                { type: "wh", value: "." },
                { type: "gr", value: "WriteLine" },
                { type: "wh", value: "(" },
                { type: "or", value: "\"Hello World!\"" },
                { type: "wh", value: ")" },
                { type: "wh", value: ";" }
              ]
            },
            { token: "Hello World! ala am akota kot ma ale" },
            {
              token: [
                { type: "yl", value: "Console" },
                { type: "wh", value: "." },
                { type: "gr", value: "WriteLine" },
                { type: "wh", value: "(" },
                { type: "or", value: "\"Hello World!\"" },
                { type: "wh", value: ")" },
                { type: "wh", value: ";" }
              ]
            },
          ]
        }
      ]
    },
    {
      id: 2,
      answer: [
        {
          content: [
            { token: "Hello" }
          ]
        }
      ]
    },
    {
      id: 3,
      answer: [
        {
          content: [
            { token: "Compilation error" }
          ]
        }
      ]
    }
  ]
};